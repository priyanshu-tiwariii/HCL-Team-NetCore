import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import {
  UserProfileResponse,
  UserProfileUpdate,
  AddressResponse,
  AddressUpdate,
} from '../models/account-response.model';

@Injectable({ providedIn: 'root' })
export class AccountRepositoryService {
  private readonly api = inject(ApiService);

  // ─── User APIs ────────────────────────────────────────────

  /** GET /api/User/:id */
  async getUserProfile(id: number): Promise<UserProfileResponse> {
    return this.api.get<UserProfileResponse>(`/api/User/${id}`);
  }

  /** PUT /api/User/profile */
  async updateUserProfile(data: UserProfileUpdate): Promise<UserProfileResponse> {
    return this.api.put<UserProfileResponse>('/api/User/profile', data);
  }

  /** DELETE /api/User/profile */
  async deleteUserAccount(): Promise<void> {
    return this.api.delete<void>('/api/User/profile');
  }

  // ─── Address APIs ─────────────────────────────────────────

  /** GET /api/Address */
  async getAddress(): Promise<AddressResponse> {
    return this.api.get<AddressResponse>('/api/Address');
  }

  /** PUT /api/Address */
  async updateAddress(data: AddressUpdate): Promise<AddressResponse> {
    return this.api.put<AddressResponse>('/api/Address', data);
  }

  /** DELETE /api/Address */
  async deleteAddress(): Promise<void> {
    return this.api.delete<void>('/api/Address');
  }
}
