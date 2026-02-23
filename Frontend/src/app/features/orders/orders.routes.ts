import { Routes } from '@angular/router';

import { OrdersPageComponent } from './presentation/pages/orders-page/orders-page.component';
import { OrderDetailPageComponent } from './presentation/pages/order-detail-page/order-detail-page.component';

export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    component: OrdersPageComponent,
  },
  {
    path: ':id',
    component: OrderDetailPageComponent,
  },
];

