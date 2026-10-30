import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-36 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Full width boxed container with background image and reduced height */}
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#171717] p-4 sm:p-6 lg:min-h-[430px] lg:p-8 flex items-center">
          {/* Background image */}
          <img
            src="/banner/b4.png"
            alt="International freight and global trade logistics"
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Left side white card containing about text with compact padding */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white/98 p-5 shadow-xl backdrop-blur-sm sm:p-7 lg:p-8">
            <Eyebrow>ABOUT OUR COMPANY</Eyebrow>

            <h2 className="mt-2 text-[24px] font-bold leading-[1.15] tracking-[-0.035em] text-[#171717] sm:text-[30px] lg:text-[34px]">
              Building connections.
              <br />
              Moving trade forward.
            </h2>

            <p className="mt-3 text-[13px] leading-relaxed text-[#3f3f3f] sm:text-[14px]">
              We work to connect product requirements with sourcing and export
              opportunities across industrial materials, polymers, spices and
              construction products. Our approach is built around clear
              communication and long-term business relationships.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff0000] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#d60000]"
              >
                Learn more about us
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#171717] shadow-xs transition hover:bg-[#f4f5f7]"
              >
                Explore catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
