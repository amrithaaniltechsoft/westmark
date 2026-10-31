import { TESTIMONIALS } from "@/components/data/site-data";
import { PageHero } from "@/components/ui/page-hero";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export const metadata = {
  title: "Client Testimonials | Layrock Global Trading LTD",
  description:
    "Read real feedback and trade experiences from our global partners, wholesale importers, and industrial buyers worldwide.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      {/* Page Hero with standard boxed card design */}
      <PageHero
        eyebrow="CLIENT VOICES"
        title="Testimonials"
        description="Built on clear communication, verified supply lines, and dependable follow-through across international borders."
        image="/banner/b7.png"
        imageAlt="Layrock Global Trading - Client Testimonials"
      />

      {/* Testimonials section from home page */}
      <TestimonialsSection testimonials={TESTIMONIALS} />
    </main>
  );
}

