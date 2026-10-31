import { ContactSection } from "@/components/home/contact-section";
import { PageHero } from "@/components/ui/page-hero";
import { AboutOverview } from "@/components/about/about-overview";
import { AboutEntities } from "@/components/about/about-entities";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { CATEGORIES } from "@/components/data/site-data";

export const metadata = {
  title: "About Us | Layrock Global Trading LTD",
  description:
    "Learn about Layrock Global Trading LTD — bridging continents through trusted international procurement, distribution, and cross-border trade.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      {/* Hero Banner with Title & b7.png */}
      <PageHero
        eyebrow="WHO WE ARE"
        title="About Us"
        description="Layrock Global Trading LTD — Bridging continents through trusted international procurement, distribution, and cross-border trade."
        image="/banner/b10.png"
        imageAlt="Layrock Global Trading - About Us"
      />

      {/* Reusable Trust Indicators Section */}
      <TrustIndicators />

      {/* Editorial Overview & Company Details */}
      <AboutOverview />

      {/* Partner Businesses in India / Footprint */}
      <AboutEntities />

      {/* Reusable CTA Section from Home Page */}
      <ContactSection categories={CATEGORIES} />
    </main>
  );
}
