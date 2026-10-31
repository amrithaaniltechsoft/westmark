"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, Check } from "lucide-react";
import { slugify } from "@/lib/slugify";

export interface EnquirySuccessModalProps {
  isOpen: boolean;
  fullName: string;
  productName: string;
  quantity: number;
  shippingUnit: string;
  workEmail: string;
  onClose: () => void;
}

export function EnquirySuccessModal({
  isOpen,
  fullName,
  productName,
  quantity,
  shippingUnit,
  workEmail,
  onClose,
}: EnquirySuccessModalProps) {
  const [mounted, setMounted] = useState(false);
  const productSlug = slugify(productName);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key press and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Card - Clean, open, unboxed */}
      <div className="relative z-10 w-full max-w-[460px] rounded-3xl bg-white p-7 shadow-2xl sm:p-9 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-black/40 transition hover:bg-black/5 hover:text-black cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Animated Success Icon - Green theme with subtle pulse */}
          <div className="relative mb-5 flex size-18 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-20 duration-1000" />
            <div className="relative flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
              <Check size={32} strokeWidth={2.8} className="animate-in zoom-in-50 duration-300" />
            </div>
          </div>

          <h3 className="text-[22px] font-bold tracking-tight text-[#171717]">
            Enquiry Received!
          </h3>

          {/* Clean, readable copy (no box, no red) */}
          <p className="mt-3 text-[14.5px] leading-relaxed text-[#4a4a4a]">
            Thank you, <strong className="font-semibold text-[#171717]">{fullName}</strong>. We have received your export inquiry for{" "}
            <strong className="font-semibold text-[#171717]">{productName}</strong>.
          </p>

          <p className="mt-2 text-[13.5px] leading-relaxed text-[#666]">
            Our trade desk will prepare your quotation for{" "}
            <span className="font-semibold text-[#171717]">{quantity} {shippingUnit}</span> and send full specifications to{" "}
            <span className="font-semibold text-[#171717]">{workEmail}</span> within 24 business hours.
          </p>

          {/* Action Buttons - Neutral charcoal/slate and outline (no red) */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 flex-1 items-center justify-center rounded-xl bg-[#ff0000] px-5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#333] active:scale-[0.99] cursor-pointer"
            >
              Done
            </button>
            <a
              href={`/products/${productSlug}`}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-black/15 bg-white px-5 text-[14px] font-semibold text-[#171717] shadow-xs transition hover:bg-black/5 active:scale-[0.99]"
            >
              <span>Product Details</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
