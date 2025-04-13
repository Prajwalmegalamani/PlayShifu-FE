import React, { useState, useEffect } from "react";
import HeroHeaderImage from "../../../public/images/hero-header.jpg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";

export default function HeroHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [HeroHeaderImage, HeroHeaderImage, HeroHeaderImage];
  const slideInterval = 5000; // 5 seconds

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-5">
      <Carousel>
        <CarouselContent className="w-full h-full !pl-0 ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`transition-opacity duration-500 w-full max-h-[90vh] lg:max-h-[80vh] !pl-0 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots for navigation */}
      <div className="flex justify-center items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border border-secondary ${
              index === currentSlide
                ? "bg-secondary border-secondary"
                : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
