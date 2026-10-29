
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Explore aluminium products & extrusions, metal products, plastics (HDPE & others), AAC blocks, and spices. Connect with our team for product information, wholesale enquiries and export sourcing.",
  applicationName: "Layrock Global Trading LTD",
  keywords: [
    "export company",
    "international trade",
    "aluminium products and extrusions",
    "metal products",
    "plastics HDPE",
    "AAC blocks",
    "spices",
    "global sourcing",
    "wholesale products",
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
      <body className="min-h-screen bg-white font-sans font-normal text-[#171717] antialiased">
        {children}
      </body>
    </html>
  );
}
