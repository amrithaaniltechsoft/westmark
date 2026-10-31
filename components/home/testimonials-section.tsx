"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, User } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Testimonial } from "@/components/data/site-data";

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section id="testimonials" className="scroll-mt-36 bg-[#f4f5f7] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Edge: Section Header & Descriptions */}
          <div className="lg:col-span-4 lg:pr-6">
            <Eyebrow>PARTNERSHIP MATTERS</Eyebrow>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[32px]">
              Built on clear communication.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#3f3f3f]">
              Good trade relationships start with clear expectations, reliable
              follow-up and an understanding of each order across global markets.
            </p>

            {/* Carousel External Navigation Controls */}
            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous testimonials"
                className="flex size-10 cursor-pointer items-center justify-center rounded-xl border border-black/10 bg-white text-[#171717] shadow-xs transition hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white active:scale-95"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next testimonials"
                className="flex size-10 cursor-pointer items-center justify-center rounded-xl border border-black/10 bg-white text-[#171717] shadow-xs transition hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-white active:scale-95"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Right Side: Continuous 2-Card Swiper Carousel */}
          <div className="min-w-0 lg:col-span-8">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
              }}
              className="!pb-3"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-black/[0.07] bg-white p-7 sm:p-8 lg:p-9">
                    <div>
                      {/* Top profile badge and decorative quote */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center rounded-full bg-[#fff0f0] text-[#ff0000] shadow-2xs">
                          <User size={21} strokeWidth={2} />
                        </div>
                        <Quote className="size-6 text-black/15" />
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="mt-6 text-[15px] font-medium leading-7 text-[#171717] sm:text-[24px] sm:leading-8">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Author Details */}
                    <div className="mt-8 border-t border-black/[0.08] pt-5">
                      <p className="font-bold text-[#171717]">{testimonial.name}</p>
                      <p className="mt-1 text-[13px] font-medium text-[#737373]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
