import React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  slashClassName?: string;
  textClassName?: string;
}

export function Eyebrow({
  children,
  className = "",
  slashClassName = "text-[#ff0000]",
  textClassName = "text-[#4a4a4a]",
}: EyebrowProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`font-mono text-[14px] font-black italic tracking-tighter ${slashClassName}`}
      >
        //
      </span>
      <span
        className={`text-[12px] font-bold uppercase tracking-[0.08em] ${textClassName}`}
      >
        {children}
      </span>
    </div>
  );
}
