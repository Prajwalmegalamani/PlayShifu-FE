"use client";
import React, { useState } from "react";
import { Newspaper, Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const showCase = [
  {
    id: 1,
    image: <Newspaper />,
  },
  {
    id: 2,
    image: <Newspaper />,
  },
  {
    id: 3,
    image: <Newspaper />,
  },
  {
    id: 4,
    image: <Newspaper />,
  },
  {
    id: 5,
    image: <Newspaper />,
  },
  {
    id: 6,
    image: <Newspaper />,
  },
];

export default function ShowCase() {
  const [currentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: <Youtube className="w-20 h-20" />,
      text: "AS SEEN ON",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis",
    },
    {
      id: 2,
      image: <Youtube className="w-20 h-20" />,
      text: "AS SEEN ON",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis",
    },
    {
      id: 3,
      image: <Youtube className="w-20 h-20" />,
      text: "AS SEEN ON",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 lg:gap-20 px-4 py-5">
      <Carousel className="relative w-full h-full">
        <CarouselContent className="w-full h-full !pl-0 ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`transition-opacity duration-500 w-full h-full !pl-0 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col-reverse lg:flex-row justify-center items-center align-middle gap-5 lg:gap-10 w-full">
                <div className="w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] flex justify-center items-center align-middle border border-gray-300 rounded-md">
                  {slide.image}
                </div>
                <div className="flex flex-col justify-start lg:justify-center items-start lg:items-center gap-2">
                  <span className="text-lg lg:text-2xl font-bold">
                    {slide.text}
                  </span>
                  <p className="text-sm lg:text-base">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 left-2 flex items-center justify-center">
          <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
        </div>
        <div className="absolute top-1/2 right-2 flex items-center justify-center">
          <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
        </div>
      </Carousel>

      <div className="w-full h-full flex justify-start lg:justify-center items-center gap-5 lg:gap-10 lg:px-5 flex-wrap">
        {showCase.map((item) => (
          <div
            key={item.id}
            className="w-[45%] lg:w-[200px] h-[50px] lg:h-[50px] border border-gray-300 rounded-md"
          >
            {item.image}
          </div>
        ))}
      </div>
    </div>
  );
}
