export class ErrorUtil {
  static extractErrorMessages(errorData: any): string[] {
    if (!errorData) return ['An unknown error occurred'];

    if (Array.isArray(errorData.errors)) {
      return errorData.errors.map((err: any) => err.message || 'Error');
    }

    if (typeof errorData.message === 'string') {
      return [errorData.message];
    }

    return ['An unexpected error occurred'];
  }
}
