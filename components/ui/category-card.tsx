import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/components/data/site-data";

export interface CategoryCardProps {
  category: Category;
  href?: string;
  onSelectCategory?: (categoryName: string) => void;
  className?: string;
}

export function CategoryCard({
  category,
  href,
  onSelectCategory,
  className = "",
}: CategoryCardProps) {
  const innerContent = (
    <>
      <div className="mx-auto size-[140px] overflow-hidden rounded-full bg-[#efeeeb] p-1.5 sm:size-[160px] sm:p-2">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src={category.image}
            alt={category.short || category.name}
            fill
            sizes="160px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-3 max-w-[180px] text-center">
        <h3 className="text-[13px] font-semibold leading-snug text-[#171717] transition group-hover:text-[#ff0000] sm:text-[14px]">
          {category.name}
        </h3>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group flex flex-col items-center text-center ${className}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelectCategory?.(category.name)}
      className={`group flex flex-col items-center text-center ${className}`}
    >
      {innerContent}
    </button>
  );
}
