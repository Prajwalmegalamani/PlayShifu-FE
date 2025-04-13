"use client";

import { useProducts } from "@/hooks/useApi";
import ProductCard from "@/components/ui/product-card";
import { IProduct } from "@/models/Product";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  initialProducts?: IProduct[];
  category?: string;
  ageRange?: string;
}

export default function ProductGrid({
  initialProducts,
  category,
  ageRange,
}: ProductGridProps) {
  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    category,
    ageRange,
  });

  // Use initial data if available and not loading new data
  const displayProducts = !isLoading && products ? products : initialProducts;

  if (isLoading && !initialProducts) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error && !initialProducts) {
    return <div className="text-red-500">Error loading products</div>;
  }

  if (!displayProducts || displayProducts.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
