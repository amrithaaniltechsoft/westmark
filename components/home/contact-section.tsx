import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Category } from "@/components/data/site-data";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/components/data/site-data";

export interface ContactSectionProps {
  categories: Category[];
}

export function ContactSection({ categories }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-36 bg-[#f4f5f7] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">LET&apos;S TALK BUSINESS</p>
            <h2 className="mt-3 max-w-xl text-[36px] font-bold leading-[1.12] tracking-[-0.045em] text-[#171717] sm:text-[50px]">
              Have a requirement?
              <br />
              Let&apos;s make it happen.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#3f3f3f]">
              Tell us what you&apos;re looking for, the quantity you need and
              your destination. Our team can help you discuss the next steps.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#ff0000] shadow-xs">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#171717]">Our address</h3>
                  <p className="mt-1 text-[14px] leading-6 text-[#3f3f3f]">
                    79 Hurn Lane, Keynsham
                    <br />
                    BS31 1QY, United Kingdom
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=79+Hurn+Lane+Keynsham+BS31+1QY"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-[#ff0000] hover:underline"
                  >
                    Get directions <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#ff0000] shadow-xs">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#171717]">Email us</h3>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="mt-1 block text-[14px] font-medium text-[#2b2b2b] transition hover:text-[#ff0000]"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#ff0000] shadow-xs">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#171717]">Call us</h3>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="mt-1 block text-[14px] font-medium text-[#2b2b2b] transition hover:text-[#ff0000]"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            action={`mailto:${EMAIL_ADDRESS}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:p-9 lg:p-10"
          >
            <h3 className="text-[23px] font-bold tracking-[-0.03em] text-[#171717]">
              Send an enquiry
            </h3>
            <p className="mt-2 text-[14px] leading-6 text-[#404040]">
              Complete the details below and tell us how we can help.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block text-[14px] font-medium text-[#222222]">
                Your name
                <input
                  name="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  required
                  className="form-field mt-2 font-normal"
                />
              </label>
              <label className="block text-[14px] font-medium text-[#222222]">
                Business email
                <input
                  name="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className="form-field mt-2 font-normal"
                />
              </label>
              <label className="block text-[14px] font-medium text-[#222222]">
                Company name
                <input
                  name="Company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company"
                  className="form-field mt-2 font-normal"
                />
              </label>
              <label className="block text-[14px] font-medium text-[#222222]">
                Product category
                <select
                  name="Category"
                  defaultValue=""
                  required
                  className="form-field mt-2 font-normal"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.slice(1).map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-[14px] font-medium text-[#222222] sm:col-span-2">
                Your requirements
                <textarea
                  name="Requirements"
                  rows={4}
                  required
                  placeholder="Tell us about the product, quantity and destination..."
                  className="form-field mt-2 min-h-[120px] resize-y py-3 font-normal"
                />
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={17} />}
              className="mt-6 w-full sm:w-auto"
            >
              Send your enquiry
            </Button>
            <p className="mt-4 text-[12px] leading-5 text-[#555555]">
              Your enquiry will be prepared through your default email application.
            </p>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-xs">
          <iframe
            title="Map showing 79 Hurn Lane, Keynsham, BS31 1QY"
            src="https://maps.google.com/maps?q=79%20Hurn%20Lane%2C%20Keynsham%2C%20BS31%201QY&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full border-0 sm:h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}

