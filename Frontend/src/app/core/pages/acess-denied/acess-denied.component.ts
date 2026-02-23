import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="w-full max-w-md flex flex-col items-center text-center">
        <!-- ICON CONTAINER -->
        <div
          class="h-24 w-24 rounded-full
         bg-zinc-900
         shadow-lg
         flex items-center justify-center
         mb-7"
        >
          <i class="pi pi-lock text-primary-300" style="font-size: 2.1rem; transform: scale(1.25);">
          </i>
        </div>

        <!-- TITLE -->

        <h1 class="text-3xl font-semibold text-zinc-900 mb-2">Access Denied</h1>

        <!-- DESCRIPTION -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          You do not have permission to view this page. Please contact your administrator if you
          believe this is an error.
        </p>

        <!-- BUTTON -->

        <p-button
          label="Return to Login "
          icon="pi pi-arrow-left"
          severity="secondary"
          (onClick)="goBack()"
        >
        </p-button>
      </div>
    </section>
  `,
})
export class AccessDeniedComponent {
  private readonly router = inject(Router);

  goBack() {
    this.router.navigate(['/login']);
  }
}
