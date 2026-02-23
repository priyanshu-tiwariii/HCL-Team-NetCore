import { MenuItem } from 'primeng/api';
export interface CustomMenuItem extends MenuItem {
  module?: string;
  items?: CustomMenuItem[];
}

export const NAV_CONFIG: CustomMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-th-large',
    routerLink: '/leads',
    module: 'DASHBOARD',
  },
  {
    label: 'Human Resource',
    icon: 'pi pi-users',
    items: [
      { label: 'Employee', icon: 'pi pi-id-card', routerLink: '/hr/employee', module: 'EMPLOYEE' },
      { label: 'POSP', icon: 'pi pi-user', routerLink: '/hr/posp', module: 'POSP' },
      { label: 'Hierarchy', icon: 'pi pi-sitemap', routerLink: '/hr/roles', module: 'HIERARCHY' },
    ],
  },
  {
    label: 'Policy',
    icon: 'pi pi-file-check',
    items: [
      { label: 'Motor', icon: 'pi pi-car', routerLink: '/policy/motor', module: 'MOTOR' },
      { label: 'Health', icon: 'pi pi-heart-fill', routerLink: '/policy/health', module: 'HEALTH' },
    ],
  },
  {
    label: 'employee', // Display name in the sidebar
    icon: 'pi pi-folder',
    routerLink: '/employee',
    module: '',
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
