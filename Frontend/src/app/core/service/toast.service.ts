import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly messageService = inject(MessageService);

  success(message: string, title = 'Success') {
    this.messageService.add({
      key: 'crm',

      severity: 'success',

      summary: title,

      detail: message,

      life: 2500,
    });
  }

  error(message: string, title = 'Error') {
    this.messageService.add({
      key: 'crm',

      severity: 'error',

      summary: title,

      detail: message,

      life: 2000,
    });
  }

  warning(message: string, title = 'Warning') {
    this.messageService.add({
      key: 'crm',

      severity: 'warn',

      summary: title,

      detail: message,

      life: 2000,
    });
  }

  info(message: string, title = 'Information') {
    this.messageService.add({
      key: 'crm',

      severity: 'info',

      summary: title,

      detail: message,

      life: 2000,
    });
  }
}
