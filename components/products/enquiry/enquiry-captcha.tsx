import { RefreshCw } from "lucide-react";

export interface EnquiryCaptchaProps {
  currentCaptcha: string;
  captchaInput: string;
  captchaError?: string;
  onRefreshCaptcha: () => void;
  onCaptchaChange: (val: string) => void;
}

export function EnquiryCaptcha({
  currentCaptcha,
  captchaInput,
  captchaError,
  onRefreshCaptcha,
  onCaptchaChange,
}: EnquiryCaptchaProps) {
  return (
    <div className="rounded-xl border border-black/15 bg-[#fafafa] p-4">
      <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#171717]">
        Security Verification <span className="text-[#ff0000]">*</span>
      </label>

      <div className="mt-3 flex items-center gap-3">
        {/* Captcha display box */}
        <div className="flex h-11 w-28 select-none items-center justify-center rounded-lg bg-[#0d1b2a] font-mono text-[20px] font-black tracking-[0.25em] text-[#ffdd00] shadow-inner">
          {currentCaptcha}
        </div>

        <button
          type="button"
          onClick={onRefreshCaptcha}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0066cc] underline hover:text-[#ff0000]"
        >
          <RefreshCw size={13} />
          <span>Refresh Code</span>
        </button>
      </div>

      <input
        type="text"
        required
        placeholder="Enter the code shown above"
        value={captchaInput}
        onChange={(e) => onCaptchaChange(e.target.value)}
        className="mt-3 h-11 w-full rounded-xl border border-black/15 bg-white px-4 text-[14px] text-[#171717] placeholder-[#a3a3a3] shadow-xs outline-none transition focus:border-[#ff0000] focus:ring-2 focus:ring-[#ff0000]/10"
      />
      {captchaError && (
        <p className="mt-1.5 text-[12px] font-semibold text-[#ff0000]">
          {captchaError}
        </p>
      )}
    </div>
  );
}

