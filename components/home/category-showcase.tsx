"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import type { Category, Product } from "@/components/data/site-data";
import { ProductCard } from "@/components/ui/product-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface CategoryShowcaseProps {
  categories: Category[];
  products: Product[];
  onSelectCategory?: (category: string) => void;
}

interface CategoryRowProps {
  category: Category;
  categoryProducts: Product[];
  onSelectCategory?: (category: string) => void;
}

function CategoryRow({
  category,
  categoryProducts,
  onSelectCategory,
}: CategoryRowProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="rounded-2xl bg-[#f4f5f7] p-3 sm:p-4">


      {/* Grid: Left Category Card (compact height) + Right Products Carousel */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Compact Category banner with bg image */}
        <div className="relative min-h-[160px] overflow-hidden rounded-xl bg-[#171717] p-4 text-[#171717] lg:col-span-3 lg:min-h-[220px] flex flex-col justify-start items-start shadow-xs">
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/35" /> */}

          <div className="relative z-10 flex flex-col items-start text-left">
            <h4 className="text-[16px] font-bold leading-tight tracking-tight sm:text-[18px]">
              {category.name}
            </h4>
            <a
              href="#products"
              onClick={() => onSelectCategory?.(category.name)}
              className="mt-2.5 inline-flex items-center gap-1.5 border border-[#171717] hover:border-[#ff0000] rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#171717] shadow-xs transition hover:bg-[#ff0000] hover:text-white"
            >
              <span>View all</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Right: Products Carousel with reduced height & edge-hover navigation arrows */}
        <div className="group/carousel relative min-w-0 lg:col-span-9">
          {/* Left arrow on edge - appears on carousel hover */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label={`Previous ${category.name} products`}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black/10 bg-white/95 text-[#171717] shadow-lg opacity-0 pointer-events-none transition-all duration-200 group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto hover:bg-[#ff0000] hover:text-white hover:scale-105 active:scale-95 sm:size-11"
          >
            <ArrowLeft size={19} />
          </button>

          {/* Right arrow on edge - appears on carousel hover */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label={`Next ${category.name} products`}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black/10 bg-white/95 text-[#171717] shadow-lg opacity-0 pointer-events-none transition-all duration-200 group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto hover:bg-[#ff0000] hover:text-white hover:scale-105 active:scale-95 sm:size-11"
          >
            <ArrowRight size={19} />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 2.5, spaceBetween: 14 },
              1024: { slidesPerView: 3, spaceBetween: 14 },
              1280: { slidesPerView: 3.5, spaceBetween: 14 },
            }}
            className="h-full"
          >
            {categoryProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} className="h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export function CategoryShowcase({
  categories,
  products,
  onSelectCategory,
}: CategoryShowcaseProps) {
  // Only the 5 main categories (skip "All products")
  const showcaseCategories = categories.filter((c) => c.name !== "All products");

  return (
    <section className="px-4 pb-6 pt-2 sm:px-6 lg:px-10 lg:pb-8">
      <div className="mx-auto max-w-[1440px] space-y-6">
        {showcaseCategories.map((category, index) => {
          const categoryProducts = products.filter(
            (p) => p.category === category.name
          );

          return (
            <ScrollReveal key={category.name} variant="fade-up" delayMs={index * 50}>
              <CategoryRow
                category={category}
                categoryProducts={categoryProducts}
                onSelectCategory={onSelectCategory}
              />
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
