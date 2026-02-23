import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './core/pages/acess-denied/acess-denied.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';

import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { roleRedirectGuard } from './core/guards/role-redirect.guard';

export const routes: Routes = [
  // ── Public (guest-only) ──────────────────────────────────
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [guestGuard],
  },
  {
    path: 'signup',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.SIGNUP_ROUTES),
    canActivate: [guestGuard],
  },

  // ── App Shell (authenticated) ────────────────────────────
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      // Customer routes (authGuard only — inherited from parent)
      {
        path: 'home',
        loadChildren: () => import('./features/home').then(m => m.HOME_ROUTES),
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart').then(m => m.CART_ROUTES),
      },
      {
        path: 'my-orders',
        loadChildren: () => import('./features/my-orders').then(m => m.MY_ORDERS_ROUTES),
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/account').then(m => m.ACCOUNT_ROUTES),
      },

      // Admin routes (authGuard inherited + adminGuard)
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard').then(m => m.DASHBOARD_ROUTES),
        canActivate: [adminGuard],
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/orders/orders.routes').then(m => m.ORDERS_ROUTES),
        canActivate: [adminGuard],
      },
      {
        path: 'products',
        loadChildren: () => import('./features/product').then(m => m.PRODUCT_ROUTES),
        canActivate: [adminGuard],
      },

      { path: '', canActivate: [roleRedirectGuard], children: [] },
    ],
  },

  // ── Global error pages ───────────────────────────────────
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: 'not-found' },
];
