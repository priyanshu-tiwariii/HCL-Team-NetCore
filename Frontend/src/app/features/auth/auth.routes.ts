import { Routes } from '@angular/router';

import { AuthPage } from './presentation/pages/auth-page/auth-page';
import { SignupPage } from './presentation/pages/signup-page/signup-page';
import { AddressPage } from './presentation/pages/address-page/address-page';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthPage,
  },
];

export const SIGNUP_ROUTES: Routes = [
  {
    path: '',
    component: SignupPage,
  },
  {
    path: 'address',
    component: AddressPage,
  },
];
