import axios from "axios";
import { IProduct } from "@/models/Product";

const serverApiClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ProductQueryParams {
  category?: string;
  ageRange?: string;
}

export async function getProducts(
  params: ProductQueryParams = {}
): Promise<IProduct[]> {
  try {
    const response = await serverApiClient.get<IProduct[]>("/products", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<IProduct | null> {
  try {
    const response = await serverApiClient.get<IProduct>(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

export async function getFeaturedProducts(): Promise<IProduct[]> {
  try {
    const response = await serverApiClient.get<IProduct[]>(
      "/products/featured"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getProductsByCategory(
  category: string
): Promise<IProduct[]> {
  try {
    const response = await serverApiClient.get<IProduct[]>("/products", {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
}

export async function getProductsByAgeRange(
  ageRange: string
): Promise<IProduct[]> {
  try {
    const response = await serverApiClient.get<IProduct[]>("/products", {
      params: { ageRange },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for age range ${ageRange}:`, error);
    return [];
  }
}
