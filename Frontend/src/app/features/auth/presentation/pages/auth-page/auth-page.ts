import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthState } from '../../state/auth-state';
import { ToastService } from '../../../../../core/service/toast.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './auth-page.html',
})
export class AuthPage {
  private readonly fb = inject(FormBuilder);

  // 1. Inject the Toast Service
  private readonly toast = inject(ToastService);

  // 2. Inject the Auth State
  readonly state = inject(AuthState);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        await this.state.login({ email: email as string, password: password as string });
      } catch (err) {
        this.toast.error(this.state.error() || 'Login failed', 'Authentication Error');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
