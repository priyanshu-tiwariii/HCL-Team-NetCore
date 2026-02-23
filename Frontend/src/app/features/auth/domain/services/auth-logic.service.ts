import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../../data/repositories/auth-repository.service';
import { LocalStorageService } from '../../../../core/storage/local-storage.service';
import { LoginRequest } from '../../data/models/login-request.model';
import { RegisterRequest } from '../../data/models/register-request.model';
import { AddressRequest } from '../../data/models/address-request.model';
import { AuthResponse } from '../../data/models/login-resoponse.model';

@Injectable({ providedIn: 'root' })
export class AuthLogic {
  private readonly network = inject(AuthRepository);
  private readonly local = inject(LocalStorageService);

  /**
   * Login: call the API, store the JWT token.
   * The UserProfile is derived from the token (no separate user object stored).
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await this.network.login(credentials);
    this.local.setToken(response.token);
    return response;
  }

  /**
   * Register: call the API and return the AuthResponse (contains userId).
   */
  async register(data: RegisterRequest): Promise<AuthResponse> {
    return await this.network.register(data);
  }

  /**
   * Save the user's delivery address.
   */
  async saveAddress(data: AddressRequest): Promise<void> {
    await this.network.saveAddress(data);
  }

  /**
   * Full registration flow:
   * 1. Register the user
   * 2. Save their address
   */
  async registerAndSaveAddress(
    registerData: RegisterRequest,
    addressData: AddressRequest,
  ): Promise<void> {
    await this.register(registerData);
    await this.saveAddress(addressData);
  }

  /** Clear stored credentials */
  logout(): void {
    this.local.clearAuth();
  }
}
