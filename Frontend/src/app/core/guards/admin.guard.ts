import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../storage/local-storage.service';

/**
 * Functional guard that restricts routes to admin users only.
 * Redirects non-admin users to the home page.
 */
export const adminGuard: CanActivateFn = () => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);

  if (storage.isAdmin()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
