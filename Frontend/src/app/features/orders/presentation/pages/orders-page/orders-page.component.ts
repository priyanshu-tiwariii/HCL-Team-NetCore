import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { OrdersLogicService } from '../../../domain/services/orders-logic.service';
import { Order, OrderStatus } from '../../../data/models/orders-response.model';

interface StatusOption {
  label: string;
  value: OrderStatus | 'All';
}

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, TableModule, TagModule, ButtonModule, SelectModule, SkeletonModule],
  templateUrl: './orders-page.component.html',
})
export class OrdersPageComponent implements OnInit {
  private readonly logic = inject(OrdersLogicService);
  private readonly router = inject(Router);

  orders = signal<Order[]>([]);
  loading = signal(true);
  selectedStatus = signal<OrderStatus | 'All'>('All');

  statusOptions: StatusOption[] = [
    { label: 'All Statuses', value: 'All' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Preparing', value: 'Preparing' },
    { label: 'Out for Delivery', value: 'Out for Delivery' },
    { label: 'Delivered', value: 'Delivered' },
    { label: 'Cancelled', value: 'Cancelled' },
  ];

  filteredOrders = computed(() => {
    const status = this.selectedStatus();
    const all = this.orders();
    return status === 'All' ? all : all.filter((o) => o.status === status);
  });

  ngOnInit(): void {
    this.loadOrders();
  }

  private async loadOrders(): Promise<void> {
    this.loading.set(true);
    const data = await this.logic.getOrders();
    this.orders.set(data);
    this.loading.set(false);
  }

  onStatusFilterChange(value: OrderStatus | 'All'): void {
    this.selectedStatus.set(value);
  }

  viewOrder(order: Order): void {
    this.router.navigate(['/orders', order.id]);
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
