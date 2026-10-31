import { PageHero } from "@/components/ui/page-hero";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactFormSection } from "@/components/contact/contact-form-section";

export const metadata = {
  title: "Contact Us | Layrock Global Trading LTD",
  description:
    "Get in touch with Layrock Global Trading LTD for sourcing inquiries, shipping quotes, and international trade assistance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      {/* Hero section */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        description="Let's discuss your sourcing needs. Reach out to our global trade desk with your specifications, volume requirements, or destination incoterm inquiries."
        image="/banner/b8.png"
        imageAlt="Layrock Global Trading - Contact Us"
      />

      {/* Section 1: Contact Details with right-aligned image */}
      <ContactDetails />

      {/* Section 2: Contact Form inside full-width banner with bg image, aligned to right edge */}
      <ContactFormSection />
    </main>
  );
}
