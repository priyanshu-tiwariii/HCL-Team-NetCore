import { MenuItem } from 'primeng/api';
export interface CustomMenuItem extends MenuItem {
  module?: string;
  role?: 'admin' | 'customer' | 'all';
  items?: CustomMenuItem[];
}

export const NAV_CONFIG: CustomMenuItem[] = [
  {
    label: 'Storefront',
    icon: 'pi pi-home',
    routerLink: '/home',
    module: 'HOME',
    role: 'customer',
  },
  {
    label: 'Dashboard',
    icon: 'pi pi-th-large',
    routerLink: '/dashboard',
    module: 'DASHBOARD',
    role: 'admin',
  },
  {
    label: 'Orders',
    icon: 'pi pi-shopping-cart',
    routerLink: '/orders',
    module: 'ORDERS',
    role: 'admin',
  },
  {
    label: 'Menu',
    icon: 'pi pi-book',
    routerLink: '/products',
    module: 'PRODUCTS',
    role: 'admin',
  },
  {
    label: 'My Orders',
    icon: 'pi pi-history',
    routerLink: '/my-orders',
    module: 'MY_ORDERS',
    role: 'customer',
  },
  {
    label: 'Cart',
    icon: 'pi pi-shopping-bag',
    routerLink: '/cart',
    module: 'CART',
    role: 'customer',
  },

  {
    separator: true,
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: '/settings',
    module: 'SETTINGS',
    role: 'all',
  },
];
