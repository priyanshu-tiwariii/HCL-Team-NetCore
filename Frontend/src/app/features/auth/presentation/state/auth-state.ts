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
  userProfile = signal<UserProfile | null>(null);

  async login(credentials: LoginRequest): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      await this.logic.login(credentials);
      this.isAuthenticated.set(true);
      this.userProfile.set(this.storage.getUser());

      this.toast.success('Welcome back!');
      this.router.navigate(['/dashboard']);
    });
  }

  /**
   * Step 1: Register user and return the new userId.
   */
  async registerUser(data: RegisterRequest): Promise<number | undefined> {
    return await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      return await this.logic.register(data);
    });
  }

  /**
   * Step 2: Save address for the registered user.
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

  /** @deprecated Use registerUser() + saveAddress() for the 2-page flow. */
  async register(registerData: any, addressData: any, onSuccess: () => void): Promise<void> {
    await ExceptionAdapter.guard({ loading: this.loading, error: this.error }, async () => {
      await this.logic.registerAndSaveAddress(registerData, addressData);
      this.toast.success('Account created successfully! Please log in.', 'Welcome');
      onSuccess();
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

  initSession(): void {
    const user = this.storage.getUser();
    if (user) {
      this.isAuthenticated.set(true);
      this.userProfile.set(user);
    }
  }
}
