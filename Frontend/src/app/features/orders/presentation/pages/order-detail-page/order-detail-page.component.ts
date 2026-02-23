import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { OrdersLogicService } from '../../../domain/services/orders-logic.service';
import { Order, OrderStatus } from '../../../data/models/orders-response.model';
import { ToastService } from '../../../../../core/service/toast.service';

@Component({
  selector: 'app-order-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    RouterLink,
    TableModule,
    TagModule,
    ButtonModule,
    ProgressSpinnerModule,
    SkeletonModule,
  ],
  templateUrl: './order-detail-page.component.html',
})
export class OrderDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly logic = inject(OrdersLogicService);
  private readonly toast = inject(ToastService);

  order = signal<Order | null>(null);
  loading = signal(true);
  updatingStatus = signal(false);

  /** True when the order is in a terminal state. */
  isTerminal = computed(() => {
    const status = this.order()?.status;
    return status === 'Delivered' || status === 'Cancelled';
  });

  /** True when cancellation is allowed (only Pending or Preparing). */
  canCancel = computed(() => {
    const status = this.order()?.status;
    return status === 'Pending' || status === 'Preparing';
  });

  /** The next forward status in the flow, or null if terminal. */
  nextStatus = computed<OrderStatus | null>(() => {
    const map: Record<string, OrderStatus | null> = {
      Pending: 'Preparing',
      Preparing: 'Out for Delivery',
      'Out for Delivery': 'Delivered',
      Delivered: null,
      Cancelled: null,
    };
    return map[this.order()?.status ?? ''] ?? null;
  });

  /** Human-readable label for the next-status button. */
  nextStatusLabel = computed(() => {
    const map: Record<string, string> = {
      Preparing: 'Start Preparing',
      'Out for Delivery': 'Mark Out for Delivery',
      Delivered: 'Mark as Delivered',
    };
    const next = this.nextStatus();
    return next ? map[next] ?? next : '';
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/orders']);
      return;
    }
    this.loadOrder(id);
  }

  private async loadOrder(id: string): Promise<void> {
    this.loading.set(true);
    const data = await this.logic.getOrderById(id);
    if (!data) {
      this.toast.error('Order not found.');
      this.router.navigate(['/orders']);
      return;
    }
    this.order.set(data);
    this.loading.set(false);
  }

  async advanceStatus(): Promise<void> {
    const next = this.nextStatus();
    const current = this.order();
    if (!next || !current) return;
    await this.applyStatus(current.id, next);
  }

  async cancelOrder(): Promise<void> {
    const current = this.order();
    if (!current || !this.canCancel()) return;
    await this.applyStatus(current.id, 'Cancelled');
  }

  private async applyStatus(id: string, status: OrderStatus): Promise<void> {
    this.updatingStatus.set(true);
    const updated = await this.logic.updateOrderStatus(id, status);
    if (updated) {
      this.order.set(updated);
      this.toast.success(`Order status updated to "${status}".`);
    } else {
      this.toast.error('Failed to update order status.');
    }
    this.updatingStatus.set(false);
  }

  getStatusSeverity(status: OrderStatus): 'warn' | 'info' | 'contrast' | 'success' | 'danger' {
    switch (status) {
      case 'Pending':
        return 'warn';
      case 'Preparing':
        return 'info';
      case 'Out for Delivery':
        return 'contrast';
      case 'Delivered':
        return 'success';
      case 'Cancelled':
        return 'danger';
    }
  }
}
