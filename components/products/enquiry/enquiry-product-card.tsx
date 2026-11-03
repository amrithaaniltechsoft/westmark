import Image from "next/image";
import { FileText, MapPin, Package } from "lucide-react";
import type { Product } from "@/components/data/site-data";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { CategorySpecs } from "@/lib/product-specs-data";

export interface EnquiryProductCardProps {
  product: Product;
  specs: CategorySpecs;
}

export function EnquiryProductCard({ product, specs }: EnquiryProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition">
      {/* ── Mobile View: Small square image to the left of Category & Product Name ── */}
      <div className="flex items-center gap-3 p-3.5 sm:hidden sm:gap-3.5 sm:p-4">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-[#f6f6f6] border border-black/5 min-[380px]:size-16">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0 flex-1">
          <Eyebrow textClassName="text-[10px] min-[380px]:text-[11px] font-semibold">{product.category}</Eyebrow>
          <h2 className="mt-0.5 text-[15px] font-bold leading-snug tracking-tight text-[#171717] min-[380px]:text-[16px] sm:text-[17px] line-clamp-2">
            {product.name}
          </h2>
        </div>
      </div>

      {/* ── Desktop & Tablet View: Aspect [4/3] Large Hero Image above ── */}
      <div className="relative hidden aspect-[4/3] w-full overflow-hidden bg-[#f6f6f6] sm:block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover"
          priority
        />
      </div>

      {/* Product Meta & Details */}
      <div className="px-3.5 pb-4 pt-1 sm:p-6">
        {/* Title & Category on desktop only (since mobile renders them beside the square image) */}
        <div className="hidden sm:block">
          <Eyebrow textClassName="text-[11px] lg:text-[12px] font-semibold">{product.category}</Eyebrow>

          <h2 className="mt-2 text-[20px] font-bold leading-tight tracking-tight text-[#171717] lg:text-[22px]">
            {product.name}
          </h2>
        </div>

        <p className="mt-1 text-[11.5px] leading-relaxed text-[#555] sm:mt-2 sm:text-[12.5px] lg:text-[13px]">
          {product.description}
        </p>

        {/* Micro Specs: In mobile view, align in a 3-column row; in desktop/sidebar view, stack in a column */}
        <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-black/[0.08] pt-3 text-[11px] sm:mt-6 sm:flex sm:flex-col sm:space-y-3.5 sm:gap-0 sm:pt-5 sm:text-[12px] lg:text-[12.5px]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2.5">
            <div className="flex items-center gap-1.5 sm:mt-0.5 sm:shrink-0 text-[#ff0000]">
              <FileText size={14} className="sm:size-[15px]" />
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[9.5px] min-[380px]:text-[10px] sm:hidden">
                Spec
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="hidden font-bold uppercase tracking-wider text-[#737373] text-[10.5px] sm:block">
                Specification
              </span>
              <p className="mt-0.5 font-medium text-[#171717] break-words sm:mt-0">{specs.spec}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2.5">
            <div className="flex items-center gap-1.5 sm:mt-0.5 sm:shrink-0 text-[#ff0000]">
              <MapPin size={14} className="sm:size-[15px]" />
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[9.5px] min-[380px]:text-[10px] sm:hidden">
                Origin
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="hidden font-bold uppercase tracking-wider text-[#737373] text-[10.5px] sm:block">
                Origin
              </span>
              <p className="mt-0.5 font-medium text-[#171717] break-words sm:mt-0">{specs.origin}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2.5">
            <div className="flex items-center gap-1.5 sm:mt-0.5 sm:shrink-0 text-[#ff0000]">
              <Package size={14} className="sm:size-[15px]" />
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[9.5px] min-[380px]:text-[10px] sm:hidden">
                Packing
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <span className="hidden font-bold uppercase tracking-wider text-[#737373] text-[10.5px] sm:block">
                Packing
              </span>
              <p className="mt-0.5 font-medium text-[#171717] break-words sm:mt-0">{specs.packing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
