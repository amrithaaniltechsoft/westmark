"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import type { Category, Product } from "@/components/data/site-data";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
        <div className="flex flex-col gap-3 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal variant="fade-up">
            <h2 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[26px] md:text-[32px]">
              Featured Products & Services
            </h2>
          </ScrollReveal>
          <div className="flex items-center">
            <label className="inline-flex h-9 w-auto items-center gap-2 rounded-lg border border-black/15 bg-[#faf9f7] px-3 shadow-xs">
              <SlidersHorizontal size={14} className="shrink-0 text-[#404040]" />
              <select
                value={activeCategory}
                onChange={(event) => onSelectCategory(event.target.value)}
                aria-label="Filter products by category"
                className="bg-transparent text-[12.5px] font-medium text-[#171717] outline-none cursor-pointer sm:text-[13px]"
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
                href="#products"
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

        {/* ── Inspection Certificate CTA Card (Placed as full-width banner) ── */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-gradient-to-br from-[#faf9f7] via-[#f5f4f0] to-[#eae8e3] p-5 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Left Content */}
              <div className="max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff0000]">
                  Trade Assurance
                </span>
                <h3 className="mt-1 text-[20px] font-bold leading-tight tracking-tight text-[#171717] sm:text-[24px]">
                  Third-Party Certified Shipments
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555] sm:text-[14px]">
                  All consignments can be inspected by globally recognized bodies including SGS, Bureau Veritas, or Intertek with formal certificates of analysis before port departure.
                </p>
              </div>

              {/* Right CTA Button & Visual Icon */}
              <div className="flex items-center gap-4">
                <div className="relative hidden size-16 shrink-0 sm:block">
                  <Image
                    src="/product-cta/3D Clipboard Inspection Icon.png"
                    alt="Inspection Certificate"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight size={15} />}
                  className="rounded-xl shadow-xs"
                >
                  Request Inspection Specs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
