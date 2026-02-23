export interface UserProfile {
  employeeId: number;
  employeeCode: string;
  userName: string;
  email: string;
  mobileNumber?: string;
  companyName?: string;
  isAdmin: boolean;
}
