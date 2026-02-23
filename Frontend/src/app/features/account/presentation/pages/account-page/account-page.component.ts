import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AccountLogicService } from '../../../domain/services/account-logic.service';

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
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css',
})
export class AccountPageComponent implements OnInit {
  readonly state = inject(AccountLogicService);
  private readonly fb = inject(FormBuilder);
  private readonly confirmService = inject(ConfirmationService);

  /** Modal visibility */
  readonly isProfileModalOpen = signal(false);
  readonly isAddressModalOpen = signal(false);

  /** Forms */
  profileForm!: FormGroup;
  addressForm!: FormGroup;

  /** User initials for the avatar area */
  readonly initials = computed(() => {
    const name = this.state.userProfile()?.userName ?? '';
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U';
  });

  ngOnInit(): void {
    this.initForms();
    this.state.loadAll();
  }

  // ─── Form Init ────────────────────────────────────────────

  private initForms(): void {
    this.profileForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });

    this.addressForm = this.fb.group({
      addressDetail: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  // ─── Profile Modal ────────────────────────────────────────

  openProfileModal(): void {
    const p = this.state.userProfile();
    if (p) {
      this.profileForm.patchValue({
        userName: p.userName,
        email: p.email,
        mobileNo: p.mobileNo,
      });
    }
    this.isProfileModalOpen.set(true);
  }

  onProfileModalHide(): void {
    const p = this.state.userProfile();
    if (p) {
      this.profileForm.patchValue({
        userName: p.userName,
        email: p.email,
        mobileNo: p.mobileNo,
      });
    } else {
      this.profileForm.reset();
    }
    this.isProfileModalOpen.set(false);
  }

  async saveProfile(): Promise<void> {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const success = await this.state.updateProfile(this.profileForm.value);
    if (success) {
      this.isProfileModalOpen.set(false);
    }
  }

  // ─── Address Modal ────────────────────────────────────────

  openAddressModal(): void {
    const a = this.state.userAddress();
    if (a) {
      this.addressForm.patchValue({
        addressDetail: a.addressDetail,
        city: a.city,
        state: a.state,
        pincode: a.pincode,
      });
    } else {
      this.addressForm.reset();
    }
    this.isAddressModalOpen.set(true);
  }

  onAddressModalHide(): void {
    const a = this.state.userAddress();
    if (a) {
      this.addressForm.patchValue({
        addressDetail: a.addressDetail,
        city: a.city,
        state: a.state,
        pincode: a.pincode,
      });
    } else {
      this.addressForm.reset();
    }
    this.isAddressModalOpen.set(false);
  }

  async saveAddress(): Promise<void> {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }
    const success = await this.state.updateAddress(this.addressForm.value);
    if (success) {
      this.isAddressModalOpen.set(false);
    }
  }

  // ─── Delete Actions ───────────────────────────────────────

  confirmDeleteAddress(): void {
    this.confirmService.confirm({
      message: 'Are you sure you want to delete your delivery address?',
      header: 'Delete Address',
      icon: 'pi pi-trash',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.state.deleteAddress(),
    });
  }

  confirmDeleteAccount(): void {
    this.confirmService.confirm({
      message: 'Are you sure? This action is irreversible. All your data will be permanently deleted.',
      header: 'Delete Account',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.state.deleteAccount(),
    });
  }
}
