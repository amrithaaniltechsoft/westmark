import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { WhatsAppIsland } from "@/components/ui/whatsapp-island";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Layrock Global Trading LTD | Global Sourcing & Export Solutions",
    template: "%s | Layrock Global Trading LTD",
  },
  description:
    "Explore aluminium products & extrusions, Non-ferrous metals, plastics (HDPE & others), AAC blocks, and spices. Connect with our team for product information, wholesale enquiries and export sourcing.",
  applicationName: "Layrock Global Trading LTD",
  keywords: [
    "export company",
    "international trade",
    "UK trading company",
    "Bristol export company",
    "Keynsham trade house",
    "UK commodity trading",
    "India UK bilateral trade",
    "import export UK",
    "British trade suppliers",
    "aluminium products and extrusions",
    "Non-ferrous metals",
    "plastics HDPE",
    "polymer raw materials UK",
    "AAC blocks UK export",
    "Indian spices wholesale UK",
    "global sourcing",
    "wholesale products UK",
    "international freight and trade logistics",
  ],
  openGraph: {
    title: "Layrock Global Trading LTD | Global Sourcing & Export Solutions",
    description:
      "Connecting businesses with sourcing opportunities and export products across industries.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white font-sans font-normal text-[#171717] antialiased">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppIsland />
      </body>
    </html>
  );
}
