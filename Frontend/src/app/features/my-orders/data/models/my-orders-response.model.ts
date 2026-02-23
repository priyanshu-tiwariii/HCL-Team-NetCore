/** Order status for customer-facing order history */
export type CustomerOrderStatus = 'Placed' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface CustomerOrder {
  id: string;
  orderDate: Date;
  items: OrderItem[];
  totalAmount: number;
  status: CustomerOrderStatus;
  deliveryAddress: string;
  estimatedDeliveryTime?: string;
}
