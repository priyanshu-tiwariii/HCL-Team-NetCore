/** User profile derived from the decoded JWT token */
export interface UserProfile {
  id: string;
  userName: string;
  email: string;
  isAdmin: boolean;
}
