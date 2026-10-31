import Link from "next/link";
import type { Product } from "@/components/data/site-data";

export interface ProductBreadcrumbProps {
  product: Product;
}

export function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  return (
    <div className="border-b border-black/[0.06] bg-white px-4 py-3.5 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center gap-2 text-[8px] font-medium text-[#737373] sm:text-[12.5px]">
        <Link href="/" className="transition hover:text-[#ff0000]">
          Home
        </Link>
        <span className="text-[#a3a3a3]">/</span>
        <Link href="/products" className="transition hover:text-[#ff0000]">
          Products
        </Link>
        <span className="text-[#a3a3a3]">/</span>
        <Link href="/products" className="transition hover:text-[#ff0000]">
          {product.category}
        </Link>
        <span className="text-[#a3a3a3]">/</span>
        <span className="truncate text-[#171717]">{product.name}</span>
      </div>
    </div>
  );
}

