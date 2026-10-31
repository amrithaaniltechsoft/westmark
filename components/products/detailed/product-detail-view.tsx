import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { Product } from "@/components/data/site-data";
import { EMAIL_ADDRESS, PHONE_NUMBER, slugify } from "@/components/data/site-data";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductBreadcrumb } from "@/components/products/detailed/product-breadcrumb";
import { ProductGallery } from "@/components/products/detailed/product-gallery";
import { ProductSpecs } from "@/components/products/detailed/product-specs";
import { ProductFaqAccordion } from "@/components/products/detailed/product-faq-accordion";
import { ProductFloatingCta } from "@/components/products/detailed/product-floating-cta";
import { RelatedProductsSection } from "@/components/products/detailed/related-products-section";
import { getSpecsForCategory } from "@/lib/product-specs-data";

export interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

function getFaqsForCategory(product: Product) {
  return [
    {
      q: "What certifications are available for this product?",
      a: "All shipments are accompanied by Manufacturer Mill Test Certificates (MTC), Certificate of Origin (COO), ISO compliance documentation, and third-party inspection reports (e.g. SGS / Bureau Veritas) upon request.",
    },
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ starts from 1 FCL (Full Container Load: 20ft or 40ft container). Consolidated mixed-item container shipments can also be arranged depending on your destination port requirements.",
    },
    {
      q: "How are shipping and delivery handled?",
      a: "We ship internationally on FOB, CIF, and CFR incoterms directly to your designated sea port or terminal. Typical lead times are 15–30 days from order confirmation and LC/TT verification.",
    },
  ];
}

export function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const images = [
    product.image,
    `/categories/${product.category}.png`,
    `/home-hero/${product.category}.png`,
  ];

  const specs = getSpecsForCategory(product);
  const faqs = getFaqsForCategory(product);

  const mailtoSubject = encodeURIComponent(
    `Export Enquiry: ${product.name} (Ref: ${product.number})`
  );
  const mailtoBody = encodeURIComponent(
    `Dear Layrock Global Trading Desk,\n\nI would like to initiate an export enquiry for:\n\nProduct: ${product.name}\nCategory: ${product.category}\nItem Ref: ${product.number}\n\nRequired Quantity:\nDestination Port / Country:\nPreferred Incoterm (FOB/CIF/CFR):\n\nCompany Name:\nContact Person:\nPhone Number:\n`
  );
  const exportEnquiryHref = `mailto:${EMAIL_ADDRESS}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const cleanPhone = PHONE_NUMBER.replace(/\D/g, "");
  const whatsappText = encodeURIComponent(
    `Hello Layrock Global Trading LTD, I would like to chat regarding: ${product.name} (Ref: ${product.number}, Category: ${product.category}).`
  );
  const whatsappHref = `https://wa.me/${cleanPhone}?text=${whatsappText}`;
  const productSlug = slugify(product.name);
  const enquiryPageHref = `/products/${productSlug}/enquiry`;

  return (
    <div className="bg-white text-[#171717]">
      {/* 1. Breadcrumb Component */}
      <ProductBreadcrumb product={product} />

      {/* 2. Main Product Showcase */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Left: Gallery Component (Sticky on desktop view) */}
            <div className="lg:sticky lg:top-28 lg:col-span-6">
              <ProductGallery images={images} productName={product.name} />
            </div>

            {/* Right: Product Details, Specs, FAQ & Action */}
            <div className="flex flex-col lg:col-span-6">
              <Eyebrow>{product.category}</Eyebrow>

              <h1 className="mt-2 text-[24px] font-bold leading-[1.15] tracking-[-0.035em] text-[#171717] sm:text-[28px] lg:text-[36px]">
                {product.name}
              </h1>

              <p className="mt-4 text-[14.5px] leading-relaxed text-[#4a4a4a] sm:text-[15px]">
                {product.description}
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button
                  as="a"
                  href={enquiryPageHref}
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight size={17} />}
                  className="rounded-xl shadow-md"
                >
                  Start Enquiry
                </Button>
                <Button
                  as="a"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  fullWidth
                  leftIcon={<FaWhatsapp className="text-[#25D366] text-xl" />}
                  className="rounded-xl font-bold tracking-wider hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#171717]"
                >
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Technical Specifications Component */}
              <ProductSpecs
                spec={specs.spec}
                origin={specs.origin}
                packing={specs.packing}
              />

              {/* FAQ Accordion Component */}
              <ProductFaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Products Component */}
      <RelatedProductsSection
        category={product.category}
        relatedProducts={relatedProducts}
      />

      {/* 4. Floating CTA Island (Appears on scroll at bottom center) */}
      <ProductFloatingCta
        name={product.name}
        category={product.category}
        image={product.image}
        enquiryHref={enquiryPageHref}
      />
    </div>
  );
}
