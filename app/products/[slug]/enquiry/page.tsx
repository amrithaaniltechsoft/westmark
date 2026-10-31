import { notFound } from "next/navigation";
import {
  PRODUCTS,
  getProductBySlug,
  slugify,
} from "@/components/data/site-data";
import { getSpecsForCategory } from "@/lib/product-specs-data";
import { EnquiryBreadcrumb } from "@/components/products/enquiry/enquiry-breadcrumb";
import { EnquiryProductCard } from "@/components/products/enquiry/enquiry-product-card";
import { EnquiryFormSection } from "@/components/products/enquiry/enquiry-form-section";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: slugify(product.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Enquiry | Layrock Global Trading LTD",
    };
  }

  return {
    title: `Export Enquiry: ${product.name} | Layrock Global Trading LTD`,
    description: `Request quotation and technical specification sheet for ${product.name} (${product.category}). Direct global export supplier.`,
  };
}

export default async function ProductEnquiryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const specs = getSpecsForCategory(product);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fcfcfc] text-[#171717]">
      {/* 1. Breadcrumb Component */}
      <EnquiryBreadcrumb product={product} />

      {/* 2. Main Enquiry Layout */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-8">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* Left Column: Product Summary Card (Sticky) */}
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <EnquiryProductCard product={product} specs={specs} />
            </div>

            {/* Right Column: Interactive Quotation Form */}
            <div className="lg:col-span-8">
              <EnquiryFormSection product={product} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
