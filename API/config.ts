import axios, { AxiosInstance } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
export const TOKEN_COOKIE_NAME = "auth_token";

export const createApiClient = (token?: string): AxiosInstance => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  return client;
};
