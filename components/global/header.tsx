"use client";

import { ArrowRight, ArrowUpRight, Layers3, Menu, Search, X } from "lucide-react";
import type { Category } from "@/components/data/site-data";

export interface HeaderProps {
  categories: Category[];
  activeCategory: string;
  query: string;
  mobileMenuOpen: boolean;
  onQueryChange: (query: string) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSelectCategory: (category: string) => void;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

export function Header({
  categories,
  activeCategory,
  query,
  mobileMenuOpen,
  onQueryChange,
  onSearchSubmit,
  onSelectCategory,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderProps) {
  return (
    <>
      {/* Top announcement */}
      {/* <div className="border-b border-black/[0.08] bg-[#f4f5f7] px-4 py-2 text-[#171717]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 text-[13px]">
          <p className="font-medium text-[#404040]">
            Your partner for global sourcing and export solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[#ff0000] transition hover:text-[#d90000]"
          >
            Talk to our team <ArrowUpRight size={14} />
          </a>
        </div>
      </div> */}

      {/* Main header */}
      <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex min-h-[82px] items-center gap-4 lg:gap-8">
            <a
              href="#home"
              aria-label="Go to homepage"
              className="flex shrink-0 items-center"
            >
              <img
                src="/logo/logo.svg"
                alt="Layrock Global Trading LTD"
                className="h-10 w-auto max-w-[160px] object-contain sm:h-12"
              />
            </a>

            <form
              onSubmit={onSearchSubmit}
              role="search"
              className="hidden min-w-0 flex-1 md:flex"
            >
              <label className="flex h-[48px] w-full items-center rounded-xl border border-[#ff0000] bg-white transition focus-within:border-[#ff0000] focus-within:ring-2 focus-within:ring-[#ff0000]/15">
                <Search
                  className="ml-4 shrink-0 text-[#4a4a4a]"
                  size={19}
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  placeholder="Search products, materials and categories..."
                  aria-label="Search products"
                  className="h-full min-w-0 flex-1 bg-transparent px-3 text-[14px] font-medium text-[#171717] outline-none placeholder:text-[#666666]"
                />
                <button
                  type="submit"
                  className="m-1 flex h-[40px] shrink-0 items-center gap-2 rounded-lg bg-[#ff0000] px-5 text-[14px] font-medium text-white transition hover:bg-[#d90000]"
                >
                  Search
                </button>
              </label>
            </form>

            <nav className="ml-auto hidden items-center gap-6 lg:flex">
              <a href="#about" className="nav-link font-medium text-[#2b2b2b] hover:text-[#ff0000]">
                About us
              </a>
              <a href="#services" className="nav-link font-medium text-[#2b2b2b] hover:text-[#ff0000]">
                Services
              </a>
              <a href="#products" className="nav-link font-medium text-[#2b2b2b] hover:text-[#ff0000]">
                Products
              </a>
              <a href="#contact" className="nav-link font-medium text-[#2b2b2b] hover:text-[#ff0000]">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#ff0000] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#d90000] sm:inline-flex"
            >
              Contact us <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={onToggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-black/15 bg-white text-[#171717] lg:hidden"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile search */}
          <form onSubmit={onSearchSubmit} className="pb-4 md:hidden">
            <label className="flex h-11 items-center rounded-lg border border-black/15 bg-white">
              <Search className="ml-3 shrink-0 text-[#4a4a4a]" size={18} />
              <input
                type="search"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search products and categories..."
                aria-label="Search products"
                className="h-full min-w-0 flex-1 bg-transparent px-3 text-[14px] font-medium text-[#171717] outline-none placeholder:text-[#666666]"
              />
              <button
                aria-label="Submit search"
                type="submit"
                className="flex h-full items-center justify-center rounded-r-lg bg-[#ff0000] px-4 text-white"
              >
                <ArrowRight size={17} />
              </button>
            </label>
          </form>

          {mobileMenuOpen && (
            <nav className="grid gap-1 border-t border-black/10 py-3 lg:hidden">
              {[
                ["About us", "#about"],
                ["Products", "#products"],
                ["Services", "#services"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={onCloseMobileMenu}
                  className="px-3 py-3 text-[15px] transition hover:bg-white hover:text-[#ff0000]"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Category bar */}
        <div className="border-t border-black/[0.06]">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
            <nav
              aria-label="Product categories"
              className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <span className="mr-2 flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#404040]">
                <Layers3 size={15} /> Categories:
              </span>
              {categories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => onSelectCategory(category.name)}
                  className="shrink-0 px-2.5 py-1 text-left text-[13px] font-medium text-[#2d2d2d] underline decoration-black/25 underline-offset-4 transition hover:text-[#ff0000] hover:decoration-[#ff0000]"
                >
                  {category.short || category.name}
                </button>
              ))}
            </nav>

            <a
              href="#products"
              onClick={() => onSelectCategory("All products")}
              className="shrink-0 text-[12px] font-medium text-[#ff0000] underline decoration-[#ff0000]/40 underline-offset-4 transition hover:text-[#d90000] hover:decoration-[#d90000] sm:text-[13px]"
            >
              View all
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

