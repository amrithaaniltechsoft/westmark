import type { Category } from "@/components/data/site-data";
import { CategoryCard } from "@/components/ui/category-card";

export interface ProductsCategoryNavProps {
  categories: Category[];
}

export function ProductsCategoryNav({ categories }: ProductsCategoryNavProps) {
  return (
    <section className="border-b border-black/[0.06] bg-white px-4 pb-8 pt-6 sm:px-6 lg:px-10 lg:pt-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-2">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#737373]">
              Categories
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {categories.map((category) => {
              const anchor = `#cat-${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <div
                  key={category.name}
                  className="flex items-center justify-center rounded-2xl py-3 px-2 transition-all duration-300 hover:bg-black/[0.02]"
                >
                  <CategoryCard
                    category={category}
                    href={anchor}
                    className="w-full"
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
