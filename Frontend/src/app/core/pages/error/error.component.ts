import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-surface-0 px-6">
      <div class="max-w-md w-full flex flex-col items-center text-center">
        <!-- ICON -->

        <div
          class="h-24 w-24 rounded-full
               bg-zinc-900
               shadow-lg
               flex items-center justify-center
               mb-7"
        >
          <i
            class="pi pi-exclamation-triangle text-primary-400"
            style="font-size: 2.2rem; transform: scale(1.2)"
          >
          </i>
        </div>

        <!-- TITLE -->

        <h1 class="text-3xl font-semibold text-zinc-900 mb-2">Something went wrong</h1>

        <!-- MESSAGE -->

        <p class="text-sm text-zinc-500 mb-8 leading-relaxed">
          {{ errorMessage }}
        </p>

        <!-- ACTIONS -->

        <div class="flex gap-3">
          <p-button
            label="Try Again"
            icon="pi pi-refresh"
            severity="secondary"
            (onClick)="reloadPage()"
          >
          </p-button>

          <p-button
            label="Dashboard"
            icon="pi pi-home"
            severity="secondary"
            [outlined]="true"
            (onClick)="goHome()"
          >
          </p-button>
        </div>
      </div>
    </section>
  `,
})
export class ErrorComponent implements OnInit {
  private readonly router = inject(Router);

  errorMessage = 'An unexpected system error occurred. Please try again.';

  ngOnInit() {
    const stateMessage = history.state?.message;

    if (stateMessage) {
      this.errorMessage = stateMessage;
    }
  }

  reloadPage() {
    window.location.reload();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
