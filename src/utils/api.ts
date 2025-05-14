import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "@/types/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle token expiration
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const api = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.get(
        url,
        config
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse<T>>;
      return {
        success: false,
        error: axiosError.response?.data?.error || "Network error",
      };
    }
  },

  post: async <T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse<T>>;
      return {
        success: false,
        error: axiosError.response?.data?.error || "Network error",
      };
    }
  },

  put: async <T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.put(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse<T>>;
      return {
        success: false,
        error: axiosError.response?.data?.error || "Network error",
      };
    }
  },

  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.delete(
        url,
        config
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse<T>>;
      return {
        success: false,
        error: axiosError.response?.data?.error || "Network error",
      };
    }
  },
};

export default api;
