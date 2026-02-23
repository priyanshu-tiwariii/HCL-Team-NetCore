import { Injectable, signal, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { NAV_CONFIG, CustomMenuItem } from '../config/nav.config';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly router = inject(Router);

  // Global state for the sidebar
  isSidebarCollapsed = signal<boolean>(false);

  // Global state for the PrimeNG Breadcrumb component
  breadcrumbs = signal<MenuItem[]>([]);

  constructor() {
    // Automatically rebuild breadcrumbs on every route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.generateBreadcrumbs(event.urlAfterRedirects);
      });
  }

  toggleSidebar() {
    this.isSidebarCollapsed.update((val) => !val);
  }

  private generateBreadcrumbs(currentUrl: string) {
    const crumbs: MenuItem[] = [];

    // Recursive search to find the active route in the NAV_CONFIG tree
    const findPath = (items: CustomMenuItem[], url: string, currentPath: MenuItem[]): boolean => {
      for (const item of items) {
        if (item.separator) continue;

        // Create a breadcrumb item for the current node
        const newPath = [...currentPath, { label: item.label, routerLink: item.routerLink }];

        // Check if we found the exact route match
        if (item.routerLink && url.includes(item.routerLink)) {
          crumbs.push(...newPath);
          return true;
        }

        // Check if the route is inside the children of this node
        if (item.items && findPath(item.items, url, newPath)) {
          return true;
        }
      }
      return false;
    };

    // Strip out query parameters (e.g., ?id=123) for cleaner matching
    const cleanUrl = currentUrl.split('?')[0];
    findPath(NAV_CONFIG, cleanUrl, []);

    // Fallback: If route isn't in nav config, just capitalize the URL segments
    if (crumbs.length === 0) {
      const segments = cleanUrl.split('/').filter(Boolean);
      segments.forEach((seg) => {
        crumbs.push({ label: seg.charAt(0).toUpperCase() + seg.slice(1) });
      });
    }

    this.breadcrumbs.set(crumbs);
  }
}
