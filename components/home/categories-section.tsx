import { ArrowRight } from "lucide-react";
import type { Category } from "@/components/data/site-data";
import { CategoryCard } from "@/components/ui/category-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface CategoriesSectionProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
}

export function CategoriesSection({
  categories,
  onSelectCategory,
}: CategoriesSectionProps) {
  return (
    <section id="categories" className="scroll-mt-36 px-4 pb-4 sm:px-6 lg:px-10 lg:pb-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <ScrollReveal variant="fade-up">
            <h2 className="mt-3 text-[32px] tracking-[-0.04em] sm:text-[42px]">
              Explore product categories
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-left">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[14px] font-medium text-[#171717] transition hover:text-[#ff0000]"
            >
              View all products
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {categories.slice(1).map((category, index) => (
            <ScrollReveal
              key={category.name}
              variant="fade-up"
              delayMs={index * 60}
            >
              <CategoryCard
                category={category}
                onSelectCategory={onSelectCategory}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
