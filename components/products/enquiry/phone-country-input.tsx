"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { Country } from "react-phone-number-input";
import { CountryFlag } from "@/components/ui/country-flag";
import type { CountryItem } from "@/components/products/enquiry/destination-country-selector";

export interface PhoneCountryInputProps {
  selectedCountry: Country;
  callingCode: string;
  phoneNumber: string;
  priorityCountries: CountryItem[];
  allCountries: CountryItem[];
  onSelectCountry: (country: Country) => void;
  onPhoneChange: (val: string) => void;
}

export function PhoneCountryInput({
  selectedCountry,
  callingCode,
  phoneNumber,
  priorityCountries,
  allCountries,
  onSelectCountry,
  onPhoneChange,
}: PhoneCountryInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) {
      return { priority: priorityCountries, rest: allCountries };
    }
    const q = search.toLowerCase();
    return {
      priority: [],
      rest: allCountries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.callingCode.includes(q)
      ),
    };
  }, [search, priorityCountries, allCountries]);

  return (
    <div>
      <label className="block text-[12.5px] font-bold text-[#171717]">
        Phone / WhatsApp <span className="text-[#ff0000]">*</span>
      </label>
      <div className="relative mt-2 flex h-12 rounded-xl border border-black/15 bg-white shadow-xs focus-within:border-[#ff0000] focus-within:ring-2 focus-within:ring-[#ff0000]/10">
        {/* Country Flag & Dial Code Trigger */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-full items-center gap-1.5 border-r border-black/10 px-3"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <CountryFlag country={selectedCountry} className="h-4 w-5" />
            <span className="text-[13px] font-semibold text-[#171717]">
              {callingCode}
            </span>
            <ChevronDown size={14} className="text-[#737373]" />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 max-h-72 w-72 overflow-hidden rounded-xl border border-black/15 bg-white shadow-xl">
              <div className="border-b border-black/10 p-2">
                <div className="flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-2.5 py-1.5 text-xs text-[#555]">
                  <Search size={14} className="text-[#888]" />
                  <input
                    type="text"
                    placeholder="Search country or code..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent outline-none text-[#171717]"
                    autoFocus
                  />
                </div>
              </div>

              <div className="max-h-56 overflow-y-auto py-1">
                {filtered.priority.length > 0 && (
                  <>
                    {filtered.priority.map((c) => (
                      <button
                        key={`p-${c.code}`}
                        type="button"
                        onClick={() => {
                          onSelectCountry(c.code);
                          setIsOpen(false);
                          setSearch("");
                        }}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] transition hover:bg-[#ff0000]/5 ${c.code === selectedCountry
                          ? "bg-[#ff0000]/10 font-bold text-[#ff0000]"
                          : "text-[#171717]"
                          }`}
                      >
                        <CountryFlag country={c.code} className="h-3.5 w-5" />
                        <span className="truncate flex-1">{c.name}</span>
                        <span className="text-xs text-[#737373]">{c.callingCode}</span>
                      </button>
                    ))}
                    <div className="my-1 border-t border-black/10" />
                  </>
                )}

                {filtered.rest.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      onSelectCountry(c.code);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] transition hover:bg-[#ff0000]/5 ${c.code === selectedCountry
                      ? "bg-[#ff0000]/10 font-bold text-[#ff0000]"
                      : "text-[#171717]"
                      }`}
                  >
                    <CountryFlag country={c.code} className="h-3.5 w-5" />
                    <span className="truncate flex-1">{c.name}</span>
                    <span className="text-xs text-[#737373]">{c.callingCode}</span>
                  </button>
                ))}

                {filtered.rest.length === 0 && (
                  <div className="px-3 py-4 text-center text-xs text-[#888]">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone input */}
        <input
          type="tel"
          required
          placeholder="50 123 4567"
          value={phoneNumber}
          onChange={(e) => onPhoneChange(e.target.value)}
          className="w-full px-3 text-[14px] text-[#171717] placeholder-[#a3a3a3] outline-none"
        />
      </div>
    </div>
  );
}

