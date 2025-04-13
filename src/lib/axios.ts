"use client";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    const { response } = error;

    if (response && response.status === 401) {
      console.error("Unauthorized access");
    }

    if (response && response.status === 404) {
      console.error("Resource not found");
    }

    if (response && response.status >= 500) {
      console.error("Server error");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
