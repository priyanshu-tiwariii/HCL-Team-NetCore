import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../storage/local-storage.service';

/**
 * Redirect guard for the default route.
 * Admins → /dashboard, Customers → /home.
 */
export const roleRedirectGuard: CanActivateFn = () => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);

  const target = storage.isAdmin() ? '/dashboard' : '/home';
  return router.createUrlTree([target]);
};
