import { Injectable } from '@angular/core';
import {
  DashboardMetrics,
  RecentOrder,
} from '../../data/models/dashboard-response.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardLogicService {
  async getMetrics(): Promise<DashboardMetrics> {
    return this.delay({
      totalRevenue: 12500,
      totalOrders: 45,
      activeDeliveries: 8,
      totalCustomers: 320,
    });
  }

  async getRevenueChartData(): Promise<any> {
    return this.delay({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Revenue',
          data: [1200, 1900, 1500, 2100, 1800, 2400, 1600],
          borderColor: '#18181b',
          backgroundColor: 'rgba(24, 24, 27, 0.08)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#18181b',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    });
  }

  async getCategoryChartData(): Promise<any> {
    return this.delay({
      labels: ['Pizza', 'Burgers', 'Drinks', 'Desserts', 'Sides'],
      datasets: [
        {
          data: [35, 25, 20, 12, 8],
          backgroundColor: [
            '#18181b',
            '#3f3f46',
            '#71717a',
            '#a1a1aa',
            '#d4d4d8',
          ],
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    });
  }

  async getRecentOrders(): Promise<RecentOrder[]> {
    return this.delay([
      { id: 'ORD-1042', customerName: 'Aarav Sharma', items: '2x Margherita, 1x Coke', totalAmount: 580, status: 'Delivered' as const },
      { id: 'ORD-1043', customerName: 'Priya Patel', items: '1x Chicken Burger, 1x Fries', totalAmount: 320, status: 'Out for Delivery' as const },
      { id: 'ORD-1044', customerName: 'Rohan Gupta', items: '3x Paneer Pizza', totalAmount: 870, status: 'Preparing' as const },
      { id: 'ORD-1045', customerName: 'Sneha Iyer', items: '1x Veg Combo, 2x Lassi', totalAmount: 450, status: 'Pending' as const },
      { id: 'ORD-1046', customerName: 'Karan Mehta', items: '2x Classic Burger, 1x Shake', totalAmount: 640, status: 'Preparing' as const },
      { id: 'ORD-1047', customerName: 'Ananya Reddy', items: '1x Farm Fresh Pizza, 1x Brownie', totalAmount: 520, status: 'Pending' as const },
    ]);
  }

  private delay<T>(data: T, ms = 300): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }
}
