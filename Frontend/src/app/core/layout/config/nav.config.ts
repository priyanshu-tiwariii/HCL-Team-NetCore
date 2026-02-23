import { MenuItem } from 'primeng/api';
export interface CustomMenuItem extends MenuItem {
  module?: string;
  items?: CustomMenuItem[];
}

export const NAV_CONFIG: CustomMenuItem[] = [
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
    separator: true,
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: '/settings',
    module: 'SETTINGS',
  },
];
