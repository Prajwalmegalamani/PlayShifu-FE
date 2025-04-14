"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

export default function Tiles({
  title,
  titleColor = "text-gray-500",
  backgroundColor = "white",
  images,
  verticalSpacing = "gap-5",
  horizontalSpacing = "gap-5",
  justifyContent = "justify-around",
  overflow = "overflow-hidden",
  padding = "px-4",
  mobileOverflow = false,
}: {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  images: {
    icon: React.ReactNode;
    link?: string;
    text?: string;
  }[];
  verticalSpacing?: string;
  horizontalSpacing?: string;
  justifyContent?: string;
  overflow?: string;
  padding?: string;
  mobileOverflow?: boolean;
}) {
  // only on mobile
  const isMobile = useMediaQuery("(max-width: 768px)");
  const evenImages = images.slice(
    0,
    isMobile
      ? images.length % 2 === 0
        ? images.length
        : images.length - 1
      : images.length
  );

  return (
    <div
      className={`flex flex-col w-full items-start ${verticalSpacing} bg-${backgroundColor} ${overflow} ${padding} ${justifyContent}`}
    >
      {title && (
        <h2 className={`text-lg lg:text-2xl font-medium ${titleColor}`}>
          {title}
        </h2>
      )}
      <div
        className={`${
          mobileOverflow ? "flex overflow-x-auto" : "grid"
        } md:flex w-full ${horizontalSpacing} ${verticalSpacing} justify-around ${
          images.length === 2 ? "grid-cols-1" : "grid-cols-2"
        }
        } sm:grid-cols-4 lg:grid-cols-6`}
      >
        {evenImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border rounded-2xl p-4"
          >
            {image.icon}
            {image.text && (
              <p className="text-sm text-gray-500">{image.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
