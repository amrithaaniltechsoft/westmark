"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProductFaqAccordionProps {
  faqs: FaqItem[];
}

export function ProductFaqAccordion({ faqs }: ProductFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default

  return (
    <div className="mt-6">
      <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#171717]">
        Frequently Asked Questions
      </h2>

      <div className="mt-3 divide-y divide-black/[0.08] rounded-xl border border-black/[0.08] bg-[#faf9f7]/50">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div key={faq.q} className="overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-black/[0.02]"
              >
                <span className="text-[13.5px] font-semibold text-[#171717] sm:text-[14px]">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-[#737373] transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#ff0000]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-[13px] leading-relaxed text-[#555555]">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

