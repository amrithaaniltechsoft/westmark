import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slugify } from "@/components/data/site-data";

export interface EnquirySuccessViewProps {
  fullName: string;
  productName: string;
  quantity: number;
  shippingUnit: string;
  workEmail: string;
  onReset: () => void;
}

export function EnquirySuccessView({
  fullName,
  productName,
  quantity,
  shippingUnit,
  workEmail,
  onReset,
}: EnquirySuccessViewProps) {
  const productSlug = slugify(productName);

  return (
    <div className="py-12 text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#ff0000]/10 text-[#ff0000]">
        <CheckCircle2 size={36} />
      </div>
      <h3 className="mt-5 text-[22px] font-bold text-[#171717]">
        Enquiry Received Successfully!
      </h3>
      <p className="mx-auto mt-2 max-w-md text-[14px] text-[#555]">
        Thank you, <span className="font-bold text-[#171717]">{fullName}</span>. Our export desk has logged your request for{" "}
        <span className="font-bold text-[#171717]">{productName}</span> ({quantity} {shippingUnit}). A trade representative will contact you at{" "}
        <span className="font-bold text-[#171717]">{workEmail}</span> within 24 business hours.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          as="button"
          type="button"
          variant="primary"
          onClick={onReset}
        >
          Submit Another Enquiry
        </Button>
        <Button
          as="a"
          href={`/products/${productSlug}`}
          variant="outline"
        >
          Return to Product Page
        </Button>
      </div>
    </div>
  );
}

