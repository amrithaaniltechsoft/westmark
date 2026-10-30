"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { PHONE_NUMBER } from "@/components/data/site-data";

export function WhatsAppIsland() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // 1. Hide in hero section
      const heroElement = document.getElementById("home");
      const heroBottom = heroElement
        ? heroElement.offsetTop + heroElement.offsetHeight
        : 350;

      const currentScrollY = window.scrollY;

      if (currentScrollY < heroBottom - 80) {
        setIsVisible(false);
        return;
      }

      // 2. Hide when reaching the footer
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight - 30) {
          setIsVisible(false);
          return;
        }
      }

      setIsVisible(true);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const cleanPhone = PHONE_NUMBER.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Layrock Global Trading LTD, I would like to make an enquiry regarding products and sourcing."
  )}`;

  return (
    <div
      className={`fixed bottom-7 right-6 z-50 transition-all duration-300 ease-out sm:bottom-8 sm:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Layrock Global Trading on WhatsApp"
        className="group flex size-14 items-center justify-center rounded-full border border-black/15 bg-[#128C7E] text-white shadow-[0_12px_36px_rgba(0,0,0,0.32)] transition-all duration-200 hover:bg-[#075E54] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:scale-110 active:scale-95"
      >
        {/* Official WhatsApp Icon */}
        <FaWhatsapp className="size-7 text-white drop-shadow-sm transition-transform duration-200 group-hover:scale-105" />
      </a>
    </div>
  );
}
