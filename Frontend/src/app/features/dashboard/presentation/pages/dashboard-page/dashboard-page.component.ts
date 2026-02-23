import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DashboardLogicService } from '../../../domain/services/dashboard-logic.service';
import {
  DashboardMetrics,
  RecentOrder,
  OrderStatus,
} from '../../../data/models/dashboard-response.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, ChartModule, TableModule, TagModule, ButtonModule],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  private readonly logic = inject(DashboardLogicService);

  metrics = signal<DashboardMetrics | null>(null);
  revenueChartData = signal<any>(null);
  revenueChartOptions = signal<any>(null);
  categoryChartData = signal<any>(null);
  categoryChartOptions = signal<any>(null);
  recentOrders = signal<RecentOrder[]>([]);

  readonly metricCards = [
    { key: 'totalRevenue', label: "Today's Revenue", icon: 'pi pi-indian-rupee', prefix: '₹' },
    { key: 'totalOrders', label: 'Total Orders', icon: 'pi pi-shopping-cart', prefix: '' },
    { key: 'activeDeliveries', label: 'Active Deliveries', icon: 'pi pi-truck', prefix: '' },
    { key: 'totalCustomers', label: 'Total Customers', icon: 'pi pi-users', prefix: '' },
  ];

  private readonly statusFlow: Record<string, OrderStatus | null> = {
    Pending: 'Preparing',
    Preparing: 'Out for Delivery',
    'Out for Delivery': 'Delivered',
    Delivered: null,
  };

  ngOnInit(): void {
    this.loadDashboard();
  }

  private async loadDashboard(): Promise<void> {
    const [metrics, revenueData, categoryData, orders] = await Promise.all([
      this.logic.getMetrics(),
      this.logic.getRevenueChartData(),
      this.logic.getCategoryChartData(),
      this.logic.getRecentOrders(),
    ]);

    this.metrics.set(metrics);
    this.revenueChartData.set(revenueData);
    this.categoryChartData.set(categoryData);
    this.recentOrders.set(orders);

    this.revenueChartOptions.set({
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#71717a', font: { size: 12 } },
          border: { display: false },
        },
        y: {
          grid: { color: '#f4f4f5' },
          ticks: {
            color: '#71717a',
            font: { size: 12 },
            callback: (value: number) => '₹' + value,
          },
          border: { display: false },
        },
      },
      interaction: { intersect: false, mode: 'index' },
      maintainAspectRatio: false,
    });

    this.categoryChartOptions.set({
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#3f3f46',
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 16,
            font: { size: 12 },
          },
        },
      },
      cutout: '65%',
      maintainAspectRatio: false,
    });
  }

  getMetricValue(key: string): number {
    const m = this.metrics();
    if (!m) return 0;
    return (m as any)[key] ?? 0;
  }

  getStatusSeverity(status: string): 'warn' | 'info' | 'success' | 'contrast' {
    switch (status) {
      case 'Pending':
        return 'warn';
      case 'Preparing':
        return 'info';
      case 'Out for Delivery':
        return 'contrast';
      case 'Delivered':
        return 'success';
      default:
        return 'info';
    }
  }

  getNextStatus(status: string): string | null {
    return this.statusFlow[status] ?? null;
  }

  updateOrderStatus(orderId: string, newStatus: string): void {
    this.recentOrders.update((orders) =>
      orders.map((o) => (o.id === orderId ? { ...o, status: newStatus as OrderStatus } : o)),
    );
  }
}
