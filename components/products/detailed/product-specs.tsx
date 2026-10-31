import { FileText, MapPin, Package } from "lucide-react";

export interface ProductSpecsProps {
  spec: string;
  origin: string;
  packing: string;
}

export function ProductSpecs({ spec, origin, packing }: ProductSpecsProps) {
  return (
    <div className="mt-7 border-t border-black/[0.08] pt-6">
      <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#171717]">
        Technical Specifications
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-5 border-b border-black/[0.08] pb-6 sm:grid-cols-3 sm:gap-4">
        {/* SPEC */}
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#171717]/70">
            <FileText size={14} />
            <span>Spec</span>
          </div>
          <p className="mt-1 text-[13px] font-medium leading-snug text-[#171717]">
            {spec}
          </p>
        </div>

        {/* ORIGIN */}
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#171717]/70">
            <MapPin size={14} />
            <span>Origin</span>
          </div>
          <p className="mt-1 text-[13px] font-medium leading-snug text-[#171717]">
            {origin}
          </p>
        </div>

        {/* PACKING */}
        <div>
          <div className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#171717]/70">
            <Package size={14} />
            <span>Packing</span>
          </div>
          <p className="mt-1 text-[13px] font-medium leading-snug text-[#171717]">
            {packing}
          </p>
        </div>
      </div>
    </div>
  );
}

