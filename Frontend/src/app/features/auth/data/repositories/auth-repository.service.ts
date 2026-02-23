import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { LoginRequest } from '../models/login-request.model';
import { AuthResponse } from '../models/login-resoponse.model';
import { RegisterRequest } from '../models/register-request.model';
import { AddressRequest, AddressResponse } from '../models/address-request.model';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private readonly api = inject(ApiService);

  /** POST /api/User/login → AuthResponse */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return this.api.post<AuthResponse>('/api/User/login', credentials);
  }

  /** POST /api/User/register → AuthResponse */
  async register(data: RegisterRequest): Promise<AuthResponse> {
    return this.api.post<AuthResponse>('/api/User/register', data);
  }

  /** POST /api/Address → AddressResponse */
  async saveAddress(data: AddressRequest): Promise<AddressResponse> {
    return this.api.post<AddressResponse>('/api/Address', data);
  }
}
