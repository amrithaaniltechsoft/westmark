"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Layers3, Menu, Search, X } from "lucide-react";
import type { Category, Product } from "@/components/data/site-data";
import { CATEGORIES, PRODUCTS } from "@/components/data/site-data";
import { SearchDropdown } from "@/components/global/search-dropdown";

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

  // Search and dropdown state
  const [internalQuery, setInternalQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const query = propQuery !== undefined ? propQuery : internalQuery;
  const mobileMenuOpen = propMobileMenuOpen !== undefined ? propMobileMenuOpen : internalMobileMenuOpen;

  // Header scroll auto-hide
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

  // Close search dropdown on scroll or outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        (!desktopSearchRef.current || !desktopSearchRef.current.contains(target)) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(target))
      ) {
        setIsDropdownOpen(false);
      }
    }

    function handleWindowScroll() {
      setIsDropdownOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  function handleClearQuery() {
    handleQueryChange("");
    setIsDropdownOpen(false);
  }

  function handleQueryChange(val: string) {
    if (onQueryChange) {
      onQueryChange(val);
    } else {
      setInternalQuery(val);
    }
    if (val.trim().length > 0) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }

  function handleSearch(event?: React.FormEvent<HTMLFormElement>) {
    if (event) event.preventDefault();
    setIsDropdownOpen(false);
    if (onSearchSubmit && event) {
      onSearchSubmit(event);
    } else {
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

  // Filter top 6 matching products for live dropdown suggestion
  const searchResults: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-black/[0.08] bg-[#faf9f7] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="flex shrink-0 items-center transition hover:opacity-95"
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

          {/* Desktop search bar with live dropdown */}
          <div ref={desktopSearchRef} className="relative hidden flex-1 md:block">
            <form
              onSubmit={handleSearch}
              role="search"
              aria-label="Search all products"
            >
              <label className="relative flex h-11 items-center overflow-hidden rounded-xl border border-black/15 bg-white transition focus-within:border-[#ff0000] focus-within:ring-2 focus-within:ring-[#ff0000]/10">
                <Search size={18} className="ml-4 shrink-0 text-[#404040]" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => handleQueryChange(event.target.value)}
                  onFocus={() => {
                    if (query.trim()) setIsDropdownOpen(true);
                  }}
                  onClick={() => {
                    if (query.trim()) setIsDropdownOpen(true);
                  }}
                  placeholder="Search products, materials, polymers, spices..."
                  aria-label="Search products"
                  className="size-full bg-transparent px-3 text-[14px] text-[#171717] outline-none placeholder:text-[#595959]"
                />
                {query.trim() && (
                  <button
                    type="button"
                    onClick={handleClearQuery}
                    aria-label="Clear search input"
                    className="mr-2 flex size-6 shrink-0 items-center justify-center rounded-full text-[#888] transition hover:bg-black/5 hover:text-[#171717] cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                )}
                <button
                  type="submit"
                  aria-label="Submit product search"
                  className="flex h-full items-center justify-center rounded-r-xl bg-[#ff0000] px-4 text-white transition hover:bg-[#d90000] cursor-pointer"
                >
                  <ArrowRight size={17} />
                </button>
              </label>
            </form>

            {/* Desktop Suggestions Dropdown */}
            <SearchDropdown
              isOpen={isDropdownOpen}
              query={query}
              results={searchResults}
              onSelectProduct={() => setIsDropdownOpen(false)}
              onViewAllResults={() => handleSearch()}
            />
          </div>

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

        {/* Mobile search bar with live dropdown */}
        <div ref={mobileSearchRef} className="relative pb-3 md:hidden">
          <form
            onSubmit={handleSearch}
            role="search"
            aria-label="Search all products mobile"
          >
            <label className="relative flex h-10 items-center overflow-hidden rounded-xl border border-black/15 bg-white focus-within:border-[#ff0000] focus-within:ring-2 focus-within:ring-[#ff0000]/10">
              <Search size={16} className="ml-3 shrink-0 text-[#404040]" />
              <input
                type="search"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                onFocus={() => {
                  if (query.trim()) setIsDropdownOpen(true);
                }}
                onClick={() => {
                  if (query.trim()) setIsDropdownOpen(true);
                }}
                placeholder="Search products..."
                aria-label="Search products"
                className="size-full bg-transparent px-3 text-[13px] text-[#171717] outline-none"
              />
              <button
                aria-label="Submit search"
                type="submit"
                className="flex h-full items-center justify-center rounded-r-xl bg-[#ff0000] px-4 text-white cursor-pointer"
              >
                <ArrowRight size={17} />
              </button>
            </label>
          </form>

          {/* Mobile Suggestions Dropdown */}
          <SearchDropdown
            isOpen={isDropdownOpen}
            query={query}
            results={searchResults}
            onSelectProduct={() => setIsDropdownOpen(false)}
            onViewAllResults={() => handleSearch()}
          />
        </div>

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
                className="shrink-0 px-2 py-0.5 text-left text-[11.5px] font-medium text-[#2d2d2d] transition hover:text-[#ff0000] hover:decoration-[#ff0000] cursor-pointer"
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
