import { Injectable, inject } from '@angular/core';
import { AuthRepository } from '../../data/repositories/auth-repository.service';
import { LocalStorageService } from '../../../../core/storage/local-storage.service';
import { LoginRequest } from '../../data/models/login-request.model';
import { LoginResponse } from '../../data/models/login-resoponse.model';
import { UserProfile } from '../../data/models/user-profile.model';

@Injectable({ providedIn: 'root' }) // <-- Angular's version of "static readonly instance"
export class AuthLogic {
  // 1. Network Repository
  private readonly network = inject(AuthRepository);

  // 2. Local Repository
  private readonly local = inject(LocalStorageService);

  /**
   * Orchestrates the login: API Call -> Local Storage
   */
  async login(credentials: LoginRequest): Promise<UserProfile> {
    // 1. Fetch from Network
    const response = await this.network.login(credentials);

    // 2. Save to Local Storage
    this.local.setToken(response.token);
    this.local.setUser(response.data);

    // 3. Return the data to the State layer
    return response.data;
  }
  logout(): void {
    this.local.clearAuth();
  }
}
