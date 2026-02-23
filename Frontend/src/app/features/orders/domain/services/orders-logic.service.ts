import { Injectable } from '@angular/core';
import { Order, OrderStatus } from '../../data/models/orders-response.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersLogicService {
  private orders: Order[] = [
    {
      id: 'ORD-2001',
      customerName: 'Aarav Sharma',
      customerPhone: '9876543210',
      deliveryAddress: '12, Bandra West, Mumbai 400050',
      items: [
        { name: 'Margherita Pizza', quantity: 2, price: 249 },
        { name: 'Garlic Bread', quantity: 1, price: 129 },
        { name: 'Coca-Cola 500ml', quantity: 2, price: 60 },
      ],
      totalAmount: 747,
      orderDate: '2026-02-23T10:15:00Z',
      status: 'Pending',
    },
    {
      id: 'ORD-2002',
      customerName: 'Priya Patel',
      customerPhone: '9123456780',
      deliveryAddress: '45, Koramangala, Bengaluru 560034',
      items: [
        { name: 'Chicken Burger', quantity: 1, price: 199 },
        { name: 'French Fries', quantity: 1, price: 99 },
        { name: 'Mango Lassi', quantity: 1, price: 89 },
      ],
      totalAmount: 387,
      orderDate: '2026-02-23T11:30:00Z',
      status: 'Preparing',
    },
    {
      id: 'ORD-2003',
      customerName: 'Rohan Gupta',
      customerPhone: '9988776655',
      deliveryAddress: '78, Sector 18, Noida 201301',
      items: [
        { name: 'Paneer Tikka Pizza (Large)', quantity: 1, price: 399 },
        { name: 'Cheesy Dip', quantity: 2, price: 49 },
        { name: 'Brownie Sundae', quantity: 1, price: 149 },
      ],
      totalAmount: 646,
      orderDate: '2026-02-23T09:45:00Z',
      status: 'Out for Delivery',
    },
    {
      id: 'ORD-2004',
      customerName: 'Sneha Iyer',
      customerPhone: '9012345678',
      deliveryAddress: '23, Anna Nagar, Chennai 600040',
      items: [
        { name: 'Veg Combo Meal', quantity: 2, price: 279 },
        { name: 'Sweet Lassi', quantity: 2, price: 69 },
      ],
      totalAmount: 696,
      orderDate: '2026-02-22T18:00:00Z',
      status: 'Delivered',
    },
    {
      id: 'ORD-2005',
      customerName: 'Karan Mehta',
      customerPhone: '9876012345',
      deliveryAddress: '56, MG Road, Pune 411001',
      items: [
        { name: 'Classic Chicken Burger', quantity: 2, price: 219 },
        { name: 'Onion Rings', quantity: 1, price: 119 },
        { name: 'Chocolate Shake', quantity: 1, price: 139 },
      ],
      totalAmount: 696,
      orderDate: '2026-02-22T20:10:00Z',
      status: 'Cancelled',
    },
    {
      id: 'ORD-2006',
      customerName: 'Ananya Reddy',
      customerPhone: '9345678901',
      deliveryAddress: '89, Jubilee Hills, Hyderabad 500033',
      items: [
        { name: 'Farm Fresh Pizza', quantity: 1, price: 349 },
        { name: 'Brownie', quantity: 2, price: 99 },
        { name: 'Cold Coffee', quantity: 1, price: 119 },
      ],
      totalAmount: 666,
      orderDate: '2026-02-23T12:00:00Z',
      status: 'Pending',
    },
    {
      id: 'ORD-2007',
      customerName: 'Vikram Singh',
      customerPhone: '9567890123',
      deliveryAddress: '34, Civil Lines, Jaipur 302006',
      items: [
        { name: 'Tandoori Paneer Wrap', quantity: 3, price: 179 },
        { name: 'Masala Fries', quantity: 1, price: 89 },
      ],
      totalAmount: 626,
      orderDate: '2026-02-23T08:30:00Z',
      status: 'Preparing',
    },
  ];

  async getOrders(): Promise<Order[]> {
    return this.delay([...this.orders]);
  }

  async getOrderById(id: string): Promise<Order | undefined> {
    const order = this.orders.find((o) => o.id === id);
    return this.delay(order ? { ...order, items: [...order.items] } : undefined);
  }

  async updateOrderStatus(id: string, newStatus: OrderStatus): Promise<Order | undefined> {
    const idx = this.orders.findIndex((o) => o.id === id);
    if (idx === -1) return this.delay(undefined);
    this.orders[idx] = { ...this.orders[idx], status: newStatus };
    return this.delay({ ...this.orders[idx] });
  }

  private delay<T>(data: T, ms = 500): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }
}
