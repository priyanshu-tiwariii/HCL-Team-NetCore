import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from '../service/toast.service';
import { ErrorUtil } from '../utils/error.util';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private readonly injector: Injector,
    private readonly zone: NgZone,
  ) {}

  handleError(error: any): void {
    const toastService = this.injector.get(ToastService);
    const router = this.injector.get(Router);

    this.zone.run(() => {
      // 1. HTTP API ERRORS
      if (error instanceof HttpErrorResponse) {
        if (error.status === 400) {
          const messages = ErrorUtil.extractErrorMessages(error.error);
          messages.forEach((msg) => toastService.warning(msg, 'Validation Error'));
        } else if (error.status === 401) {
          toastService.error('Your session has expired. Please log in again.', 'Unauthorized');
        } else if (error.status === 403) {
          router.navigate(['/access-denied']);
        } else if (error.status === 404) {
          toastService.error('The requested API endpoint or resource was not found.', 'Not Found');
          console.error('API 404 Error:', error.url);
        } else if (error.status >= 500) {
          // SERVER SIDE CRASH: Pass a dynamic server message
          console.error('Fatal Server Error:', error);
          router.navigate(['/error'], {
            state: {
              message:
                'The server is currently unreachable or encountered a critical failure. Please try again later.',
            },
          });
        }
      }

      // 2. CLIENT-SIDE CODE CRASH
      else {
        console.error('Fatal Client Error:', error);

        // CLIENT SIDE CRASH: Pass a dynamic client message
        router.navigate(['/error'], {
          state: {
            message:
              'The application crashed due to an unexpected UI error. Please refresh the page to restore functionality.',
          },
        });
      }
    });
  }
}
