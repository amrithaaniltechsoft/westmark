import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ShippingBanner() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1440px]">
        {/* Full-width boxed banner with container cargo ship background */}
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#171717] px-6 py-12 text-white sm:px-10 sm:py-14 lg:min-h-[420px] lg:px-16 lg:py-16 flex flex-col justify-between">
          {/* Background image: container cargo vessel & oceanic freight */}
          <Image
            src="/banner/b6.png"
            alt="Global shipping vessel carrying container freight across international waters"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Dark gradient overlay matching site design */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

          {/* Content */}
          <ScrollReveal variant="fade-up" className="relative z-10 max-w-2xl">
            <Eyebrow
              textClassName="text-white/90"
              slashClassName="text-[#ff0000]"
            >
              GLOBAL FREIGHT & LOGISTICS
            </Eyebrow>

            <h2 className="mt-3 text-[28px] font-bold leading-[1.14] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[44px]">
              Direct international shipments.
              <br />
              Delivered to your port.
            </h2>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
              >
                Request shipping quote
              </Button>

              <Button
                as="a"
                href="#products"
                variant="tertiary"
                size="md"
              >
                View shippable products
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
