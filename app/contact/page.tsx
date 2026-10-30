"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CATEGORIES, EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function ContactPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#171717]">
      <Header
        categories={CATEGORIES}
        activeCategory={activeCategory}
        query={query}
        mobileMenuOpen={mobileMenuOpen}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearch}
        onSelectCategory={setActiveCategory}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10">
        <div className="mx-auto max-w-[1440px]">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#737373] transition hover:text-[#ff0000]"
            >
              <ArrowLeft size={15} />
              <span>Back to home</span>
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left: Info */}
            <div>
              <Eyebrow>GET IN TOUCH</Eyebrow>
              <h1 className="mt-3 text-[36px] font-bold leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[48px]">
                Let&apos;s discuss your sourcing needs.
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#4a4a4a]">
                Reach out to our global trade desk with your specifications, volume requirements, or destination incoterm inquiries.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff0000]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#171717]">Head Office</h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#4a4a4a]">
                      79 Hurn Lane Keynsham<br />Bristol BS31 1QY
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=79+Hurn+Lane+Keynsham+Bristol+BS31+1QY"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#ff0000] hover:underline"
                    >
                      View on Google Maps <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff0000]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#171717]">Direct Email</h3>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="mt-1 block text-[15px] font-semibold text-[#171717] hover:text-[#ff0000]"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                    <p className="mt-0.5 text-[13px] text-[#666666]">
                      We respond to trade enquiries within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0f0] text-[#ff0000]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#171717]">Phone Line</h3>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="mt-1 block text-[15px] font-semibold text-[#171717] hover:text-[#ff0000]"
                    >
                      {PHONE_NUMBER}
                    </a>
                    <p className="mt-0.5 text-[13px] text-[#666666]">
                      Monday to Friday, 9:00 AM – 6:00 PM GMT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Full enquiry form */}
            <div className="rounded-2xl border border-black/[0.08] bg-[#faf9f7] p-7 shadow-sm sm:p-10 lg:p-12">
              <h2 className="text-[24px] font-bold tracking-tight text-[#171717]">
                Send a trade enquiry
              </h2>
              <p className="mt-1 text-[14px] text-[#555555]">
                Complete the form and our specialist team will review and reply with pricing and schedule.
              </p>

              <form
                action={`mailto:${EMAIL_ADDRESS}`}
                method="GET"
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-semibold text-[#171717]"
                    >
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="mt-1.5 h-11 w-full rounded-lg border border-black/15 bg-white px-3.5 text-[14px] text-[#171717] outline-none transition focus:border-[#ff0000]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-semibold text-[#171717]"
                    >
                      Business email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="mt-1.5 h-11 w-full rounded-lg border border-black/15 bg-white px-3.5 text-[14px] text-[#171717] outline-none transition focus:border-[#ff0000]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[13px] font-semibold text-[#171717]"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="e.g. Global Supplies Ltd"
                      className="mt-1.5 h-11 w-full rounded-lg border border-black/15 bg-white px-3.5 text-[14px] text-[#171717] outline-none transition focus:border-[#ff0000]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-[13px] font-semibold text-[#171717]"
                    >
                      Product category
                    </label>
                    <select
                      id="category"
                      name="category"
                      aria-label="Product category of interest"
                      className="mt-1.5 h-11 w-full rounded-lg border border-black/15 bg-white px-3 text-[14px] text-[#171717] outline-none transition focus:border-[#ff0000]"
                    >
                      {CATEGORIES.slice(1).map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                      <option value="Other">Other sourcing requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-semibold text-[#171717]"
                  >
                    Order details / specification *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Include material grade, estimated quantity, preferred incoterm (FOB/CIF) and destination port..."
                    className="mt-1.5 w-full rounded-lg border border-black/15 bg-white p-3.5 text-[14px] text-[#171717] outline-none transition focus:border-[#ff0000]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full gap-2 text-[14px] font-semibold"
                >
                  Submit trade enquiry <ArrowRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer
        categories={CATEGORIES}
        onSelectCategory={setActiveCategory}
      />
    </main>
  );
}

