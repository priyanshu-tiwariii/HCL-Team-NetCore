import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AccountRepositoryService } from '../../data/repositories/account-repository.service';
import { LocalStorageService } from '../../../../core/storage/local-storage.service';
import { ToastService } from '../../../../core/service/toast.service';
import {
  UserProfileResponse,
  UserProfileUpdate,
  AddressResponse,
  AddressUpdate,
} from '../../data/models/account-response.model';

@Injectable({ providedIn: 'root' })
export class AccountLogicService {
  private readonly repo = inject(AccountRepositoryService);
  private readonly storage = inject(LocalStorageService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  // ─── Signals ──────────────────────────────────────────────

  readonly userProfile = signal<UserProfileResponse | null>(null);
  readonly userAddress = signal<AddressResponse | null>(null);
  readonly isLoading = signal(true);
  readonly isSaving = signal(false);

  // ─── Initialization ───────────────────────────────────────

  /**
   * Decode JWT to get user id, then fetch profile + address in parallel.
   */
  async loadAll(): Promise<void> {
    this.isLoading.set(true);
    try {
      const decoded = this.storage.decodeToken();
      if (!decoded?.id) {
        this.toast.error('Session expired. Please log in again.');
        this.router.navigate(['/login']);
        return;
      }

      const userId = Number(decoded.id);
      const [profile, address] = await Promise.allSettled([
        this.repo.getUserProfile(userId),
        this.repo.getAddress(),
      ]);

      this.userProfile.set(
        profile.status === 'fulfilled' ? profile.value : null
      );
      this.userAddress.set(
        address.status === 'fulfilled' ? address.value : null
      );
    } catch {
      this.toast.error('Failed to load profile data.');
    } finally {
      this.isLoading.set(false);
    }
  }

  // ─── Update Methods ───────────────────────────────────────

  async updateProfile(data: UserProfileUpdate): Promise<boolean> {
    this.isSaving.set(true);
    try {
      const updated = await this.repo.updateUserProfile(data);
      this.userProfile.set(updated);
      this.toast.success('Profile updated successfully.');
      return true;
    } catch {
      this.toast.error('Failed to update profile.');
      return false;
    } finally {
      this.isSaving.set(false);
    }
  }

  async updateAddress(data: AddressUpdate): Promise<boolean> {
    this.isSaving.set(true);
    try {
      const updated = await this.repo.updateAddress(data);
      this.userAddress.set(updated);
      this.toast.success('Address updated successfully.');
      return true;
    } catch {
      this.toast.error('Failed to update address.');
      return false;
    } finally {
      this.isSaving.set(false);
    }
  }

  // ─── Delete Methods ───────────────────────────────────────

  async deleteAddress(): Promise<void> {
    try {
      await this.repo.deleteAddress();
      this.userAddress.set(null);
      this.toast.success('Address deleted.');
    } catch {
      this.toast.error('Failed to delete address.');
    }
  }

  async deleteAccount(): Promise<void> {
    try {
      await this.repo.deleteUserAccount();
      this.storage.clearAuth();
      this.toast.success('Account deleted. Goodbye!');
      this.router.navigate(['/login']);
    } catch {
      this.toast.error('Failed to delete account.');
    }
  }
}
