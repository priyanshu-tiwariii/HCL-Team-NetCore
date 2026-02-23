import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';
import { ToastService } from '../service/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);
  const toast = inject(ToastService);

  const token = storage.getToken();

  // 1. Clone the request and inject the required headers
  let headers = req.headers
    .set('ngrok-skip-browser-warning', 'true') // Bypasses the Ngrok HTML warning
    .set('Accept', 'application/json');

  // 2. Attach the token if the user is logged in
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }

  const authReq = req.clone({ headers });

  // 3. Send the request and listen for the response
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // If the token is expired or invalid...
      if (error.status === 401) {
        // Make sure we aren't already trying to log in (prevents infinite loops)
        if (!req.url.includes('/login')) {
          storage.clearAuth();
          toast.error('Your session has expired. Please log in again.', 'Unauthorized');
          router.navigate(['/login']);
        }
      }

      // Pass the error down the chain so the ExceptionAdapter can still catch it
      return throwError(() => error);
    }),
  );
};
