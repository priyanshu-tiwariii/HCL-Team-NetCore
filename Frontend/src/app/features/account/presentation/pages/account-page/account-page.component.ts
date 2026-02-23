import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';

import { AuthState } from '../../../../auth/presentation/state/auth-state';
import { AccountLogicService } from '../../../domain/services/account-logic.service';
import { ToastService } from '../../../../../core/service/toast.service';
import { UserAddress } from '../../../data/models/account-response.model';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    SkeletonModule,
    DividerModule,
    AvatarModule,
  ],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css',
})
export class AccountPageComponent implements OnInit {
  readonly authState = inject(AuthState);
  private readonly profileService = inject(AccountLogicService);
  private readonly toast = inject(ToastService);
  private readonly fb = inject(FormBuilder);

  /** Address state (customer only) */
  readonly isLoadingAddress = signal(true);
  readonly currentAddress = signal<UserAddress | null>(null);

  /** Modal state */
  readonly isEditModalOpen = signal(false);
  readonly isSaving = signal(false);

  /** Address form */
  addressForm!: FormGroup;

  /** User initials for avatar */
  readonly initials = computed(() => {
    const name = this.authState.userProfile()?.userName ?? '';
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  });

  /** Display role label */
  readonly isAdmin = computed(() => this.authState.userProfile()?.isAdmin ?? false);

  ngOnInit(): void {
    this.initAddressForm();
    if (!this.isAdmin()) {
      this.loadAddress();
    } else {
      this.isLoadingAddress.set(false);
    }
  }

  // ─── Address ──────────────────────────────────────────────

  private initAddressForm(): void {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  private async loadAddress(): Promise<void> {
    try {
      const address = await this.profileService.getCustomerAddress();
      this.currentAddress.set(address);
    } catch {
      this.toast.error('Could not load your address.');
    } finally {
      this.isLoadingAddress.set(false);
    }
  }

  openEditModal(): void {
    const addr = this.currentAddress();
    if (addr) {
      this.addressForm.patchValue(addr);
    } else {
      this.addressForm.reset();
    }
    this.isEditModalOpen.set(true);
  }

  onModalHide(): void {
    // Reset form back to current address so no unsaved changes linger
    const addr = this.currentAddress();
    if (addr) {
      this.addressForm.patchValue(addr);
    } else {
      this.addressForm.reset();
    }
    this.isEditModalOpen.set(false);
  }

  async saveAddress(): Promise<void> {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }
    this.isSaving.set(true);
    try {
      const success = await this.profileService.updateCustomerAddress(this.addressForm.value);
      if (success) {
        this.currentAddress.set({ ...this.addressForm.value });
        this.isEditModalOpen.set(false);
        this.toast.success('Address updated successfully.');
      }
    } catch {
      this.toast.error('Failed to save address.');
    } finally {
      this.isSaving.set(false);
    }
  }
}
