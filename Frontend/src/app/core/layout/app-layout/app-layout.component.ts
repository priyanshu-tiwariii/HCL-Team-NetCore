import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

// PrimeNG Modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

import { LayoutService } from '../services/layout.service';
import { NAV_CONFIG, CustomMenuItem } from '../config/nav.config';
import { AuthState } from '../../../features/auth/presentation/state/auth-state';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    ButtonModule,
    AvatarModule,
    TooltipModule,
    RippleModule,
    MenuModule,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  readonly layout = inject(LayoutService);
  private readonly router = inject(Router);
  readonly authState = inject(AuthState);

  readonly navItems = NAV_CONFIG;
  private readonly expandedGroups = signal<Set<string>>(new Set());
  private readonly activeUrl = signal<string>('');

  profileMenuItems: MenuItem[] = [];

  constructor() {
    // Seed initial URL
    this.activeUrl.set(this.router.url);
    // Auto-open the active group on load
    this.autoOpenActiveGroup(this.router.url);

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.activeUrl.set(e.urlAfterRedirects);
    });

    // Reactively update menu items based on Auth State
    effect(() => {
      const user = this.authState.userProfile();
      this.profileMenuItems = [
        {
          label: `<div class="flex flex-col gap-0.5"><span class="text-zinc-900 font-semibold text-[13.5px] tracking-tight leading-tight">${user?.userName || 'User Account'}</span><span class="text-zinc-500 text-[12px] leading-tight">${user?.email || 'user@example.com'}</span></div>`,
          escape: false,
          styleClass: 'pointer-events-none pb-1',
        },
        { separator: true },
        { label: 'Account Settings', icon: 'pi pi-cog' },
        { separator: true },
        {
          label: 'Log out',
          icon: 'pi pi-sign-out',
          styleClass: 'logout-item',
          command: () => this.authState.logout(),
        },
      ];
    });
  }

  isItemActive(item: CustomMenuItem): boolean {
    if (!item.routerLink) return false;
    return this.activeUrl().startsWith(item.routerLink);
  }

  isGroupActive(group: CustomMenuItem): boolean {
    return !!group.items?.some((child) => this.isItemActive(child));
  }

  isGroupOpen(label: string): boolean {
    return this.expandedGroups().has(label);
  }

  toggleGroup(label: string): void {
    this.expandedGroups.update((set) => {
      const next = new Set(set);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  navigate(item: CustomMenuItem): void {
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }

  private autoOpenActiveGroup(url: string): void {
    for (const item of this.navItems) {
      if (item.items?.some((child) => child.routerLink && url.startsWith(child.routerLink))) {
        this.expandedGroups.update((set) => new Set([...set, item.label!]));
      }
    }
  }
}
