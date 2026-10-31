import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-36 px-3.5 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1440px]">
        {/*
          Mobile (< sm):
            Card with image stacked above at its natural aspect ratio (1916/821)
            and white card text content placed below it.
          Desktop (sm & lg):
            Full width boxed banner with background image and floating white card.
        */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#171717] sm:relative sm:min-h-[380px] sm:p-6 lg:min-h-[430px] lg:p-8 sm:flex sm:items-center">
          {/* Top image on mobile, full background image on desktop */}
          <div className="relative aspect-[1916/821] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
            <Image
              src="/banner/b4.png"
              alt="International freight and global trade logistics"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 1440px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Left side card: placed below image on mobile, floating on desktop */}
          <ScrollReveal variant="fade-right" delayMs={100} className="relative z-10 w-full max-w-lg p-3 sm:p-0">
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-7 lg:p-8 shadow-xl backdrop-blur-sm">
              <Eyebrow textClassName="text-[10.5px] sm:text-xs">ABOUT OUR COMPANY</Eyebrow>

              <h2 className="mt-2 text-[20px] font-bold leading-[1.18] tracking-[-0.035em] text-[#171717] sm:text-[28px] lg:text-[34px]">
                Building connections.
                <br />
                Moving trade forward.
              </h2>

              <p className="mt-2 text-[12.5px] leading-relaxed text-[#3f3f3f] sm:mt-3 sm:text-[14px]">
                We work to connect product requirements with sourcing and export
                opportunities across industrial materials, polymers, spices and
                construction products. Our approach is built around clear
                communication and long-term business relationships.
              </p>

              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#ff0000] px-3.5 sm:px-4 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#d60000]"
                >
                  <span>Learn more about us</span>
                  <ArrowUpRight size={14} />
                </Link>

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold text-[#171717] shadow-xs transition hover:bg-[#f4f5f7]"
                >
                  Explore catalog
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
