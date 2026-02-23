import { MenuItem } from 'primeng/api';
export interface CustomMenuItem extends MenuItem {
  module?: string;
  items?: CustomMenuItem[];
}

export const NAV_CONFIG: CustomMenuItem[] = [
  {
    label: 'Storefront',
    icon: 'pi pi-home',
    routerLink: '/home',
    module: 'HOME',
  },
  {
    label: 'Dashboard',
    icon: 'pi pi-th-large',
    routerLink: '/dashboard',
    module: 'DASHBOARD',
  },
  {
    label: 'Orders',
    icon: 'pi pi-shopping-cart',
    routerLink: '/orders',
    module: 'ORDERS',
  },
  {
    label: 'Menu',
    icon: 'pi pi-book',
    routerLink: '/products',
    module: 'PRODUCTS',
  },
  {
    label: 'My Orders',
    icon: 'pi pi-history',
    routerLink: '/my-orders',
    module: 'MY_ORDERS',
  },

  {
    separator: true,
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: '/settings',
    module: 'SETTINGS',
  },
];
