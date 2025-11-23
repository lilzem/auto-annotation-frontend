import { AxiosInstance } from "axios";
import { createApiClient } from "./config";

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  data: {
    user: UserProfile;
    token: string;
  };
  message: string;
  success: boolean;
}

export class UserApi {
  private client: AxiosInstance;

  constructor(token?: string) {
    this.client = createApiClient(token);
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await this.client.post<AuthResponse>("/auth/register", {
      ...data,
      role: "content",
    });
    return response.data;
  }

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await this.client.post<AuthResponse>("/auth/login", data);
    return response.data;
  }

  async getProfile(): Promise<UserProfile> {
    const response = await this.client.get<UserProfile>("/auth/profile");
    return response.data;
  }
}
