import { Building2, Factory, Mountain, Truck } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

const entities = [
  {
    icon: Building2,
    title: "Layrock Developers Pvt Ltd",
    description:
      "Commercial and residential infrastructure development with quality construction practices.",
  },
  {
    icon: Truck,
    title: "Supermix Concrete",
    description:
      "Ready-mix concrete manufacturing delivering engineered batches for commercial sites.",
  },
  {
    icon: Mountain,
    title: "Kakkara Crushers Pvt Ltd",
    description:
      "Aggregate production and stone crushing facilities producing quality road and construction ballast.",
  },
  {
    icon: Factory,
    title: "Layrock AAC Pvt Ltd",
    description:
      "Modern autoclaved aerated concrete manufacturing offering lightweight, thermally insulated building blocks.",
  },
];

export function AboutEntities() {
  return (
    <section className="bg-[#faf9f7] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <Eyebrow>OUR INDUSTRIAL FOOTPRINT</Eyebrow>
          <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[30px] lg:text-[34px]">
            Strong foundations through our partner businesses in India.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {entities.map((entity) => (
            <div
              key={entity.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 transition hover:-translate-y-1 hover:shadow-md sm:block sm:p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-white sm:size-12">
                <entity.icon size={22} />
              </div>
              <div className="min-w-0 flex-1 sm:mt-5">
                <h3 className="text-base font-bold text-[#171717] sm:text-xl">
                  {entity.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#555555] sm:mt-2 sm:text-sm sm:leading-6">
                  {entity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
