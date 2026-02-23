/** Delivery address for checkout */
export interface DeliveryAddress {
  id: string;
  label: string;            // e.g. "Home", "Office"
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
}

/** Bill breakdown shown in checkout summary */
export interface BillSummary {
  itemTotal: number;
  deliveryFee: number;
  taxRate: number;          // e.g. 0.05 for 5 %
  taxAmount: number;
  discount: number;
  grandTotal: number;
}

/** Response after placing an order */
export interface PlaceOrderResponse {
  orderId: string;
  estimatedDelivery: string;  // e.g. "30-40 min"
}
