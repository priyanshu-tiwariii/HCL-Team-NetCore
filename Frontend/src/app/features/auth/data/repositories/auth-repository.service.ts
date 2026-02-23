import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-resoponse.model';
import { RegisterRequest } from '../models/register-request.model';
import { RegisterResponse } from '../models/register-response';
import { AddressRequest } from '../models/address-request.model';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private readonly api = inject(ApiService);

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return this.api.post<LoginResponse>('/api/Auth/login', credentials);
  }

  // 1. API to register the user
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    return this.api.post<RegisterResponse>('/api/Auth/register', data);
  }

  // 2. API to save the user's address
  async saveAddress(data: AddressRequest): Promise<any> {
    return this.api.post<any>('/api/User/address', data);
  }
}