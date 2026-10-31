"use client";

import { useState } from "react";
import { Send, Minus, Plus, ChevronDown } from "lucide-react";
import type { Country } from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import { DestinationCountrySelector, type CountryItem } from "@/components/products/enquiry/destination-country-selector";
import { PhoneCountryInput } from "@/components/products/enquiry/phone-country-input";
import { EnquiryCaptcha } from "@/components/products/enquiry/enquiry-captcha";

export interface EnquiryFormData {
  quantity: number;
  shippingUnit: string;
  fullName: string;
  workEmail: string;
  phoneCountry: Country;
  phoneNumber: string;
  companyName: string;
  destinationCountry: Country;
  incoterm: string;
  deliveryAddress: string;
  specialRequirements: string;
}

export interface EnquiryFormProps {
  priorityCountries: CountryItem[];
  allCountries: CountryItem[];
  isSubmitting: boolean;
  onSubmit: (data: EnquiryFormData) => void;
}

const SHIPPING_UNITS = [
  "Metric Tons (MT)",
  "Full Container Load (20ft FCL)",
  "Full Container Load (40ft FCL)",
  "Kilograms (KG)",
  "Pieces / Bundles",
  "Pallets",
];

const INCOTERMS = [
  "FOB (Free On Board - Indian Port)",
  "CIF (Cost, Insurance & Freight)",
  "CFR (Cost & Freight)",
  "EXW (Ex Works - Manufacturer Facility)",
  "DAP (Delivered at Place)",
];

const CAPTCHA_SAMPLES = ["ASB3", "7K9P", "W4R2", "X8Q9", "M3T7", "L6Y9"];

export function EnquiryForm({
  priorityCountries,
  allCountries,
  isSubmitting,
  onSubmit,
}: EnquiryFormProps) {
  const [quantity, setQuantity] = useState<number>(10);
  const [shippingUnit, setShippingUnit] = useState<string>(SHIPPING_UNITS[0]);
  const [fullName, setFullName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");

  // Independent country selectors
  const [phoneCountry, setPhoneCountry] = useState<Country>("AE");
  const [phoneNumber, setPhoneNumber] = useState<string>("50 123 4567");
  const [destinationCountry, setDestinationCountry] = useState<Country>("AE");

  const [companyName, setCompanyName] = useState<string>("");
  const [incoterm, setIncoterm] = useState<string>(INCOTERMS[0]);
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [specialRequirements, setSpecialRequirements] = useState<string>("");

  // Captcha
  const [captchaIndex, setCaptchaIndex] = useState<number>(0);
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string>("");

  const currentCaptcha = CAPTCHA_SAMPLES[captchaIndex];

  const handleRefreshCaptcha = () => {
    setCaptchaIndex((prev) => (prev + 1) % CAPTCHA_SAMPLES.length);
    setCaptchaInput("");
    setCaptchaError("");
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const phoneCallingCode =
    allCountries.find((c) => c.code === phoneCountry)?.callingCode || "+971";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaInput.trim().toUpperCase() !== currentCaptcha) {
      setCaptchaError("Incorrect security verification code. Please try again.");
      return;
    }

    setCaptchaError("");
    onSubmit({
      quantity,
      shippingUnit,
      fullName,
      workEmail,
      phoneCountry,
      phoneNumber,
      companyName,
      destinationCountry,
      incoterm,
      deliveryAddress,
      specialRequirements,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      {/* Row 1: Target Quantity & Shipping Unit */}
      <div>
        <label className="block text-[12.5px] font-bold text-[#171717]">
          Target Quantity & Shipping Unit <span className="text-[#ff0000]">*</span>
        </label>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Stepper Input */}
          <div className="flex h-12 items-center rounded-xl border border-black/15 bg-white px-2 shadow-xs focus-within:border-[#ff0000] focus-within:ring-2 focus-within:ring-[#ff0000]/10">
            <button
              type="button"
              onClick={handleDecreaseQuantity}
              aria-label="Decrease quantity"
              className="flex size-8 items-center justify-center rounded-lg text-[#555] transition hover:bg-black/5 hover:text-[#171717]"
            >
              <Minus size={15} />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-center text-[15px] font-bold text-[#171717] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              required
            />
            <button
              type="button"
              onClick={handleIncreaseQuantity}
              aria-label="Increase quantity"
              className="flex size-8 items-center justify-center rounded-lg text-[#555] transition hover:bg-black/5 hover:text-[#171717]"
            >
              <Plus size={15} />
            </button>
          </div>

          {/* Unit Select */}
          <div className="relative">
            <select
              value={shippingUnit}
              onChange={(e) => setShippingUnit(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-black/15 bg-white px-4 pr-10 text-[14px] font-medium text-[#171717] shadow-xs outline-none focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
            >
              {SHIPPING_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-[#737373]">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Full Name & Work Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-[12.5px] font-bold text-[#171717]">
            Full Name <span className="text-[#ff0000]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Robert Vance"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
          />
        </div>

        <div>
          <label className="block text-[12.5px] font-bold text-[#171717]">
            Work Email <span className="text-[#ff0000]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
          />
        </div>
      </div>

      {/* Row 3: Phone / WhatsApp & Company Name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <PhoneCountryInput
          selectedCountry={phoneCountry}
          callingCode={phoneCallingCode}
          phoneNumber={phoneNumber}
          priorityCountries={priorityCountries}
          allCountries={allCountries}
          onSelectCountry={setPhoneCountry}
          onPhoneChange={setPhoneNumber}
        />

        <div>
          <label className="block text-[12.5px] font-bold text-[#171717]">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Company / Import Business"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
          />
        </div>
      </div>

      {/* Row 4: Destination Country & Incoterm / Delivery Terms */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <DestinationCountrySelector
          destinationCountry={destinationCountry}
          priorityCountries={priorityCountries}
          allCountries={allCountries}
          onSelectCountry={setDestinationCountry}
        />

        <div>
          <label className="block text-[12.5px] font-bold text-[#171717]">
            Incoterm & Delivery Terms
          </label>
          <div className="relative mt-2">
            <select
              value={incoterm}
              onChange={(e) => setIncoterm(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-black/15 bg-white px-4 pr-10 text-[14px] font-medium text-[#171717] shadow-xs outline-none focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
            >
              {INCOTERMS.map((term) => (
                <option key={term} value={term}>
                  {term}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-[#737373]">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 5: Full Delivery Address / Import Facility Location */}
      <div>
        <label className="block text-[12.5px] font-bold text-[#171717]">
          Full Delivery Address / Import Facility Location
        </label>
        <textarea
          rows={2}
          placeholder="Street address, city, state/province, postal code, warehouse port details..."
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          className="mt-2 w-full rounded-xl border border-black/15 bg-white p-3.5 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
        />
      </div>

      {/* Row 6: Special Requirements / Packing Notes */}
      <div>
        <label className="block text-[12.5px] font-bold text-[#171717]">
          Special Requirements / Packing Notes
        </label>
        <textarea
          rows={2}
          placeholder="Specify grain moisture %, custom branding/packaging, target delivery date..."
          value={specialRequirements}
          onChange={(e) => setSpecialRequirements(e.target.value)}
          className="mt-2 w-full rounded-xl border border-black/15 bg-white p-3.5 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          as="button"
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          rightIcon={<Send size={16} />}
          className="rounded-xl uppercase tracking-wider shadow-md"
        >
          Submit Export Enquiry
        </Button>
      </div>
    </form>
  );
}

