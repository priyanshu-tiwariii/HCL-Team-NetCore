import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/exceptions/global-error-handler';
import { NoirZincTheme } from './theme/noir-zinc-theme';
import { authInterceptor } from './core/network/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Core Performance & Routing
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // 2. Network & Middleware (MERGED INTO ONE CALL!)
    provideHttpClient(withInterceptors([authInterceptor])),

    // 3. Animations & UI
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: NoirZincTheme,
      },
    }),
    MessageService,

    // 4. Global Error Handling
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
