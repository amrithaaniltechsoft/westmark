"use client";

import { useMemo, useState } from "react";
import {
  CATEGORIES,
  HERO_SLIDES,
  PRODUCTS,
  SERVICES,
  TESTIMONIALS,
} from "@/components/data/site-data";
import { AboutSection } from "@/components/home/about-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { ShippingBanner } from "@/components/home/shipping-banner";
import { ContactSection } from "@/components/home/contact-section";
import { Hero } from "@/components/home/hero";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { ProductListing } from "@/components/home/product-listing";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustIndicators } from "@/components/home/trust-indicators";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");

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

  function selectCategory(category: string) {
    setActiveCategory(category);
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      <Hero slides={HERO_SLIDES} />

      <TrustIndicators />

      <CategoriesSection
        categories={CATEGORIES}
        onSelectCategory={selectCategory}
      />

      <ShippingBanner />

      <CategoryShowcase
        categories={CATEGORIES}
        products={PRODUCTS}
        onSelectCategory={selectCategory}
      />

      <ProductListing
        categories={CATEGORIES}
        activeCategory={activeCategory}
        filteredProducts={filteredProducts}
        onSelectCategory={selectCategory}
        onClearFilters={() => {
          setQuery("");
          setActiveCategory("All products");
        }}
      />

      <AboutSection />

      <TestimonialsSection testimonials={TESTIMONIALS} />

      <ContactSection categories={CATEGORIES} />
    </main>
  );
}
