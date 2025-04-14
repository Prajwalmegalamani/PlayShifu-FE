"use client";
import {
  AwardIcon,
  Truck,
  ShieldCheck,
  CreditCard,
  ShoppingBag,
} from "lucide-react";
import Faq1 from "../../public/images/faq1.png";
import Faq2 from "../../public/images/faq2.png";
import Tiles from "@/components/layout/Tiles";
import HeroHeader from "@/components/layout/HeroHeader";
import Image from "next/image";
import ShowCase from "@/components/layout/ShowCase";
import Reviews from "@/components/layout/Reviews";
import Collections from "@/components/layout/Collections";
import { IProduct } from "@/components/ui/product-card";

export default function Home() {
  const popularProducts = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      discount: 10,
      image: Faq1,
      rating: 4.5,
      description: "Description 1",
      discountPercentage: 10,
      imageUrl: Faq1,
      isOnSale: true,
      reviewCount: 10,
      salePrice: 100,
      regularPrice: 100,
    },
    {
      id: "2",
      name: "Product 2",
      price: 100,
      discount: 10,
      image: Faq1,
      rating: 4.5,
      description: "Description 2",
      discountPercentage: 10,
      imageUrl: Faq1,
      isOnSale: true,
      reviewCount: 10,
      salePrice: 100,
      regularPrice: 100,
    },
    {
      id: "3",
      name: "Product 3",
      price: 100,
      discount: 10,
      image: Faq1,
      rating: 4.5,
      description: "Description 3",
      discountPercentage: 10,
      imageUrl: Faq1,
      isOnSale: true,
      reviewCount: 10,
      salePrice: 100,
      regularPrice: 100,
    },
    {
      id: "4",
      name: "Product 4",
      price: 100,
      discount: 10,
      image: Faq1,
      rating: 4.5,
      description: "Description 4",
      discountPercentage: 10,
      imageUrl: Faq1,
      isOnSale: true,
      reviewCount: 10,
      salePrice: 100,
      regularPrice: 100,
    },
  ];

  const faqImages = [
    {
      icon: <Image src={Faq1} alt="Faq 1" />,
    },
    {
      icon: <Image src={Faq2} alt="Faq 2" />,
    },
  ];

  const alsoAvailableAt = [
    {
      icon: <ShoppingBag className="w-20 h-20" />,
    },
    {
      icon: <ShoppingBag className="w-20 h-20" />,
    },
    {
      icon: <ShoppingBag className="w-20 h-20" />,
    },
    {
      icon: <ShoppingBag className="w-20 h-20" />,
    },
    {
      icon: <ShoppingBag className="w-20 h-20" />,
    },
  ];

  const trustBadges = [
    {
      icon: <Truck className="w-20 h-20" />,
      text: "Free Delivery",
    },
    {
      icon: <ShieldCheck className="w-20 h-20" />,
      text: "Free Delivery",
    },
    {
      icon: <CreditCard className="w-20 h-20" />,
      text: "Free Delivery",
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
      text: "Free Delivery",
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
      text: "Free Delivery",
    },
  ];
  const awards = [
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
    {
      icon: <AwardIcon className="w-20 h-20" />,
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 justify-center">
        <HeroHeader />
        {/* Multi award winning toys */}
        <Tiles
          title="Multi award winning toys"
          backgroundColor="white"
          images={awards}
          verticalSpacing="gap-5"
          horizontalSpacing="gap-5"
          justifyContent="justify-start"
          padding="py-[20px] px-[16px]"
        />

        <Collections
          title="Shop by category"
          tags={[
            "problem-solving",
            "geography",
            "coding",
            "stem",
            "packs-combos",
            "language-numbers",
          ]}
          products={popularProducts as unknown as IProduct[]}
          viewAllLink="/products"
        />
        {/* Trust Badges */}
        <Tiles
          backgroundColor="[#fefbe4]"
          padding="px-4 lg:px-[0px] py-5 lg:py-[40px]"
          images={trustBadges}
          verticalSpacing="gap-5"
          horizontalSpacing="gap-5"
          justifyContent="justify-around"
        />
        <Collections
          title="Combos"
          products={popularProducts as unknown as IProduct[]}
          viewAllLink="/products"
        />
        {/* Reviews */}
        <Reviews />
        {/* Show Case */}
        <ShowCase />

        {/* Also Available at */}
        <Tiles
          mobileOverflow={true}
          title="Also Available at"
          titleColor="text-black"
          backgroundColor="primary"
          padding="px-4 py-5 lg:py-[40px]"
          images={alsoAvailableAt}
          verticalSpacing="gap-5"
          horizontalSpacing="gap-5"
          justifyContent="justify-around"
        />
        <Tiles
          padding="px-4 py-5 lg:py-[40px]"
          images={faqImages}
          verticalSpacing="gap-5"
          horizontalSpacing="gap-5"
          justifyContent="justify-around"
        />
      </div>
      {/* <HeroSection /> */}

      {/* Featured Products Section */}
      {/* <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

          <h2 className="text-2xl font-bold mt-12 mb-6">Shop by age</h2>
          <AgeFilter
            ageRanges={ageRanges}
            selectedAgeRange={selectedAgeRange}
            onSelectAgeRange={setSelectedAgeRange}
          />

          <div className="mt-6">
            <Suspense fallback={<ProductGrid />}>
              <ProductGrid
                initialProducts={popularProducts}
                ageRange={selectedAgeRange}
              />
            </Suspense>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Shop by category</h2>
        </div> */}
    </>
  );
}
