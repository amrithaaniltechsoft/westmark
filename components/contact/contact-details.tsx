import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ContactDetails() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Right Column: Aligned Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/contact-page/Golden-Hour Container Port Panorama.png"
                alt="Layrock Global Trading Office & Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
          {/* Left Column: Contact info */}
          <div className="lg:col-span-7">
            <Eyebrow>OUR TRADE DESK</Eyebrow>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.035em] text-[#171717] sm:text-[38px] lg:text-[42px]">
              Direct communication, transparent trade terms.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#4a4a4a] sm:text-[16px]">
              Whether you need bulk plastic resins, extruded aluminium sections, steel structural members, or container loads of Indian spices, our team will provide prompt FOB/CIF quotations and logistics schedules.
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#ff0000]" />
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-[#737373]">
                    Head Office
                  </p>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-[#262626]">
                    79 Hurn Lane Keynsham, Bristol BS31 1QY, United Kingdom
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=79+Hurn+Lane+Keynsham+Bristol+BS31+1QY"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[13px] text-[#ff0000] hover:underline"
                  >
                    View on Google Maps <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <Mail size={19} className="mt-0.5 shrink-0 text-[#ff0000]" />
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-[#737373]">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="mt-0.5 block text-[15px] text-[#262626] transition hover:text-[#ff0000]"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <p className="mt-0.5 text-[13px] text-[#737373]">
                    We respond to trade enquiries within 24 hours.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <Phone size={19} className="mt-0.5 shrink-0 text-[#ff0000]" />
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-[#737373]">
                    Phone Line
                  </p>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    className="mt-0.5 block text-[15px] text-[#262626] transition hover:text-[#ff0000]"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <p className="mt-0.5 text-[13px] text-[#737373]">
                    Monday to Friday, 9:00 AM – 6:00 PM GMT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

