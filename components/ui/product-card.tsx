import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "@/components/data/site-data";
import { slugify } from "@/lib/slugify";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const productSlug = slugify(product.name);
  const productHref = "#";
  const enquiryHref = "#contact";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-black/[0.08] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Image container with locked aspect ratio */}
      <Link
        href={productHref}
        aria-label={`View full specifications for ${product.name}`}
        className="relative block aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#f3f1ee]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-2.5 top-2.5 sm:left-3 sm:top-3 rounded-md bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-[12px] font-medium text-[#2d2d2d] shadow-xs max-w-[calc(100%-20px)] truncate">
          {product.category}
        </span>
      </Link>

      {/* Content body */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <Link href={productHref} className="block">
          <h3 className="text-[13.5px] sm:text-[15px] font-bold leading-snug tracking-[-0.02em] text-[#171717] line-clamp-2 transition hover:text-[#ff0000]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 flex-1 text-[12px] sm:text-[13px] leading-relaxed sm:leading-5 text-[#4a4a4a] line-clamp-2 sm:line-clamp-3">
          {product.description}
        </p>

        {/* Action buttons */}
        <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 pt-1">
          <Link
            href={productHref}
            className="inline-flex h-8 sm:h-9 items-center justify-center gap-1 rounded-lg border border-black/15 px-1.5 sm:px-2 text-[11px] sm:text-[12px] font-medium text-[#171717] transition hover:border-[#171717] hover:bg-[#171717] hover:text-white whitespace-nowrap"
          >
            <span>Details</span>
            <ArrowUpRight size={12} className="shrink-0 sm:size-[13px]" />
          </Link>
          <Link
            href={enquiryHref}
            className="inline-flex h-8 sm:h-9 items-center justify-center gap-1 rounded-lg bg-[#ff0000] px-1.5 sm:px-2 text-[11px] sm:text-[12px] font-medium text-white transition hover:bg-[#d90000] whitespace-nowrap"
          >
            <span>Enquire</span>
            <ArrowRight size={12} className="shrink-0 sm:size-[13px]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
