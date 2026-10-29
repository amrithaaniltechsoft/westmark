import type { Category } from "@/components/data/site-data";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";

export interface FooterProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
}

export function Footer({ categories, onSelectCategory }: FooterProps) {
  return (
    <footer className="border-t border-black/[0.08] bg-[#f8f9fa] px-4 pb-7 pt-12 text-[#171717] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-black/[0.1] pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <a href="#home" className="inline-flex rounded-lg bg-white p-2.5 shadow-xs border border-black/[0.08]">
              <img
                src="/logo/logo.svg"
                alt="Layrock Global Trading LTD"
                className="h-10 w-auto max-w-[160px] object-contain"
              />
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#4a4a4a]">
              Connecting sourcing opportunities with business requirements
              across product categories and international markets.
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-bold text-[#171717]">Explore</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-[#4a4a4a]">
              <a href="#about" className="transition hover:text-[#ff0000]">About us</a>
              <a href="#categories" className="transition hover:text-[#ff0000]">Categories</a>
              <a href="#products" className="transition hover:text-[#ff0000]">Products</a>
              <a href="#services" className="transition hover:text-[#ff0000]">Services</a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold text-[#171717]">Our categories</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-[14px] font-medium text-[#4a4a4a]">
              {categories.slice(1).map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => onSelectCategory(category.name)}
                  className="text-left transition hover:text-[#ff0000]"
                >
                  {category.short}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold text-[#171717]">Get in touch</h3>
            <p className="mt-4 text-[14px] leading-6 text-[#4a4a4a]">
              79 Hurn Lane, Keynsham
              <br />
              BS31 1QY, United Kingdom
            </p>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="mt-3 block break-all text-[14px] font-semibold text-[#171717] transition hover:text-[#ff0000]"
            >
              {EMAIL_ADDRESS}
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="mt-2 block text-[14px] font-semibold text-[#171717] transition hover:text-[#ff0000]"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-[13px] text-[#666666] sm:flex-row sm:items-center">
          <p>
            © 2026 Layrock Global Trading LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 font-medium">
            <a href="#home" className="transition hover:text-[#ff0000]">Back to top ↑</a>
            <a href="#contact" className="transition hover:text-[#ff0000]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

