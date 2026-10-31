"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Button } from "@/components/ui/button";
import type { HeroSlide } from "@/components/data/site-data";
import "swiper/css";

export interface HeroProps {
  slides: HeroSlide[];
}

export function Hero({ slides }: HeroProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section id="home" className="px-4 pt-5 sm:px-6 lg:px-10 lg:pt-7">
      <div className="relative mx-auto max-w-[1440px]">
        <Swiper
          modules={[Autoplay, A11y]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          speed={650}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          className="hero-swiper h-[290px] min-h-[280px] rounded-2xl shadow-md sm:h-[320px] lg:h-[350px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.title}-${index}`} className="overflow-hidden rounded-2xl">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl bg-[#333333]">
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/90 via-[#171717]/45 to-transparent" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" /> */}

                <div className="relative flex h-full min-h-[280px] flex-col justify-center px-6 py-5 text-white sm:px-10 lg:px-14">
                  <h1 className="max-w-[700px] whitespace-pre-line text-[26px] leading-[1.12] tracking-[-0.035em] sm:text-[34px] lg:text-[40px]">
                    {slide.title}
                  </h1>

                  <p className="mt-2.5 max-w-[460px] text-[13px] leading-snug text-white/85 sm:text-[14px] sm:leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Button
                      as="a"
                      href="#products"
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowRight size={14} />}
                    >
                      Explore products
                    </Button>
                    <Button
                      as="a"
                      href="#contact"
                      variant="tertiary"
                      size="sm"
                      rightIcon={<ArrowUpRight size={14} />}
                    >
                      Request an enquiry
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider controls */}
        <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2 sm:bottom-8 sm:right-8">
          <span className="mr-3 text-[13px] tabular-nums text-white">
            <span className="text-white">
              {String(slideIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/50">/</span>
            {String(slides.length).padStart(2, "0")}
          </span>
          <Button
            variant="dark"
            size="icon"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft size={19} />
          </Button>
          <Button
            variant="dark"
            size="icon"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight size={19} />
          </Button>
        </div>
      </div>
    </section>
  );
}

