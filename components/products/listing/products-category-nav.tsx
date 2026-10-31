"use client";

import type { Category } from "@/components/data/site-data";
import { CategoryCard } from "@/components/ui/category-card";

export interface ProductsCategoryNavProps {
  categories: Category[];
  selectedCategory?: string | null;
  onSelectCategory?: (categoryName: string) => void;
}

export function ProductsCategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProductsCategoryNavProps) {
  return (
    <section className="border-b border-black/[0.06] bg-white px-4 pb-8 pt-6 sm:px-6 lg:px-10 lg:pt-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-2">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#737373]">
              Categories
            </span>

            {selectedCategory && onSelectCategory && (
              <button
                type="button"
                onClick={() => onSelectCategory("all")}
                className="rounded-full bg-black/5 px-3 py-1 text-[11.5px] font-bold text-[#171717] transition hover:bg-[#ff0000] hover:text-white"
              >
                Show All Categories
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <div
                  key={category.name}
                  className={`flex items-center justify-center rounded-2xl py-3 px-2 transition-all duration-300 ${isSelected
                    ? "bg-[#ff0000]/5 ring-2 ring-[#ff0000]"
                    : "hover:bg-black/[0.02]"
                    }`}
                >
                  <CategoryCard
                    category={category}
                    onSelectCategory={onSelectCategory}
                    className="w-full cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
