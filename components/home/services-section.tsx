import { ArrowRight } from "lucide-react";
import type { Service } from "@/components/data/site-data";

export interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="scroll-mt-36 bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">HOW WE HELP</p>
            <h2 className="mt-3 max-w-lg text-[34px] font-bold leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[44px]">
              Practical support for every stage of trade.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#3f3f3f]">
              A considered approach to sourcing, product coordination and
              communication, tailored to your business needs.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-black/[0.04] px-4 py-2 text-[14px] font-semibold text-[#171717] transition hover:bg-[#ff0000] hover:text-white"
            >
              Discuss your requirements <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/[0.08] shadow-xs sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="border-b border-r border-black/[0.08] p-6 transition hover:bg-[#faf9f7] sm:p-7 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#ff0000]">
                    {service.number}
                  </span>
                  <service.icon size={23} strokeWidth={1.5} className="text-[#171717]" />
                </div>
                <h3 className="mt-7 text-[19px] font-bold tracking-[-0.02em] text-[#171717]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-[#404040]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

