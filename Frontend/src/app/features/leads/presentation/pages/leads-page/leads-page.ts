import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../../../../core/service/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leads-page',
  imports: [ButtonModule, ToastModule],
  templateUrl: './leads-page.html',
  styleUrl: './leads-page.scss',
})
export class LeadsPage {
  private readonly router = inject(Router);
  toast = inject(ToastService);
  name = 'Leads Page';
  onRetryClicked() {
    this.toast.info('Attempting to reconnect to server...', 'Loading');
  }

  showSuccess() {
    this.toast.success('The employee profile was updated successfully.', 'Profile Saved');
  }

  showError() {
    this.toast.error('Invalid email format provided.', 'Validation Failed');
  }

  showWarning() {
    this.toast.warning('Your session will expire in 5 minutes.', 'Session Warning');
  }

  showInfo() {
    this.toast.info('A new software update is available.', 'System Update');
  }

  testAccessDenied() {
    this.router.navigate(['/access-denied']);
  }
}
