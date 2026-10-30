import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "@/components/data/site-data";
import { EMAIL_ADDRESS } from "@/components/data/site-data";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const mailtoDetails = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `Product details: ${product.name}`
  )}`;
  const mailtoEnquiry = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `Product enquiry: ${product.name}`
  )}`;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-black/[0.08] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] ${className}`}
    >
      <a
        href={mailtoDetails}
        aria-label={`Request details for ${product.name}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#f3f1ee]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1 text-[12px] font-medium text-[#2d2d2d] shadow-xs">
          {product.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <h3 className="mt-1 text-[15px] font-bold leading-snug tracking-[-0.02em] text-[#171717] line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-5 text-[#3f3f3f] line-clamp-3">
          {product.description}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-1.5">
          <a
            href={mailtoDetails}
            className="inline-flex min-h-9 items-center justify-center gap-1 rounded-lg border border-black/15 px-2 text-[12px] font-medium text-[#171717] transition hover:border-[#171717] hover:bg-[#171717] hover:text-white"
          >
            View details <ArrowUpRight size={13} />
          </a>
          <a
            href={mailtoEnquiry}
            className="inline-flex min-h-9 items-center justify-center gap-1 rounded-lg bg-[#ff0000] px-2 text-[12px] font-medium text-white transition hover:bg-[#d90000]"
          >
            Enquire <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

