import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/components/data/site-data";
import { ProductCard } from "@/components/ui/product-card";

export interface RelatedProductsSectionProps {
  category: string;
  relatedProducts: Product[];
}

export function RelatedProductsSection({
  category,
  relatedProducts,
}: RelatedProductsSectionProps) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="bg-[#f4f5f7] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mt-1 text-[24px] font-bold tracking-tight text-[#171717] sm:text-[30px]">
              More from {category}
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#ff0000] hover:underline"
          >
            <span>View all products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {relatedProducts.map((relProduct) => (
            <ProductCard key={relProduct.id} product={relProduct} />
          ))}
        </div>
      </div>
    </section>
  );
}

