"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProductFloatingCtaProps {
  name: string;
  category: string;
  image: string;
  enquiryHref: string;
}

export function ProductFloatingCta({
  name,
  category,
  image,
  enquiryHref,
}: ProductFloatingCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      aria-label="Floating product enquiry bar"
      className={`fixed bottom-5 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[620px] -translate-x-1/2 transition-all duration-300 ease-out sm:bottom-6 ${isVisible
        ? "pointer-events-auto translate-y-0 opacity-100"
        : "pointer-events-none translate-y-8 opacity-0"
        }`}
    >
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/95 p-2.5 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-3 sm:gap-4">
        {/* Product Image & Title */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-black/5 bg-[#f6f6f6] sm:size-14">
            <Image
              src={image}
              alt={name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <span className="block truncate text-sm font-medium text-[#171717]/80">
              {category}
            </span>
            <h3 className="truncate text-[13.5px] font-bold text-[#171717] sm:text-[15px]">
              {name}
            </h3>
          </div>
        </div>

        {/* CTA Enquire Now Button */}
        <div className="shrink-0">
          <Button
            as="a"
            href={enquiryHref}
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight size={15} />}
            className="rounded-xl px-4 py-2.5 text-[12.5px] font-bold uppercase tracking-wider shadow-sm sm:px-5 sm:text-[13px]"
          >
            <span className="hidden xs:inline">Enquire Now</span>
            <span className="xs:hidden">Enquire</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}

