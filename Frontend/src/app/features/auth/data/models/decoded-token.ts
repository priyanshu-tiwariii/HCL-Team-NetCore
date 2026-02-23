export interface DecodedToken {
  id: string;
  email: string;
  userName: string;
  isAdmin: string;  
  exp: number;
  iss?: string;
  aud?: string;
  [key: string]: unknown;
}