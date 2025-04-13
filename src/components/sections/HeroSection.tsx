import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              See Your Little One Light Up with Joy
            </h1>
            <p className="text-xl mb-6">#PowerOfPlay</p>
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full font-medium text-lg"
            >
              <Link href="/shop">SHOP NOW</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96">
            <Image
              src="/images/hero.jpg"
              alt="Children playing with PlayShifu toys"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
