import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { EMAIL_ADDRESS } from "@/components/data/site-data";

export function AboutOverview() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex justify-center">
          {/* Main Editorial Content Column */}
          <article className="prose prose-neutral max-w-4xl text-center">
            <div className="flex justify-center">
              <Eyebrow>COMPANY OVERVIEW</Eyebrow>
            </div>
            <h2 className="mx-auto mt-3 max-w-3xl text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[36px]">
              Connecting global markets with consistency, precision, and reliable supply lines.
            </h2>

            <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-[16px] leading-[1.8] text-[#3f3f3f]">
              <p>
                <strong>Layrock Global Trading LTD</strong> is an international trading and procurement firm based in Keynsham, Bristol, United Kingdom. We specialize in facilitating seamless commerce across diverse industrial sectors, connecting global manufacturers and suppliers with commercial enterprises worldwide.
              </p>
              <p>
                From raw polymers and structural metals to premium agricultural spices and modern autoclaved aerated concrete (AAC) building materials, our trading portfolio covers core commodities essential to contemporary industrial operations and infrastructure development.
              </p>
              <p>
                Our trade philosophy is rooted in direct, transparent communication, meticulous quality control, and rigorous follow-through at every juncture of the trade cycle — from supplier audit, specification matching, and incoterm negotiation to customs clearance and ocean logistics.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
