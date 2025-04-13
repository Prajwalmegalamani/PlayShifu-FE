import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export default function Reviews() {
  return (
    <div className="w-full h-full flex justify-center items-center align-middle">
      <Carousel className="w-full h-full flex justify-center items-center align-middle">
        <CarouselContent className="w-full h-full flex justify-center items-center align-middle">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full border">
            sc
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full border">
            1
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full border">
            2
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
