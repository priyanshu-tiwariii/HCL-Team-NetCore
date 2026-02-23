import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogic } from '../../domain/services/auth-logic.service';
import { LoginRequest } from '../../data/models/login-request.model';
import { RegisterRequest } from '../../data/models/register-request.model';
import { AddressRequest } from '../../data/models/address-request.model';
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

  loading = signal<boolean>(false);
  error = signal<string | undefined>(undefined);
  isAuthenticated = signal<boolean>(false);
  isAdmin = signal<boolean>(false);
  userProfile = signal<UserProfile | null>(null);

  // ─── Login ────────────────────────────────────────────────

  async login(credentials: LoginRequest): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      await this.logic.login(credentials);
      this.syncFromToken();

      this.toast.success('Welcome back!');

      // Redirect admins to dashboard, customers to storefront
      this.router.navigate([this.isAdmin() ? '/dashboard' : '/home']);
    });
  }

  // ─── Registration (2-page flow) ───────────────────────────

  /**
   * Step 1: Register the user and return the new userId.
   */
  async registerUser(data: RegisterRequest): Promise<number | undefined> {
    return await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      const response = await this.logic.register(data);
      return response.userId;
    });
  }

  /**
   * Step 2: Save address, then redirect to login.
   */
  async saveAddress(data: AddressRequest): Promise<boolean> {
    const result = await ExceptionAdapter.guard(
      { loading: this.loading, error: this.error },
      async () => {
        await this.logic.saveAddress(data);
        this.toast.success('Account created successfully! Please log in.', 'Welcome');
        return true;
      },
    );
    return result === true;
  }

  // ─── Logout ───────────────────────────────────────────────

  async logout(): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      this.logic.logout();

      this.isAuthenticated.set(false);
      this.isAdmin.set(false);
      this.userProfile.set(null);

      this.router.navigate(['/login']);
    });
  }

  // ─── Session bootstrap ────────────────────────────────────

  /**
   * Called on app boot (e.g. APP_INITIALIZER or root component ngOnInit).
   * Reads the stored JWT, validates expiry, and hydrates signals.
   */
  initSession(): void {
    if (this.storage.isTokenValid()) {
      this.syncFromToken();
    } else {
      // Token missing or expired — clear everything
      this.storage.clearAuth();
      this.isAuthenticated.set(false);
      this.isAdmin.set(false);
      this.userProfile.set(null);
    }
  }

  // ─── Private helper ───────────────────────────────────────

  /**
   * Derive all auth signals from the current JWT in storage.
   */
  private syncFromToken(): void {
    const profile = this.storage.getUserFromToken();
    this.isAuthenticated.set(!!profile);
    this.isAdmin.set(profile?.isAdmin ?? false);
    this.userProfile.set(profile);
  }
}
