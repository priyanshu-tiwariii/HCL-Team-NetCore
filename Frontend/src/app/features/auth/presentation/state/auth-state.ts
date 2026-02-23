import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogic } from '../../domain/services/auth-logic.service';
import { LoginRequest } from '../../data/models/login-request.model';
import { UserProfile } from '../../data/models/user-profile.model';
import { ToastService } from '../../../../core/service/toast.service';
import { ExceptionAdapter } from '../../../../core/exceptions/exception-adapter';
import { LocalStorageService } from '../../../../core/storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  private readonly logic = inject(AuthLogic);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  private readonly storage = inject(LocalStorageService);

  // Angular Signals (equivalent to Zustand state)
  loading = signal<boolean>(false);
  error = signal<string | undefined>(undefined);
  isAuthenticated = signal<boolean>(false);
  userProfile = signal<UserProfile | null>(null);

  async login(credentials: LoginRequest): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      await this.logic.login(credentials);
      this.isAuthenticated.set(true);
      this.userProfile.set(this.storage.getUser());

      this.toast.success('Welcome back!');
      this.router.navigate(['/leads']);
    });
  }

  async logout(): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      this.logic.logout();

      // Clear the Signals
      this.isAuthenticated.set(false);
      this.userProfile.set(null);

      this.router.navigate(['/login']);
    });
  }

  /**
   * Called when the app first boots up to restore the session from local storage
   */
  initSession(): void {
    const user = this.storage.getUser();
    if (user) {
      this.isAuthenticated.set(true);
      this.userProfile.set(user);
    }
  }
}
