import type { Category } from "@/components/data/site-data";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";

export interface FooterProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
}

export function Footer({ categories, onSelectCategory }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#141414] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          {/* Brand info */}
          <div>
            <a href="#home" className="inline-block transition hover:opacity-90">
              <img
                src="/logo/logo-white.svg"
                alt="Layrock Global Trading LTD"
                className="h-10 w-auto max-w-[180px] object-contain"
              />
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/70">
              Connecting sourcing opportunities with business requirements
              across product categories and international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-white/70">
              <a href="#about" className="transition hover:text-[#ff0000]">About us</a>
              <a href="#categories" className="transition hover:text-[#ff0000]">Categories</a>
              <a href="#products" className="transition hover:text-[#ff0000]">Products</a>
              <a href="#services" className="transition hover:text-[#ff0000]">Services</a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Our categories
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-white/70">
              {categories.slice(1).map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => onSelectCategory(category.name)}
                  className="cursor-pointer text-left transition hover:text-[#ff0000]"
                >
                  {category.short || category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <p className="mt-4 text-[14px] leading-6 text-white/70">
              79 Hurn Lane Keynsham<br />Bristol BS31 1QY
            </p>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="mt-3 block break-all text-[14px] font-medium text-white transition hover:text-[#ff0000]"
            >
              {EMAIL_ADDRESS}
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="mt-2 block text-[14px] font-medium text-white transition hover:text-[#ff0000]"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="flex flex-col justify-between gap-3 pt-6 text-[13px] text-white/50 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Layrock Global Trading LTD. All rights reserved.</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-normal hover:underline underline-offset-4 transition-colors"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
          <div className="flex flex-wrap gap-5 font-medium">
            <a href="#home" className="transition hover:text-[#ff0000]">Back to top ↑</a>
            <a href="/contact" className="transition hover:text-[#ff0000]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
