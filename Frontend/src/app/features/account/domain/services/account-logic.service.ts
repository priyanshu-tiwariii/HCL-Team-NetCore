import { Injectable } from '@angular/core';
import { UserAddress } from '../../data/models/account-response.model';

@Injectable({
  providedIn: 'root',
})
export class AccountLogicService {
  /** Mock saved address */
  private savedAddress: UserAddress = {
    street: '42, Green Valley Apartments, Road No. 5',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    pincode: '500081',
  };

  /** Fetch the customer's default delivery address */
  async getCustomerAddress(): Promise<UserAddress> {
    await this.delay(500);
    return { ...this.savedAddress };
  }

  /** Save / update the customer's delivery address */
  async updateCustomerAddress(address: UserAddress): Promise<boolean> {
    await this.delay(500);
    this.savedAddress = { ...address };
    return true;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
