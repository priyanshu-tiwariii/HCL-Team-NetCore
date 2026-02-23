import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { StepperModule } from 'primeng/stepper';
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';

import { CustomerOrder, CustomerOrderStatus } from '../../../data/models/my-orders-response.model';
import { MyOrdersLogicService } from '../../../domain/services/my-orders-logic.service';
import { ToastService } from '../../../../../core/service/toast.service';

@Component({
  selector: 'app-my-orders-page',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    ButtonModule,
    DialogModule,
    TagModule,
    StepperModule,
    DividerModule,
    SkeletonModule,
  ],
  templateUrl: './my-orders-page.component.html',
})
export class MyOrdersPageComponent implements OnInit {
  private readonly logic = inject(MyOrdersLogicService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  /* ── State ── */
  activeOrders = signal<CustomerOrder[]>([]);
  pastOrders = signal<CustomerOrder[]>([]);
  loading = signal(true);
  selectedOrder = signal<CustomerOrder | null>(null);
  isModalOpen = signal(false);

  /** Steps for the order-tracking stepper */
  readonly trackingSteps = ['Placed', 'Preparing', 'Out for Delivery', 'Delivered'];

  ngOnInit(): void {
    this.loadOrders();
  }

  private async loadOrders(): Promise<void> {
    this.loading.set(true);
    const [active, past] = await Promise.all([
      this.logic.getActiveOrders(),
      this.logic.getPastOrders(),
    ]);
    this.activeOrders.set(active);
    this.pastOrders.set(past);
    this.loading.set(false);
  }

  /* ── Helpers ── */

  /** Map order status to the 0-based stepper activeStep index */
  getActiveStep(status: CustomerOrderStatus): number {
    const idx = this.trackingSteps.indexOf(status);
    return idx >= 0 ? idx : 0;
  }

  /** Summarise items as "2x Burger, 1x Fries…" */
  getItemsSummary(order: CustomerOrder): string {
    return order.items.map((i) => `${i.quantity}x ${i.name}`).join(', ');
  }

  getStatusSeverity(status: CustomerOrderStatus): 'success' | 'danger' | 'warn' | 'info' | 'secondary' {
    switch (status) {
      case 'Delivered': return 'success';
      case 'Cancelled': return 'danger';
      case 'Placed': return 'warn';
      case 'Preparing': return 'info';
      case 'Out for Delivery': return 'secondary';
    }
  }

  getStatusIcon(status: CustomerOrderStatus): string {
    switch (status) {
      case 'Delivered': return 'pi pi-check-circle';
      case 'Cancelled': return 'pi pi-times-circle';
      case 'Placed': return 'pi pi-clock';
      case 'Preparing': return 'pi pi-spin pi-cog';
      case 'Out for Delivery': return 'pi pi-truck';
    }
  }

  /* ── Modal ── */
  openReceipt(order: CustomerOrder): void {
    this.selectedOrder.set(order);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedOrder.set(null);
  }

  /* ── Actions ── */
  reorder(order: CustomerOrder): void {
    this.toast.success(`Reorder for ${order.id} placed! Items added to your cart.`);
  }

  startExploring(): void {
    this.router.navigate(['/home']);
  }
}
