import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="max-w-md w-full flex flex-col items-center text-center">
        <!-- 404 TEXT -->

        <h1 class="text-4xl font-bold text-zinc-900 mb-2">404</h1>

        <h2 class="text-lg font-medium text-zinc-700 mb-3">Page Not Found</h2>

        <!-- MESSAGE -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        <!-- ACTION -->

        <p-button
          label="Return to Dashboard"
          icon="pi pi-home"
          severity="secondary"
          (onClick)="goHome()"
        >
        </p-button>
      </div>
    </section>
  `,
})
export class NotFoundComponent {
  private readonly router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
