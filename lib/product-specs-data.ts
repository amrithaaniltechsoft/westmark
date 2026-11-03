import type { Product } from "@/components/data/site-data";

export interface CategorySpecs {
  spec: string;
  origin: string;
  packing: string;
}

export function getSpecsForCategory(product: Product): CategorySpecs {
  switch (product.category) {
    case "Aluminium Products & Extrusions":
      return {
        spec: "6063 / 6082 Alloy, T5/T6 Temper, Anodized / Powder Coated",
        origin: "Audited Mills, India / Global",
        packing: "Custom lengths, Protective film & Wooden crates",
      };
    case "Non-ferrous metals":
      return {
        spec: "Structural Grade (S275 / S355 / SS304 / SS316)",
        origin: "Certified Steel Foundries",
        packing: "Standard bundles, Sea-worthy bulk containerized",
      };
    case "Plastics (HDPE & Others)":
      return {
        spec: "Virgin & Recycled Granules, MFI: 0.1 – 20 g/10min",
        origin: "Petrochemical Producers, India / Asia",
        packing: "25kg PP bags, 1 MT Jumbo Palletized bags",
      };
    case "AAC Blocks":
      return {
        spec: "Density: 550–650 kg/m³, Compressive: 3.5–4.5 N/mm²",
        origin: "Layrock AAC Pvt Ltd & Partners",
        packing: "Shrink-wrapped pallets, Export container ready",
      };
    case "Spices":
      return {
        spec: "Export Grade Whole & Ground, Moisture < 10%, Agmark Certified",
        origin: "Kerala / Andhra / Gujarat, India",
        packing: "10kg, 25kg, 50kg Food-grade Jute / HDPE woven bags",
      };
    default:
      return {
        spec: "Commercial Grade Export Standard, ISO 9001 Compliant",
        origin: "Verified Partner Facilities",
        packing: "Standard Export Packaging / Containerized",
      };
  }
}

