import { CATEGORIES, PRODUCTS } from "@/components/data/site-data";
import { ProductsCategoryNav } from "@/components/products/listing/products-category-nav";
import { CategoryProductGroup } from "@/components/products/listing/category-product-group";

export const metadata = {
  title: "All Products & Catalog | Layrock Global Trading LTD",
  description:
    "Explore our complete product catalog across aluminium extrusions, structural metals, polymers, Indian spices, and AAC building blocks.",
};

export default function ProductsPage() {
  // Only real categories (excluding "All products")
  const mainCategories = CATEGORIES.filter((c) => c.name !== "All products");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f5f7] text-[#171717]">
      {/* Category Circle Cards Grid at the Top */}
      <ProductsCategoryNav categories={mainCategories} />

      {/* Categorized Products List - Full-width banners, no outer container padding */}
      <div className="space-y-0">
        {mainCategories.map((category) => {
          const categoryProducts = PRODUCTS.filter(
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
    </main>
  );
}
