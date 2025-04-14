import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  discountPercentage: number | undefined;
  imageUrl: string;
  isOnSale: boolean;
  rating: number;
  reviewCount: number;
  salePrice: number;
  regularPrice: number;
}

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md w-full flex justify-start items-start flex-col">
      <Link href={`/product/${product._id}`} className="block relative h-48">
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
          />
          {product.isOnSale && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {product.discountPercentage}% off
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/product/${product._id}`}>
          <h3 className="font-bold text-lg hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviewCount} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex items-center">
          {product.isOnSale ? (
            <>
              <span className="font-bold">${product.salePrice}</span>
              <span className="text-gray-500 line-through ml-2">
                ${product.regularPrice}
              </span>
            </>
          ) : (
            <span className="font-bold">${product.regularPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-amber-500 hover:bg-amber-600">
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
