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
    <section id="products" className="scroll-mt-36 bg-white px-3.5 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal variant="fade-up">
            <h2 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[26px] md:text-[32px]">
              Featured Products & Services
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex h-9 w-full sm:w-auto items-center justify-between gap-1.5 rounded-lg border border-black/15 bg-[#faf9f7] px-2.5">
              <div className="flex items-center gap-1.5">
                <SlidersHorizontal size={14} className="shrink-0 text-[#404040]" />
                <span className="text-[12px] text-[#737373] sm:hidden">Filter:</span>
              </div>
              <select
                value={activeCategory}
                onChange={(event) => onSelectCategory(event.target.value)}
                aria-label="Filter products by category"
                className="bg-transparent text-[12.5px] sm:text-[13px] font-medium text-[#171717] outline-none cursor-pointer"
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
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
              {displayedProducts.map((product, index) => (
                <ScrollReveal key={product.id} variant="fade-up" delayMs={(index % 5) * 50}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-7 flex justify-center sm:mt-9">
              <Link
                href="/products"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-black/15 bg-white px-5 py-2.5 text-[13px] sm:px-7 sm:py-3 sm:text-[14px] font-semibold text-[#171717] shadow-xs transition hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
              >
                <span>View all products</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-8 rounded-2xl border border-black/10 bg-[#f8f9fa] px-4 py-10 sm:px-6 sm:py-14 text-center">
            <Search className="mx-auto text-[#666666]" size={26} />
            <h3 className="mt-3 text-[16px] sm:text-[18px] font-bold text-[#171717]">No matching products found</h3>
            <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#4a4a4a]">
              Try another keyword or select a different category.
            </p>
            <Button
              variant="secondary"
              size="md"
              onClick={onClearFilters}
              className="mt-4 sm:mt-5"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* CTA Card */}
        <ScrollReveal variant="fade-up" delayMs={100} className="mt-8 sm:mt-10">
          <div className="flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl bg-[#f4f5f7] p-4 sm:flex-row sm:items-center sm:p-0 sm:pr-8">
            <div className="flex items-center gap-3.5 sm:gap-5">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32 sm:rounded-none">
                <Image
                  src="/product-cta/3D Clipboard Inspection Icon.png"
                  alt="Product enquiry"
                  fill
                  sizes="(max-width: 640px) 64px, 128px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[15px] sm:text-xl font-bold text-[#171717]">Looking for something specific?</h3>
                <p className="mt-0.5 text-[12.5px] sm:text-[14px] leading-relaxed text-[#3f3f3f]">
                  Share your requirements, quantity and destination with our team.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex h-10 sm:min-h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-[#333333] px-4 sm:px-6 text-[13px] sm:text-[14px] font-medium text-white transition hover:bg-[#ff0000]"
            >
              <span>Submit your requirements</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
