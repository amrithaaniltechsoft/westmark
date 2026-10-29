"use client";

import { ArrowRight, ChevronDown, Headphones, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
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
  return (
    <section id="products" className="scroll-mt-36 bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">PRODUCT DIRECTORY</p>
            <h2 className="mt-3 text-[32px] tracking-[-0.04em] sm:text-[42px]">
              Products for your business
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#3f3f3f]">
              Browse selected products and send an enquiry for your specifications and quantities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex h-11 min-w-0 items-center gap-2 rounded-lg border border-black/15 bg-[#faf9f7] px-3 sm:min-w-[210px]">
              <SlidersHorizontal size={16} className="shrink-0 text-[#404040]" />
              <select
                value={activeCategory}
                onChange={(event) => onSelectCategory(event.target.value)}
                aria-label="Filter products by category"
                className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-[#171717] outline-none"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name === "All products"
                      ? "All categories"
                      : category.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="text-[#404040]" />
            </label>
            <span className="text-[13px] font-medium text-[#404040]">
              {filteredProducts.length} products
            </span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#f4f5f7] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#ff0000] shadow-xs">
              <Headphones size={23} />
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-[#171717]">Looking for something specific?</h3>
              <p className="mt-1 text-[14px] leading-6 text-[#3f3f3f]">
                Share your requirements, quantity and destination with our team.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg bg-[#333333] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#ff0000]"
          >
            Submit your requirements <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
