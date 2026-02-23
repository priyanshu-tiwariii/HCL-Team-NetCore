/** Unified response from both /login and /register endpoints */
export interface AuthResponse {
  userId: number;
  userName: string;
  email: string;
  token: string;
}

/** Shape of the decoded JWT payload (claims from the .NET backend) */
export interface DecodedToken {
  id: string;
  email: string;
  userName: string;
  isAdmin: string;   // "True" | "False" (from C# .ToString())
  exp: number;
  iss?: string;
  aud?: string;
  [key: string]: unknown;
}
