import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";
import type { Category } from "@/components/data/site-data";

export interface ContactSectionProps {
  categories?: Category[];
}

export function ContactSection({ categories }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-36 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Full-width boxed banner with image & dark overlay */}
        <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#171717] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-20 lg:py-20 flex flex-col justify-between">
          {/* Background image */}
          <Image
            src="/banner/b2.png"
            alt="International shipping, ports and global logistics"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

          {/* Content */}
          <ScrollReveal variant="fade-up" className="relative z-10 max-w-2xl">
            <Eyebrow
              textClassName="text-white/90"
              slashClassName="text-[#ff0000]"
            >
              LET&apos;S TALK BUSINESS
            </Eyebrow>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.14] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[48px]">
              Have a requirement?
              <br />
              Let&apos;s make it happen.
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80 sm:text-[16px]">
              Tell us what you&apos;re looking for, your destination port and quantity requirements. Our global trade specialists are ready to assist you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff0000] px-7 py-3.5 text-[14px] font-bold text-white shadow-md transition hover:bg-[#d60000] active:scale-95"
              >
                <span>Contact our team</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#171717]"
              >
                <Mail size={16} />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
