"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/components/data/site-data";

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section id="testimonials" className="scroll-mt-36 bg-[#f4f5f7] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow">PARTNERSHIP MATTERS</p>
            <h2 className="mt-3 text-[34px] font-bold tracking-[-0.04em] text-[#171717] sm:text-[44px]">
              Built on clear communication.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#3f3f3f]">
              Good trade relationships start with clear expectations,
              reliable follow-up and an understanding of each order.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.07] bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#ff0000]">
                PARTNER PERSPECTIVES
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (index) =>
                        (index - 1 + testimonials.length) % testimonials.length
                    )
                  }
                >
                  <ArrowLeft size={17} />
                </Button>
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (index) => (index + 1) % testimonials.length
                    )
                  }
                >
                  <ArrowRight size={17} />
                </Button>
              </div>
            </div>
            <div aria-live="polite" className="min-h-[200px]">
              <div className="mt-8 text-[38px] leading-none text-[#ff0000]">
                “
              </div>
              <blockquote className="mt-3 text-[20px] font-medium leading-8 tracking-[-0.02em] text-[#171717] sm:text-[25px] sm:leading-9">
                {testimonials[testimonialIndex].quote}
              </blockquote>
              <div className="mt-8 border-t border-black/[0.08] pt-5">
                <p className="text-[15px] font-bold text-[#171717]">
                  {testimonials[testimonialIndex].name}
                </p>
                <p className="mt-1 text-[13px] font-medium text-[#4f4f4f]">
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

