import { UserProfile } from './user-profile.model';

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  data: UserProfile;
}
