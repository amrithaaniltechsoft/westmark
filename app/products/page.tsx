import { Suspense } from "react";
import { CATEGORIES, PRODUCTS } from "@/components/data/site-data";
import { ProductsCatalogContainer } from "@/components/products/listing/products-catalog-container";

export const metadata = {
  title: "All Products & Catalog | Layrock Global Trading LTD",
  description:
    "Explore our complete product catalog across aluminium extrusions, structural metals, polymers, Indian spices, and AAC building blocks.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialCategory = resolvedParams?.category;

  // Filter out any virtual "All products" item to show only true categories
  const mainCategories = CATEGORIES.filter((c) => c.name !== "All products");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f5f7] text-[#171717]">
      <Suspense fallback={<div className="min-h-screen bg-[#f4f5f7]" />}>
        <ProductsCatalogContainer
          categories={mainCategories}
          products={PRODUCTS}
          initialCategory={initialCategory}
        />
      </Suspense>
    </main>
  );
}
