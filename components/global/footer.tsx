"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight, Building2, Truck, Mountain } from "lucide-react";
import type { Category } from "@/components/data/site-data";
import { CATEGORIES, EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface FooterProps {
  categories?: Category[];
  onSelectCategory?: (category: string) => void;
}

export function Footer({ categories = CATEGORIES, onSelectCategory }: FooterProps) {
  const router = useRouter();

  function handleCategoryClick(catName: string) {
    if (onSelectCategory) {
      onSelectCategory(catName);
    } else {
      router.push(`/products?category=${encodeURIComponent(catName)}`);
    }
  }

  return (
    <footer className="bg-[#141414] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr_1fr]">
          {/* Brand info */}
          <ScrollReveal variant="fade-up" delayMs={0}>
            <Link href="/" className="inline-block transition hover:opacity-90">
              <Image
                src="/logo/logo-white.svg"
                alt="Layrock Global Trading LTD"
                width={180}
                height={48}
                className="h-12 w-auto max-w-[180px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/70">
              Connecting sourcing opportunities with business requirements
              across product categories and international markets.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <span>Know about us</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff0000] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#d90000] active:scale-95"
              >
                <span>Contact us</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal variant="fade-up" delayMs={60}>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-white/70">
              <Link href="/about" className="transition hover:text-[#ff0000]">About us</Link>
              <Link href="/#categories" className="transition hover:text-[#ff0000]">Categories</Link>
              <Link href="/products" className="transition hover:text-[#ff0000]">Products & Services</Link>
              <Link href="/contact" className="transition hover:text-[#ff0000]">Contact</Link>
            </div>
          </ScrollReveal>

          {/* Categories */}
          <ScrollReveal variant="fade-up" delayMs={120}>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Our categories
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-white/70">
              {categories.slice(1).map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryClick(category.name)}
                  className="cursor-pointer text-left transition hover:text-[#ff0000]"
                >
                  {category.short || category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Our Business in India */}
          <ScrollReveal variant="fade-up" delayMs={150}>
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
                Our Business in India
              </h3>
            </div>

            <div className="mt-4 flex flex-col divide-y divide-white/10 text-white/80">
              <div className="flex items-center gap-3 py-2.5">
                <Building2 size={20} className="shrink-0 text-white/90" />
                <span className="text-[13.5px] font-medium leading-snug">
                  Layrock Developers Pvt Ltd
                </span>
              </div>

              <div className="flex items-center gap-3 py-2.5">
                <Truck size={20} className="shrink-0 text-white/90" />
                <span className="text-[13.5px] font-medium leading-snug">
                  Supermix Concrete
                </span>
              </div>

              <div className="flex items-center gap-3 py-2.5">
                <Mountain size={20} className="shrink-0 text-white/90" />
                <span className="text-[13.5px] font-medium leading-snug">
                  Kakkara Crushers Pvt Ltd
                </span>
              </div>

              <div className="flex items-center gap-3 py-2.5">
                <svg className="size-5 shrink-0 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
                <span className="text-[13.5px] font-medium leading-snug">
                  Layrock AAC Pvt Ltd
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal variant="fade-up" delayMs={180}>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-[14px] text-white/70">
              <div>
                <p className="font-semibold text-white">Head Office</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/80">
                  79 Hurn Lane Keynsham<br />Bristol BS31 1QY
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-white/50">Direct Email</p>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="mt-0.5 block font-medium text-white transition hover:text-[#ff0000]"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

              <div className="pt-1">
                <p className="text-xs uppercase tracking-wider text-white/50">Phone Number</p>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="mt-0.5 block font-medium text-white transition hover:text-[#ff0000]"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Layrock Global Trading LTD. All rights reserved.</p>

          <a href="https://www.techsoftweb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white font-normal hover:underline underline-offset-4 transition-colors">Web Design Company in Kochi Techsoft</a>
        </div>
      </div>
    </footer>
  );
}
