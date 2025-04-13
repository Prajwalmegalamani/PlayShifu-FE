"use client";

import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { IProduct } from "@/models/Product";

export interface ProductQueryParams {
  category?: string;
  ageRange?: string;
}

// Client-side API functions
const fetchProducts = async (params: ProductQueryParams = {}) => {
  const response = await apiClient.get<IProduct[]>("/products", { params });
  return response.data;
};

const fetchProductById = async (id: string) => {
  const response = await apiClient.get<IProduct>(`/products/${id}`);
  return response.data;
};

const fetchFeaturedProducts = async () => {
  const response = await apiClient.get<IProduct[]>("/products/featured");
  return response.data;
};

// React Query hooks
export function useProducts(params: ProductQueryParams = {}) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
}

export function useProductById(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: () => fetchFeaturedProducts(),
  });
}
