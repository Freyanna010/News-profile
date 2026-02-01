export interface LoginRequest {
  name: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export type LogoutResponse = {
  success: boolean;
};
