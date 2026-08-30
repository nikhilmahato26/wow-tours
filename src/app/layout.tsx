import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { localBusinessJsonLd, serviceJsonLd, SITE_URL } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wow Self Drive Cars | Self Drive Car Rental in Hyderabad",
    template: "%s | Wow Self Drive Cars",
  },
  description:
    "Wow Self Drive Cars offers self-drive car rentals in Hyderabad with 12-hour, 24-hour, weekly, monthly and outstation rental options.",
  keywords: [
    "Wow Self Drive Cars",
    "Self Drive Car Rental Hyderabad",
    "Self Drive Cars Hyderabad",
    "Car Rental Hyderabad",
    "Self Drive Car Rental in Hyderabad",
    "Outstation Self Drive Cars Hyderabad",
    "Weekly Car Rental Hyderabad",
    "Monthly Car Rental Hyderabad",
    "Thar Rental Hyderabad",
    "Fortuner Rental Hyderabad",
  ],
  authors: [{ name: "Wow Self Drive Cars" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Wow Self Drive Cars",
    title: "Wow Self Drive Cars | Self Drive Car Rental in Hyderabad",
    description:
      "Self-drive car rentals in Hyderabad with 12-hour, 24-hour, weekly, monthly and outstation options.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wow Self Drive Cars | Self Drive Car Rental in Hyderabad",
    description:
      "Self-drive car rentals in Hyderabad with 12-hour, 24-hour, weekly, monthly and outstation options.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
        />
        <SmoothScroll />
        <Navbar />
        <main className="pb-16 sm:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
