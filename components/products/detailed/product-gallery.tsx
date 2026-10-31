"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function nextImage() {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div>
      {/* Main Image Stage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f4f5f7] sm:aspect-[16/11]">
        <Image
          src={images[activeImageIndex]}
          alt={`${productName} - image ${activeImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
        />

        {/* Left arrow button */}
        <button
          type="button"
          onClick={prevImage}
          aria-label="Previous product image"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-lg bg-white/90 text-[#171717] shadow-md backdrop-blur-sm transition hover:bg-[#ff0000] hover:text-white sm:size-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow button */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next product image"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-lg bg-white/90 text-[#171717] shadow-md backdrop-blur-sm transition hover:bg-[#ff0000] hover:text-white sm:size-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter Pill */}
        <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {activeImageIndex + 1}/{images.length}
        </span>
      </div>

      {/* Thumbnails row below with smooth horizontal scrolling if overflowed */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] sm:pb-1">
        {images.map((img, idx) => {
          const isActive = activeImageIndex === idx;
          return (
            <button
              key={img + idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`relative size-20 shrink-0 overflow-hidden rounded-xl border-2 transition sm:size-24 ${isActive
                ? "border-[#ff0000] ring-2 ring-[#ff0000]/20"
                : "border-black/10 hover:border-black/30 opacity-70 hover:opacity-100"
                }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

