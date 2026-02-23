import { Injectable } from '@angular/core';
import { DeliveryAddress, PlaceOrderResponse } from '../../data/models/cart-response.model';

@Injectable({
  providedIn: 'root',
})
export class CartLogicService {
  /** Simulated saved addresses */
  private readonly mockAddresses: DeliveryAddress[] = [
    {
      id: 'addr-1',
      label: 'Home',
      fullName: 'Rahul Sharma',
      phone: '9876543210',
      addressLine1: '42, Green Valley Apartments',
      addressLine2: 'Near City Mall',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500081',
    },
  ];

  /** Get the user's default delivery address */
  async getDefaultAddress(): Promise<DeliveryAddress> {
    await this.delay(400);
    return { ...this.mockAddresses[0] };
  }

  /** Save / update a delivery address */
  async updateAddress(address: DeliveryAddress): Promise<DeliveryAddress> {
    await this.delay(500);
    const idx = this.mockAddresses.findIndex((a) => a.id === address.id);
    if (idx >= 0) {
      this.mockAddresses[idx] = { ...address };
    } else {
      this.mockAddresses.push({ ...address });
    }
    return { ...address };
  }

  /** Place an order (mock) */
  async placeOrder(): Promise<PlaceOrderResponse> {
    await this.delay(1200);
    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
    return { orderId, estimatedDelivery: '30–40 min' };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
