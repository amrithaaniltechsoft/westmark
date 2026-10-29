import { ArrowUpRight, Globe2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-36 bg-[#f4f5f7] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm md:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-16">
          <p className="section-eyebrow font-semibold">ABOUT OUR COMPANY</p>
          <h2 className="mt-4 text-[34px] font-bold leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[46px]">
            Building connections.
            <br />
            Moving trade forward.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#3f3f3f]">
            We work to connect product requirements with sourcing and export
            opportunities across industrial materials, polymers, spices and
            construction products. Our approach is built around clear
            communication, practical coordination and long-term business relationships.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#3f3f3f]">
            From initial enquiries to order coordination, we aim to make
            international trade easier to navigate for our business partners.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg border border-black/15 bg-white px-5 py-3.5 text-[14px] font-semibold text-[#171717] transition hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white"
          >
            Learn more about us <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="relative min-h-[300px] overflow-hidden md:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1300&q=85"
            alt="International freight and shipping operations"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-9 sm:left-9 sm:right-9">
            <div>
              <p className="text-[12px] tracking-[0.16em] text-white/90">
                OUR APPROACH
              </p>
              <p className="mt-2 text-[21px] font-bold tracking-[-0.02em] sm:text-[27px]">
                Trade with clarity.
              </p>
            </div>
            <Globe2 size={35} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

