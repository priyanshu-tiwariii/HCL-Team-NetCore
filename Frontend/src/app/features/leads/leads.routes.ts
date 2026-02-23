import { Routes } from '@angular/router';
import { LeadsPage } from './presentation/pages/leads-page/leads-page';

export const LEADS_ROUTES: Routes = [
  {
    path: '', // This resolves to '/leads' when lazy-loaded
    component: LeadsPage,
  },
];
