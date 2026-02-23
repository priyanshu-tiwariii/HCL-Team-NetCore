import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../storage/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(LocalStorageService);
  const router = inject(Router);

  // If the user has a token, they are authenticated. Let them pass.
  if (storage.getToken()) {
    return true;
  }

  // If they DO NOT have a token, kick them to the login page
  router.navigate(['/login']);
  return false;
};
