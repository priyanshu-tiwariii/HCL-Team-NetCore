import { Injectable } from '@angular/core';
import { CustomerOrder, CustomerOrderStatus } from '../../data/models/my-orders-response.model';

/**
 * Mock service for customer order history.
 * Returns active (in-progress) and past (terminal) orders.
 */
@Injectable({ providedIn: 'root' })
export class MyOrdersLogicService {

  private readonly orders: CustomerOrder[] = [
    {
      id: 'ORD-5001',
      orderDate: new Date(Date.now() - 25 * 60_000),
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 249 },
        { name: 'Cold Coffee', quantity: 2, price: 129 },
      ],
      totalAmount: 507,
      status: 'Preparing',
      deliveryAddress: '42, Jayanagar 4th Block, Bengaluru',
      estimatedDeliveryTime: '35–45 min',
    },
    {
      id: 'ORD-5002',
      orderDate: new Date(Date.now() - 10 * 60_000),
      items: [
        { name: 'Chicken Burger', quantity: 2, price: 199 },
        { name: 'Mango Lassi', quantity: 1, price: 99 },
      ],
      totalAmount: 497,
      status: 'Placed',
      deliveryAddress: '18, Koramangala 5th Block, Bengaluru',
      estimatedDeliveryTime: '40–50 min',
    },
    {
      id: 'ORD-4890',
      orderDate: new Date('2026-02-21T19:30:00'),
      items: [
        { name: 'Paneer Tikka Pizza', quantity: 1, price: 349 },
        { name: 'Garlic Breadsticks', quantity: 1, price: 119 },
        { name: 'Mango Lassi', quantity: 2, price: 99 },
      ],
      totalAmount: 666,
      status: 'Delivered',
      deliveryAddress: '42, Jayanagar 4th Block, Bengaluru',
    },
    {
      id: 'ORD-4872',
      orderDate: new Date('2026-02-20T13:15:00'),
      items: [
        { name: 'Classic Veg Burger', quantity: 3, price: 149 },
      ],
      totalAmount: 447,
      status: 'Delivered',
      deliveryAddress: '18, Koramangala 5th Block, Bengaluru',
    },
    {
      id: 'ORD-4801',
      orderDate: new Date('2026-02-18T20:00:00'),
      items: [
        { name: 'Pepperoni Pizza', quantity: 1, price: 329 },
        { name: 'BBQ Chicken Wings', quantity: 1, price: 229 },
        { name: 'Cold Coffee', quantity: 1, price: 129 },
      ],
      totalAmount: 687,
      status: 'Cancelled',
      deliveryAddress: '42, Jayanagar 4th Block, Bengaluru',
    },
    {
      id: 'ORD-4755',
      orderDate: new Date('2026-02-15T12:45:00'),
      items: [
        { name: 'Chocolate Lava Cake', quantity: 2, price: 179 },
        { name: 'Mango Lassi', quantity: 2, price: 99 },
      ],
      totalAmount: 556,
      status: 'Delivered',
      deliveryAddress: '7, HSR Layout Sector 2, Bengaluru',
    },
  ];

  private readonly terminalStatuses: CustomerOrderStatus[] = ['Delivered', 'Cancelled'];

  /** Returns in-progress orders (not delivered/cancelled). */
  getActiveOrders(): Promise<CustomerOrder[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(this.orders.filter((o) => !this.terminalStatuses.includes(o.status))),
        500
      )
    );
  }

  /** Returns completed or cancelled orders. */
  getPastOrders(): Promise<CustomerOrder[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(this.orders.filter((o) => this.terminalStatuses.includes(o.status))),
        500
      )
    );
  }
}
