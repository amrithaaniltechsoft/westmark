import React from "react";

interface CountryFlagProps {
  country?: string;
  className?: string;
  title?: string;
}

export function CountryFlag({ country, className = "", title }: CountryFlagProps) {
  if (!country) {
    return <span className="inline-block text-xs">🌐</span>;
  }

  const code = country.toLowerCase();

  return (
    <span
      className={`fi fi-${code} shrink-0 rounded-xs shadow-xs ${className}`}
      title={title || country.toUpperCase()}
      aria-hidden="true"
    />
  );
}
