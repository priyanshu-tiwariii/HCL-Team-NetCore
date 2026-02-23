import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../storage/local-storage.service';

export const guestGuard: CanActivateFn = () => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);

  // If the user already has a token, redirect them to the dashboard
  if (storage.getToken()) {
    router.navigate(['/leads']);
    return false;
  }

  // If they don't have a token, let them see the login page
  return true;
};
