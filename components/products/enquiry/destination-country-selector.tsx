"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { Country } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import { CountryFlag } from "@/components/ui/country-flag";

export interface CountryItem {
  code: Country;
  name: string;
  callingCode: string;
}

export interface DestinationCountrySelectorProps {
  destinationCountry: Country;
  priorityCountries: CountryItem[];
  allCountries: CountryItem[];
  onSelectCountry: (country: Country) => void;
}

export function DestinationCountrySelector({
  destinationCountry,
  priorityCountries,
  allCountries,
  onSelectCountry,
}: DestinationCountrySelectorProps) {
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
          c.code.toLowerCase().includes(q)
      ),
    };
  }, [search, priorityCountries, allCountries]);

  const activeName = (en as Record<string, string>)[destinationCountry] || destinationCountry;

  return (
    <div ref={dropdownRef} className="relative">
      <label className="block text-[12.5px] font-bold text-[#171717]">
        Destination Country <span className="text-[#ff0000]">*</span>
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`mt-2 flex h-12 w-full items-center justify-between rounded-xl border bg-white px-3.5 shadow-xs transition ${
          isOpen
            ? "border-[#0066cc] ring-2 ring-[#0066cc]/15"
            : "border-black/15 hover:border-black/30"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <CountryFlag country={destinationCountry} className="h-4 w-5.5" />
          <span className="truncate text-[14px] font-medium text-[#171717]">
            {activeName} ({destinationCountry})
          </span>
        </div>
        <ChevronDown size={16} className="text-[#737373]" />
      </button>

      {/* Dropdown matching reference image */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-72 w-full overflow-hidden rounded-xl border border-black/15 bg-white shadow-xl">
          <div className="border-b border-black/10 p-2">
            <div className="flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-2.5 py-1.5 text-xs text-[#555]">
              <Search size={14} className="text-[#888]" />
              <input
                type="text"
                placeholder="Search destination country..."
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
                {filtered.priority.map((c) => {
                  const isSelected = c.code === destinationCountry;
                  return (
                    <button
                      key={`dp-${c.code}`}
                      type="button"
                      onClick={() => {
                        onSelectCountry(c.code);
                        setIsOpen(false);
                        setSearch("");
                      }}
                      className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-[14px] transition ${
                        isSelected
                          ? "bg-[#1976d2] font-semibold text-white"
                          : "text-[#171717] hover:bg-black/5"
                      }`}
                    >
                      <CountryFlag country={c.code} className="h-4 w-5.5" />
                      <span className="truncate">
                        {c.name} ({c.code})
                      </span>
                    </button>
                  );
                })}
                <div className="my-1 border-t border-black/10" />
              </>
            )}

            {filtered.rest.map((c) => {
              const isSelected = c.code === destinationCountry;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    onSelectCountry(c.code);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-[14px] transition ${
                    isSelected
                      ? "bg-[#1976d2] font-semibold text-white"
                      : "text-[#171717] hover:bg-black/5"
                  }`}
                >
                  <CountryFlag country={c.code} className="h-4 w-5.5" />
                  <span className="truncate">
                    {c.name} ({c.code})
                  </span>
                </button>
              );
            })}

            {filtered.rest.length === 0 && (
              <div className="px-3 py-4 text-center text-xs text-[#888]">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

