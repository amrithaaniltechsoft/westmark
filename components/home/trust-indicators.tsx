import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const trustIndicators = [
  {
    image: "/trust-section/Verified suppliers.png",
    title: "Verified suppliers",
    description:
      "Build connections with suppliers whose credentials and capabilities can be checked.",
  },
  {
    image: "/trust-section/Order protection.png",
    title: "Order protection",
    description:
      "Clear order terms and communication from enquiry through fulfilment.",
  },
  {
    image: "/trust-section/Factory-direct pricing.png",
    title: "Factory-direct pricing",
    description:
      "Explore sourcing opportunities for wholesale and commercial requirements.",
  },
  {
    image: "/trust-section/Global trade support.png",
    title: "Global trade support",
    description:
      "One point of contact for sourcing across multiple product categories.",
  },
];

export function TrustIndicators() {
  return (
    <section className="px-3.5 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
        {trustIndicators.map((item, index) => (
          <ScrollReveal
            key={item.title}
            variant="fade-up"
            delayMs={index * 80}
            className={`flex items-center gap-3.5 py-3.5 sm:px-5 lg:px-7 ${index !== 0 ? "border-t border-black/[0.08] sm:border-t-0" : ""
              } ${index % 2 !== 0 ? "sm:border-l sm:border-black/[0.08]" : ""} ${index >= 2 ? "sm:border-t sm:border-black/[0.08] lg:border-t-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-black/[0.08]" : ""}`}
          >
            <div className="relative size-14 shrink-0 overflow-hidden rounded-xl sm:size-16 lg:size-20">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h2 className="text-[14px] font-bold text-[#171717] sm:text-[15px]">{item.title}</h2>
              <p className="mt-0.5 text-[12.5px] leading-snug text-[#4a4a4a] sm:mt-1 sm:text-[13px] sm:leading-5">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
