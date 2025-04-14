"use client";
import ProductCard, { IProduct } from "@/components/ui/product-card";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function Collections({
  title,
  tags,
  products,
  viewAllLink,
}: {
  title: string;
  products: IProduct[];
  tags?: string[];
  viewAllLink?: string;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(
    "problem-solving"
  );
  const [showArrows, setShowArrows] = useState<boolean>(false);

  useEffect(() => {
    if (products.length > 3) {
      setShowArrows(true);
    }
  }, [products]);

  return (
    <div className="w-full flex flex-col items-center gap-8 justify-center px-4">
      <h2 className="lg:text-2xl text-lg font-medium w-full text-start">
        {title}
      </h2>
      {tags && (
        <div className="w-full flex items-center gap-10 justify-start py-5 border-y border-gray-500 overflow-x-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`  text-gray-500 py-2 px-4 border text-lg font-medium border-gray-500 rounded-md ${
                tag === selectedTag && "bg-secondary text-white"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {viewAllLink && (
        <div className="w-full flex items-center justify-end">
          <Link href={viewAllLink} className="text-sm text-gray-500 underline">
            View all
          </Link>
        </div>
      )}
      <div className="w-full flex items-center gap-5 justify-around overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {showArrows && (
        <div className="absolute top-0 left-0 z-[100] bg-red-500">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
