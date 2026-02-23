import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthState } from '../../state/auth-state';
import { ToastService } from '../../../../../core/service/toast.service';
import { AddressRequest } from '../../../data/models/address-request.model';

@Component({
  selector: 'app-address-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ButtonModule, InputTextModule],
  templateUrl: './address-page.html',
})
export class AddressPage implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  readonly state = inject(AuthState);

  /** userId received from the signup page via navigation state */
  private userId!: number;

  addressForm = this.fb.group({
    addressDetail: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
  });

  ngOnInit(): void {
    // Ensure user came from the signup page
    const navState = history.state;
    if (!navState?.userId) {
      this.router.navigate(['/signup']);
      return;
    }
    this.userId = navState.userId;
  }

  async onSubmit() {
    if (this.addressForm.valid) {
      const formValue = this.addressForm.value;

      const addressData: AddressRequest = {
        userId: this.userId,
        addressDetail: formValue.addressDetail!,
        city: formValue.city!,
        state: formValue.state!,
        pincode: formValue.pincode!,
      };

      const success = await this.state.saveAddress(addressData);

      if (success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
}
