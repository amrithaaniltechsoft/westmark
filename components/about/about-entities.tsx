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
    <section className="bg-[#faf9f7] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <Eyebrow>OUR INDUSTRIAL FOOTPRINT</Eyebrow>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[#171717] sm:text-[34px]">
            Strong foundations through our partner businesses in India.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {entities.map((entity) => (
            <div
              key={entity.title}
              className="rounded-2xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#171717] text-white">
                <entity.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#171717]">
                {entity.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#555555]">
                {entity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

