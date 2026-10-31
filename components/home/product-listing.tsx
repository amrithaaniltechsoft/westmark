"use client";

import Image from "next/image";

import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Category, Product } from "@/components/data/site-data";

export interface ProductListingProps {
  categories: Category[];
  activeCategory: string;
  filteredProducts: Product[];
  onSelectCategory: (category: string) => void;
  onClearFilters: () => void;
}

export function ProductListing({
  categories,
  activeCategory,
  filteredProducts,
  onSelectCategory,
  onClearFilters,
}: ProductListingProps) {
  // Always limit to 3 rows (3 rows x 5 columns on desktop = 15 items)
  const INITIAL_LIMIT = 15;
  const displayedProducts = filteredProducts.slice(0, INITIAL_LIMIT);

  return (
    <section id="products" className="scroll-mt-36 bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal variant="fade-up">
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[32px]">
              Featured Products & Services
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex h-9 w-auto items-center gap-1.5 rounded-lg border border-black/15 bg-[#faf9f7] px-2.5">
              <SlidersHorizontal size={14} className="shrink-0 text-[#404040]" />
              <select
                value={activeCategory}
                onChange={(event) => onSelectCategory(event.target.value)}
                aria-label="Filter products by category"
                className="bg-transparent text-[13px] font-medium text-[#171717] outline-none"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name === "All products"
                      ? "All categories"
                      : category.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {displayedProducts.map((product, index) => (
                <ScrollReveal key={product.id} variant="fade-up" delayMs={(index % 5) * 50}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <Link
                href="/products"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-black/15 bg-white px-7 py-3 text-[14px] font-semibold text-[#171717] shadow-xs transition hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
              >
                <span>View all products</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-10 rounded-2xl border border-black/10 bg-[#f8f9fa] px-6 py-14 text-center">
            <Search className="mx-auto text-[#666666]" size={28} />
            <h3 className="mt-4 text-[18px] font-bold text-[#171717]">No matching products found</h3>
            <p className="mt-2 text-[14px] text-[#4a4a4a]">
              Try another keyword or select a different category.
            </p>
            <Button
              variant="secondary"
              size="md"
              onClick={onClearFilters}
              className="mt-5"
            >
              Clear filters
            </Button>
          </div>
        )}

        <ScrollReveal variant="fade-up" delayMs={100} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl bg-[#f4f5f7] sm:flex-row sm:items-center pr-6 sm:pr-8">
          <div className="flex h-full items-center gap-5">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden sm:h-32 sm:w-32">
              <Image
                src="/product-cta/3D Clipboard Inspection Icon.png"
                alt="Product enquiry"
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover"
              />
            </div>
            <div className="py-4">
              <h3 className="text-xl font-bold text-[#171717]">Looking for something specific?</h3>
              <p className="mt-1 text-[14px] leading-6 text-[#3f3f3f]">
                Share your requirements, quantity and destination with our team.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="my-4 ml-6 inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg bg-[#333333] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#ff0000] sm:my-0 sm:ml-0"
          >
            Submit your requirements <ArrowRight size={16} />
          </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
