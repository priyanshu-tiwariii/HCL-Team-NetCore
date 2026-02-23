import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-resoponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  private readonly api = inject(ApiService);

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return this.api.post<LoginResponse>('/api/Employee/login', credentials);
  }

  async getProfile(employeeId: string | number): Promise<any> {
    return this.api.get<any>(`/api/Employee/${employeeId}`);
  }
}
