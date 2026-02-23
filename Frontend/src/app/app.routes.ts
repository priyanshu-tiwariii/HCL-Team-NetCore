import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './core/pages/acess-denied/acess-denied.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';

// Note: AuthPage is intentionally REMOVED from imports here because it is lazy-loaded!
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
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

  

  // 1. The App Shell (Layout Wrapper)
  {
    path: '',
    component: AppLayoutComponent,
    // canActivate: [authGuard],
    children: [

      {
      path: 'dashboard',
      loadChildren: () => import('./features/dashboard').then(m => m.DASHBOARD_ROUTES)
      },
      {
      path: 'orders',
        loadChildren: () => import('./features/orders/orders.routes').then(m => m.ORDERS_ROUTES)
      },
      

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // 2. The Global Pages
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: 'not-found' },
];
