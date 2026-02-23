import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../../data/repositories/auth-repository.service';
import { LocalStorageService } from '../../../../core/storage/local-storage.service';
import { LoginRequest } from '../../data/models/login-request.model';
import { UserProfile } from '../../data/models/user-profile.model';
import { RegisterRequest } from '../../data/models/register-request.model';
import { AddressRequest } from '../../data/models/address-request.model';

@Injectable({ providedIn: 'root' })
export class AuthLogic {
  private readonly network = inject(AuthRepository);
  private readonly local = inject(LocalStorageService);

  async login(credentials: LoginRequest): Promise<UserProfile> {
    const response = await this.network.login(credentials);
    this.local.setToken(response.token);
    this.local.setUser(response.data);
    return response.data;
  }

  /**
   * Step 1: Register the user and return the new userId.
   */
  async register(data: RegisterRequest): Promise<number> {
    const response = await this.network.register(data);
    return response.data.userId;
  }

  /**
   * Step 2: Save the user's delivery address.
   */
  async saveAddress(data: AddressRequest): Promise<void> {
    await this.network.saveAddress(data);
  }

  
  async registerAndSaveAddress(
    registerData: RegisterRequest,
    addressData: Omit<AddressRequest, 'userId'>,
  ): Promise<void> {
    const newUserId = await this.register(registerData);

    const fullAddressPayload: AddressRequest = {
      ...addressData,
      userId: newUserId,
    };

    await this.saveAddress(fullAddressPayload);
  }

  logout(): void {
    this.local.clearAuth();
  }
}
