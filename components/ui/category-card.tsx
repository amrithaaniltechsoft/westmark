import type { Category } from "@/components/data/site-data";

export interface CategoryCardProps {
  category: Category;
  onSelectCategory?: (categoryName: string) => void;
  className?: string;
}

export function CategoryCard({
  category,
  onSelectCategory,
  className = "",
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelectCategory?.(category.name)}
      className={`group flex flex-col items-center text-center ${className}`}
    >
      <div className="mx-auto aspect-square w-full max-w-[150px] overflow-hidden rounded-full bg-[#efeeeb] p-1.5 sm:max-w-[160px] sm:p-2">
        <div className="size-full overflow-hidden rounded-full">
          <img
            src={category.image}
            alt={category.short || category.name}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-3 max-w-[180px] text-center">
        <h3 className="text-[13px] font-semibold leading-snug text-[#171717] transition group-hover:text-[#ff0000] sm:text-[14px]">
          {category.name}
        </h3>
      </div>
    </button>
  );
}

