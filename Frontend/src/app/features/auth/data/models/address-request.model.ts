export interface AddressRequest {
  userId: number;
  addressDetail: string;
  city: string;
  state: string;
  pincode: string;
}

export interface AddressResponse {
  addressId: number;
  userId: number;
  addressDetail: string;
  city: string;
  state: string;
  pincode: string;
}
