"use client";

import { useProducts } from "@/hooks/useApi";
import { IProduct } from "@/models/Product";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  initialProducts?: IProduct[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const { data: products, isLoading, error } = useProducts();

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
        <div key={product._id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.isOnSale}</p>
        </div>
        // <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
