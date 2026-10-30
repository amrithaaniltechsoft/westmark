"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/components/data/site-data";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "All products" ||
        product.category === activeCategory;

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      <Header
        categories={CATEGORIES}
        activeCategory={activeCategory}
        query={query}
        mobileMenuOpen={mobileMenuOpen}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearch}
        onSelectCategory={setActiveCategory}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumb / Back Link */}
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#737373] transition hover:text-[#ff0000]"
            >
              <ArrowLeft size={15} />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Heading and Category Filter */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-[32px] font-bold tracking-[-0.04em] sm:text-[42px]">
                All Products & Catalog
              </h1>
              <p className="mt-1 text-[14px] text-[#555555]">
                Browse our complete collection of international trade and supply commodities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="flex h-9 w-auto items-center gap-1.5 rounded-lg border border-black/15 bg-[#faf9f7] px-2.5">
                <SlidersHorizontal size={14} className="shrink-0 text-[#404040]" />
                <select
                  value={activeCategory}
                  onChange={(event) => setActiveCategory(event.target.value)}
                  aria-label="Filter products by category"
                  className="bg-transparent text-[13px] font-medium text-[#171717] outline-none"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name === "All products"
                        ? "All categories"
                        : category.name}
                    </option>
                  ))}
                </select>
              </label>
              <span className="text-[13px] font-medium text-[#404040]">
                {filteredProducts.length} items
              </span>
            </div>
          </div>

          {/* Full Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-black/10 bg-[#f8f9fa] px-6 py-14 text-center">
              <Search className="mx-auto text-[#666666]" size={28} />
              <h3 className="mt-4 text-[18px] font-bold text-[#171717]">
                No matching products found
              </h3>
              <p className="mt-2 text-[14px] text-[#4a4a4a]">
                Try another keyword or select a different category.
              </p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All products");
                }}
                className="mt-5"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer
        categories={CATEGORIES}
        onSelectCategory={setActiveCategory}
      />
    </main>
  );
}
