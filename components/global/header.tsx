"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Layers3, Menu, Search, X } from "lucide-react";
import type { Category } from "@/components/data/site-data";
import { CATEGORIES } from "@/components/data/site-data";

export interface HeaderProps {
  categories?: Category[];
  activeCategory?: string;
  query?: string;
  mobileMenuOpen?: boolean;
  onQueryChange?: (query: string) => void;
  onSearchSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onSelectCategory?: (category: string) => void;
  onToggleMobileMenu?: () => void;
  onCloseMobileMenu?: () => void;
}

export function Header({
  categories = CATEGORIES,
  activeCategory: propActiveCategory,
  query: propQuery,
  mobileMenuOpen: propMobileMenuOpen,
  onQueryChange,
  onSearchSubmit,
  onSelectCategory,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderProps) {
  const router = useRouter();

  // Internal state fallback for layout usage
  const [internalQuery, setInternalQuery] = useState("");
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const query = propQuery !== undefined ? propQuery : internalQuery;
  const mobileMenuOpen = propMobileMenuOpen !== undefined ? propMobileMenuOpen : internalMobileMenuOpen;

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6 && !mobileMenuOpen) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  function handleQueryChange(val: string) {
    if (onQueryChange) {
      onQueryChange(val);
    } else {
      setInternalQuery(val);
    }
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    if (onSearchSubmit) {
      onSearchSubmit(event);
    } else {
      event.preventDefault();
      if (query.trim()) {
        router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      } else {
        router.push("/products");
      }
    }
  }

  function handleCategoryClick(catName: string) {
    if (onSelectCategory) {
      onSelectCategory(catName);
    } else {
      router.push(`/products?category=${encodeURIComponent(catName)}`);
    }
  }

  function toggleMenu() {
    if (onToggleMobileMenu) {
      onToggleMobileMenu();
    } else {
      setInternalMobileMenuOpen((open) => !open);
    }
  }

  function closeMenu() {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    } else {
      setInternalMobileMenuOpen(false);
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b border-black/[0.08] bg-white backdrop-blur-xl shadow-md transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex min-h-[82px] items-center gap-4 lg:gap-8">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo/logo.svg"
              alt="Layrock Global Trading LTD"
              width={160}
              height={48}
              priority
              className="h-10 w-auto max-w-[160px] object-contain sm:h-12"
            />
          </Link>

          <form
            onSubmit={handleSearch}
            role="search"
            aria-label="Search all products"
            className="relative hidden flex-1 md:block"
          >
            <label className="relative flex h-11 items-center overflow-hidden rounded-lg border border-black/15 bg-[#faf9f7] transition focus-within:border-[#ff0000] focus-within:bg-white">
              <Search size={18} className="ml-4 shrink-0 text-[#404040]" />
              <input
                type="search"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                placeholder="Search products, materials, polymers, spices..."
                aria-label="Search products"
                className="size-full bg-transparent px-3 text-[14px] text-[#171717] outline-none placeholder:text-[#595959]"
              />
              <button
                type="submit"
                aria-label="Submit product search"
                className="flex h-full items-center justify-center rounded-r-lg bg-[#ff0000] px-4 text-white transition hover:bg-[#d90000]"
              >
                <ArrowRight size={17} />
              </button>
            </label>
          </form>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {[
              ["About us", "/about"],
              ["Products & Services", "/products"],
              ["Testimonials", "/testimonials"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-[14px] font-medium text-[#171717] transition hover:text-[#ff0000]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#ff0000] px-4 text-[13px] font-semibold text-white shadow-xs transition hover:bg-[#d90000]"
            >
              <span>Request quote</span>
              <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={toggleMenu}
              className="flex size-11 items-center justify-center rounded-lg border border-black/10 bg-white text-[#171717] transition hover:bg-[#f4f5f7] lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <form
          onSubmit={handleSearch}
          role="search"
          aria-label="Search all products mobile"
          className="pb-3 md:hidden"
        >
          <label className="relative flex h-10 items-center overflow-hidden rounded-lg border border-black/15 bg-[#faf9f7] focus-within:border-[#ff0000]">
            <Search size={16} className="ml-3 shrink-0 text-[#404040]" />
            <input
              type="search"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="size-full bg-transparent px-3 text-[13px] text-[#171717] outline-none"
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
              ["About us", "/about"],
              ["Products & Services", "/products"],
              ["Testimonials", "/testimonials"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="px-3 py-3 text-[15px] transition hover:bg-white hover:text-[#ff0000]"
              >
                {label}
              </Link>
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
            <span className="mr-2 flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#404040]">
              <Layers3 size={14} /> Categories:
            </span>
            {categories.slice(1).map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => handleCategoryClick(category.name)}
                className="shrink-0 px-2 py-0.5 text-left text-[11.5px] font-medium text-[#2d2d2d] transition hover:text-[#ff0000] hover:decoration-[#ff0000]"
              >
                {category.short || category.name}
              </button>
            ))}
          </nav>

          <Link
            href="/products"
            className="shrink-0 text-[11.5px] font-semibold text-[#ff0000] underline decoration-[#ff0000]/40 underline-offset-4 transition hover:text-[#d90000] hover:decoration-[#d90000]"
          >
            View all
          </Link>
        </div>
      </div>
    </header>
  );
}
