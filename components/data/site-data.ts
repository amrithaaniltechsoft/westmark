import { Globe2, PackageCheck, ShieldCheck, Truck } from "lucide-react";

export interface Category {
  name: string;
  short?: string;
  count: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tag: string;
  number: string;
}

export interface Service {
  number: string;
  icon: typeof Globe2;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  label: string;
}

export const EMAIL_ADDRESS = "info@example.com";
export const PHONE_NUMBER = "+44 0000 000000";

export const CATEGORIES: Category[] = [
  {
    name: "All products",
    count: "Featured selection",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Aluminium Products & Extrusions",
    short: "Aluminium products",
    count: "Extrusions & profiles",
    image:
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Metal Products",
    short: "Metal products",
    count: "Steel & alloys",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Plastics (HDPE & Others)",
    short: "Plastics (HDPE)",
    count: "Industrial polymers",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "AAC Blocks",
    short: "AAC blocks",
    count: "Construction materials",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Spices",
    short: "Spices",
    count: "Natural ingredients",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=85",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Aluminium Profiles & Extruded Sections",
    category: "Aluminium Products & Extrusions",
    description:
      "High-grade architectural, commercial and industrial aluminium extrusions engineered to precision.",
    image:
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=85",
    tag: "Aluminium supply",
    number: "01",
  },
  {
    id: 2,
    name: "Industrial Metal & Steel Products",
    category: "Metal Products",
    description:
      "Dependable metal and structural steel sourcing for industrial, fabrication and infrastructure requirements.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
    tag: "Industrial supply",
    number: "02",
  },
  {
    id: 3,
    name: "HDPE & Polymer Raw Materials",
    category: "Plastics (HDPE & Others)",
    description:
      "High-density polyethylene and versatile polymer resins for manufacturing, blow moulding and packaging.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
    tag: "Polymer solutions",
    number: "03",
  },
  {
    id: 4,
    name: "Autoclaved Aerated Concrete Blocks",
    category: "AAC Blocks",
    description:
      "Lightweight, thermal-efficient AAC blocks for modern building, residential and commercial projects.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    tag: "Building materials",
    number: "04",
  },
  {
    id: 5,
    name: "Premium Export Quality Spices",
    category: "Spices",
    description:
      "Carefully sourced whole and ground aromatic spices for wholesale, food processing and global distribution.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
    tag: "Natural ingredients",
    number: "05",
  },
  {
    id: 6,
    name: "Aluminium Sheets, Plates & Coils",
    category: "Aluminium Products & Extrusions",
    description:
      "Corrosion-resistant aluminium rolled sheet and coil stock suitable for cladding, roofing and manufacturing.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
    tag: "Rolled aluminium",
    number: "06",
  },
  {
    id: 7,
    name: "Architectural Aluminium Window & Door Systems",
    category: "Aluminium Products & Extrusions",
    description:
      "Thermal-break structural aluminium frame extrusions and hardware systems for commercial façades.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    tag: "Façade systems",
    number: "07",
  },
  {
    id: 8,
    name: "Structural Carbon Steel Beams & Rebar",
    category: "Metal Products",
    description:
      "Hot-rolled I-beams, H-channels, angle iron and reinforcement steel bars for heavy construction projects.",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85",
    tag: "Structural steel",
    number: "08",
  },
  {
    id: 9,
    name: "Stainless Steel Pipes & Tube Fittings",
    category: "Metal Products",
    description:
      "Seamless and welded stainless steel tubing (grades 304/316) for industrial fluid handling and engineering.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=85",
    tag: "Steel piping",
    number: "09",
  },
  {
    id: 10,
    name: "HDPE Blow Moulding & Film Grade Resins",
    category: "Plastics (HDPE & Others)",
    description:
      "High molecular weight virgin and recycled polymer resin pellets for bottle blowing, containers and films.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=85",
    tag: "Resin pellets",
    number: "10",
  },
  {
    id: 11,
    name: "Polypropylene (PP) & LDPE Polymers",
    category: "Plastics (HDPE & Others)",
    description:
      "Versatile copolymer and homopolymer granules engineered for injection moulding, packaging and woven sacks.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=85",
    tag: "Industrial plastics",
    number: "11",
  },
  {
    id: 12,
    name: "Reinforced AAC Wall Panels & Lintels",
    category: "AAC Blocks",
    description:
      "Steel-reinforced aerated concrete floor slabs, wall panels and load-bearing lintels for rapid construction.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=85",
    tag: "Prefab concrete",
    number: "12",
  },
  {
    id: 13,
    name: "Thin-Bed AAC Mortar & Adhesive",
    category: "AAC Blocks",
    description:
      "Specially formulated high-bond polymer jointing mortar providing high compressive strength and zero thermal bridges.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=85",
    tag: "Masonry adhesive",
    number: "13",
  },
  {
    id: 14,
    name: "Malabar Black Pepper & Green Cardamom",
    category: "Spices",
    description:
      "Hand-graded bold Tellicherry black peppercorns and extra bold green cardamom pods with high essential oil content.",
    image:
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=85",
    tag: "Whole spices",
    number: "14",
  },
  {
    id: 15,
    name: "Organic Turmeric & Dried Red Chillies",
    category: "Spices",
    description:
      "High-curcumin finger turmeric and stemless vibrant red chillies processed under strict food safety standards.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=85",
    tag: "Export spice",
    number: "15",
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    icon: Globe2,
    title: "Global sourcing",
    description:
      "Connect with suitable product sources and manufacturers for your business requirements.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Export coordination",
    description:
      "Coordinated order handling, documentation support and shipment preparation.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Logistics support",
    description:
      "Practical coordination to help move goods from suppliers to their intended destinations.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality coordination",
    description:
      "Clear product specifications and communication throughout the sourcing process.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Clear communication and a straightforward sourcing process make a real difference when dealing with international suppliers.",
    name: "International procurement",
    role: "Buyer perspective",
  },
  {
    quote:
      "Having product requirements and order details organised in one place makes supplier coordination much easier.",
    name: "Wholesale distribution",
    role: "Trade partner perspective",
  },
  {
    quote:
      "Reliable follow-up and transparent communication are essential when coordinating orders across markets.",
    name: "Commercial sourcing",
    role: "Business customer perspective",
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "ALUMINIUM PRODUCTS & EXTRUSIONS",
    title: "Aluminium Profiles &\nExtruded Sections",
    description:
      "High-grade architectural, commercial and industrial aluminium extrusions engineered to precision.",
    image:
      "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=2200&q=90",
    label: "Category: Aluminium Products & Extrusions",
  },
  {
    eyebrow: "METAL PRODUCTS",
    title: "Industrial Metal &\nSteel Products",
    description:
      "Dependable metal and structural steel sourcing for industrial, fabrication and infrastructure requirements.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=90",
    label: "Category: Metal Products",
  },
  {
    eyebrow: "PLASTICS (HDPE & OTHERS)",
    title: "HDPE & Polymer\nRaw Materials",
    description:
      "High-density polyethylene and versatile polymer resins for manufacturing, blow moulding and packaging.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=90",
    label: "Category: Plastics (HDPE & Others)",
  },
  {
    eyebrow: "AAC BLOCKS",
    title: "Autoclaved Aerated\nConcrete Blocks",
    description:
      "Lightweight, thermal-efficient AAC blocks for modern building, residential and commercial projects.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90",
    label: "Category: AAC Blocks",
  },
  {
    eyebrow: "SPICES",
    title: "Premium Export\nQuality Spices",
    description:
      "Carefully sourced whole and ground aromatic spices for wholesale, food processing and global distribution.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=90",
    label: "Category: Spices",
  },
];

