export interface IProduct {
  _id: string;
  name: string;
  description: string;
  regularPrice: number;
  salePrice?: number;
  price: number;
  imageUrl: string;
  ageRange: string[];
  categories: string[];
  rating: number;
  reviewCount: number;
  isOnSale: boolean;
  discountPercentage?: number;
  isFeatured?: boolean;
}
