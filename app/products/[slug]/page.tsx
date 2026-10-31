import { notFound } from "next/navigation";
import {
  PRODUCTS,
  getProductBySlug,
  slugify,
} from "@/components/data/site-data";
import { ProductDetailView } from "@/components/products/detailed/product-detail-view";

// Next.js static params generation for all 50 products
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: slugify(product.name),
  }));
}

// Next.js dynamic metadata generation based on product slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Layrock Global Trading LTD",
    };
  }

  return {
    title: `${product.name} | Layrock Global Trading LTD`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.category}`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category (excluding current item)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 5);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      <ProductDetailView
        product={product}
        relatedProducts={relatedProducts}
      />
    </main>
  );
}
