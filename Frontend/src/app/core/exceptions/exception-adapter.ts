import { HttpErrorResponse } from '@angular/common/http';
import { WritableSignal } from '@angular/core';

// 1. Define an interface that accepts Angular Signals
export interface SignalState {
  loading?: WritableSignal<boolean>;
  error?: WritableSignal<string | undefined | null>;
}

export class ExceptionAdapter {
  static parse(error: any): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) return 'Network error. Please check your internet connection.';
      if (error.status >= 500) return 'Something went wrong on the server. Please try again later.';

      const responseData = error.error;
      if (responseData) {
        if (typeof responseData === 'string') return responseData;
        if (responseData.message) return responseData.message;
        if (responseData.detail) return responseData.detail;
        if (Array.isArray(responseData.errors) && responseData.errors.length > 0) {
          return responseData.errors[0];
        }
      }
      return error.message || 'An unexpected HTTP error occurred.';
    }

    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;

    return 'An unexpected error occurred!';
  }

  static async guard<T>(
    state: SignalState,
    fn: () => Promise<T>,
    options: {
      errorFn?: (error: any) => string;
      skipLoading?: boolean;
      skipError?: boolean;
      rethrow?: boolean;
    } = {},
  ): Promise<T | undefined> {
    const { errorFn, skipLoading = false, skipError = false, rethrow = false } = options;

    // Initialize Signals
    if (!skipLoading && state.loading) state.loading.set(true);
    if (!skipError && state.error) state.error.set(null);

    try {
      // Execute the business logic
      const result = await fn();

      // Success: Turn off loading
      if (!skipLoading && state.loading) state.loading.set(false);

      return result;
    } catch (error: any) {
      console.error('[ExceptionAdapter Guard Caught]:', error);

      const errorMsg = errorFn ? errorFn(error) : this.parse(error);

      // Update the Signals directly
      if (!skipLoading && state.loading) state.loading.set(false);
      if (!skipError && state.error) state.error.set(errorMsg);

      if (rethrow) {
        throw error;
      }

      return undefined;
    }
  }
}
