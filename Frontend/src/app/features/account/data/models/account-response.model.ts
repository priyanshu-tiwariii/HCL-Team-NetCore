/** Detailed user profile shown on the account page */
export interface UserProfileDetails {
  name: string;
  email: string;
  mobileNumber?: string;
  companyName?: string;
}

/** Delivery address associated with a customer */
export interface UserAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
