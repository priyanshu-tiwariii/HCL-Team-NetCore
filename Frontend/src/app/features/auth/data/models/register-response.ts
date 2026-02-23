export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    userId: number;
  };
}