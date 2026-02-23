import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthState } from '../../state/auth-state';
import { ToastService } from '../../../../../core/service/toast.service';
import { RegisterRequest } from '../../../data/models/register-request.model';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    PasswordModule,
  ],
  templateUrl: './signup-page.html',
})
export class SignupPage {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  readonly state = inject(AuthState);

  signupForm = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });

  async onSubmit() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;

      const registerData: RegisterRequest = {
        userName: formValue.userName!,
        email: formValue.email!,
        password: formValue.password!,
        phoneNumber: formValue.phoneNumber!,
      };

      const userId = await this.state.registerUser(registerData);

      if (userId) {
        this.router.navigate(['/signup/address'], { state: { userId } });
      } else {
        this.toast.error(this.state.error() || 'Registration failed. Please try again.');
      }
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
