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
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f6f6f6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover"
          priority
        />
      </div>

      {/* Product Meta */}
      <div className="p-6">
        <Eyebrow>{product.category}</Eyebrow>

        <h2 className="mt-2 text-[22px] font-bold leading-tight tracking-tight text-[#171717]">
          {product.name}
        </h2>

        <p className="mt-2 text-[12.5px] leading-relaxed text-[#555]">
          {product.description}
        </p>

        {/* Micro Specs */}
        <div className="mt-6 space-y-3.5 border-t border-black/[0.08] pt-5 text-[12px]">
          <div className="flex items-start gap-2.5">
            <FileText size={15} className="mt-0.5 shrink-0 text-[#ff0000]" />
            <div>
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[10.5px]">
                Specification
              </span>
              <p className="font-medium text-[#171717]">{specs.spec}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="mt-0.5 shrink-0 text-[#ff0000]" />
            <div>
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[10.5px]">
                Origin
              </span>
              <p className="font-medium text-[#171717]">{specs.origin}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Package size={15} className="mt-0.5 shrink-0 text-[#ff0000]" />
            <div>
              <span className="block font-bold uppercase tracking-wider text-[#737373] text-[10.5px]">
                Packing
              </span>
              <p className="font-medium text-[#171717]">{specs.packing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

