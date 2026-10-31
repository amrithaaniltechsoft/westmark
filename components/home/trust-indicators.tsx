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
    <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndicators.map((item, index) => (
          <ScrollReveal
            key={item.title}
            variant="fade-up"
            delayMs={index * 80}
            className={`flex items-center gap-4 py-4 sm:px-6 lg:px-7 ${
              index !== 0 ? "border-t border-black/[0.08] sm:border-t-0" : ""
            } ${index !== 0 ? "sm:border-l sm:border-black/[0.08]" : ""}`}
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl sm:size-20">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h2 className="text-[15px] font-bold text-[#171717]">{item.title}</h2>
              <p className="mt-1 text-[13px] leading-5 text-[#4a4a4a]">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
