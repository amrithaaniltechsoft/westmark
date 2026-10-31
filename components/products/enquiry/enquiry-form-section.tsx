"use client";

import { useMemo, useState } from "react";
import { getCountries, getCountryCallingCode, type Country } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

import type { Product } from "@/components/data/site-data";
import { EnquiryForm, type EnquiryFormData } from "@/components/products/enquiry/enquiry-form";
import { EnquirySuccessView } from "@/components/products/enquiry/enquiry-success-view";
import type { CountryItem } from "@/components/products/enquiry/destination-country-selector";

export interface EnquiryFormSectionProps {
  product: Product;
}

const PRIORITY_CODES: Country[] = [
  "AE",
  "SA",
  "US",
  "GB",
  "DE",
  "NL",
  "SG",
  "QA",
  "OM",
  "KW",
  "IN",
];

export function EnquiryFormSection({ product }: EnquiryFormSectionProps) {
  // Build unified country data
  const { allCountries, priorityCountries } = useMemo(() => {
    const rawCountries = getCountries();
    const mapped: CountryItem[] = rawCountries.map((code) => {
      const countryName = (en as Record<string, string>)[code] || code;
      let callingCode = "";
      try {
        callingCode = getCountryCallingCode(code);
      } catch {
        callingCode = "";
      }
      return {
        code,
        name: countryName,
        callingCode: callingCode ? `+${callingCode}` : "",
      };
    });

    const priority: CountryItem[] = PRIORITY_CODES.map((code) => {
      const item = mapped.find((c) => c.code === code);
      return (
        item || {
          code,
          name: (en as Record<string, string>)[code] || code,
          callingCode: `+${getCountryCallingCode(code)}`,
        }
      );
    });

    const sortedAll = [...mapped].sort((a, b) => a.name.localeCompare(b.name));

    return { allCountries: sortedAll, priorityCountries: priority };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  const handleFormSubmit = (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm sm:p-9 lg:p-10">
      <div className="border-b border-black/[0.08] pb-5">
        <h1 className="text-[24px] font-bold tracking-tight text-[#171717] sm:text-[28px]">
          Request Quotation & Spec Sheet
        </h1>
      </div>

      {submittedData ? (
        <EnquirySuccessView
          fullName={submittedData.fullName}
          productName={product.name}
          quantity={submittedData.quantity}
          shippingUnit={submittedData.shippingUnit}
          workEmail={submittedData.workEmail}
          onReset={handleReset}
        />
      ) : (
        <EnquiryForm
          priorityCountries={priorityCountries}
          allCountries={allCountries}
          isSubmitting={isSubmitting}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

