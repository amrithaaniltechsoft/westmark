"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, Product } from "@/components/data/site-data";
import { ProductsCategoryNav } from "@/components/products/listing/products-category-nav";
import { CategoryProductGroup } from "@/components/products/listing/category-product-group";

export interface ProductsCatalogContainerProps {
  categories: Category[];
  products: Product[];
  initialCategory?: string;
}

export function ProductsCatalogContainer({
  categories,
  products,
  initialCategory,
}: ProductsCatalogContainerProps) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    urlCategory || initialCategory || null
  );

  // Synchronize state whenever URL search params change (e.g., clicking Header category link)
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    } else if (!urlCategory && !initialCategory) {
      setSelectedCategory(null);
    }
  }, [urlCategory, initialCategory]);

  const filteredCategories = useMemo(() => {
    if (!selectedCategory || selectedCategory === "all") {
      return categories;
    }
    return categories.filter((c) => c.name === selectedCategory);
  }, [selectedCategory, categories]);

  const handleSelectCategory = (categoryName: string) => {
    if (categoryName === "all") {
      setSelectedCategory(null);
      // Clean up URL parameter cleanly without full reload
      window.history.pushState(null, "", "/products");
      return;
    }
    const nextCategory = selectedCategory === categoryName ? null : categoryName;
    setSelectedCategory(nextCategory);

    if (nextCategory) {
      window.history.pushState(null, "", `/products?category=${encodeURIComponent(nextCategory)}`);
    } else {
      window.history.pushState(null, "", "/products");
    }
  };

  return (
    <>
      {/* 1. Category Circle Cards Grid at the Top */}
      <ProductsCategoryNav
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Filtered Categorized Products List */}
      <div className="space-y-0">
        {filteredCategories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.name
          );

          return (
            <CategoryProductGroup
              key={category.name}
              category={category}
              products={categoryProducts}
            />
          );
        })}
      </div>
    </>
  );
}
