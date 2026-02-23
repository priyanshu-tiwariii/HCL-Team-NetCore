/** Request body for updating user profile — PUT /api/User/profile */
export interface UserProfileUpdate {
  userName: string;
  email: string;
  mobileNo: string;
}

/** Response from GET /api/User/:id */
export interface UserProfileResponse {
  userId: number;
  userName: string;
  email: string;
  mobileNo: string;
  isAdmin: boolean;
  createdAt: string;
}

/** Request body for creating / updating address — PUT /api/Address */
export interface AddressUpdate {
  addressDetail: string;
  city: string;
  state: string;
  pincode: string;
}

/** Response from GET /api/Address */
export interface AddressResponse {
  addressId: number;
  userId: number;
  addressDetail: string;
  city: string;
  state: string;
  pincode: string;
}
