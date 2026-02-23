export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  activeDeliveries: number;
  totalCustomers: number;
}

export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface RecentOrder {
  id: string;
  customerName: string;
  items: string;
  totalAmount: number;
  status: OrderStatus;
}

export interface DashboardResponse {
  metrics: DashboardMetrics;
  recentOrders: RecentOrder[];
}
