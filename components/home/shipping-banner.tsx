import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ShippingBanner() {
  return (
    <section className="px-3.5 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1440px]">
        {/*
          Mobile (< sm):
            Two-part card with image stacked above at its natural aspect ratio (2048/768 ≈ 8/3)
            and text content placed below it in dark background.
          Desktop (sm & lg):
            Single overlaid widescreen banner identical to desktop view.
        */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#171717] text-white sm:relative sm:min-h-[360px] sm:px-10 sm:py-12 lg:min-h-[420px] lg:px-16 lg:py-16 sm:flex sm:flex-col sm:justify-center">
          {/* Top image container on mobile, absolute full background on desktop */}
          <div className="relative aspect-[2048/768] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
            <Image
              src="/banner/b6.png"
              alt="Global shipping vessel carrying container freight across international waters"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 1440px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark gradient overlay on desktop, subtle fade on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/60 sm:via-black/35 sm:to-transparent" />
          </div>

          {/* Content: placed below image on mobile, floating on desktop */}
          <ScrollReveal variant="fade-up" className="relative z-10 max-w-2xl px-5 pb-6 pt-4 sm:px-0 sm:pb-0 sm:pt-0">
            <Eyebrow
              textClassName="text-white/90 text-[10.5px] sm:text-xs"
              slashClassName="text-[#ff0000]"
            >
              GLOBAL FREIGHT & LOGISTICS
            </Eyebrow>

            <h2 className="mt-2 text-[22px] font-bold leading-[1.18] tracking-[-0.04em] text-white sm:mt-3 sm:text-[34px] md:text-[38px] lg:text-[44px]">
              Direct international shipments.
              <br />
              Delivered to your port.
            </h2>

            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={15} />}
                className="text-[13px] sm:text-[14px] px-4 py-2 sm:px-5 sm:py-2.5"
              >
                Request a quote
              </Button>

              <Button
                as="a"
                href="#"
                variant="tertiary"
                size="md"
                className="text-[13px] sm:text-[14px] px-4 py-2 sm:px-5 sm:py-2.5"
              >
                About Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
