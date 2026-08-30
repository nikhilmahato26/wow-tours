import { business } from "@/data/business";
import { priceSlots } from "@/data/pricing";
import { vehicles } from "@/data/vehicles";

export const SITE_URL = "https://www.wowselfdrivecars.in";

/** LocalBusiness / AutoRental structured data. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: business.name,
    description:
      "Wow Self Drive Cars offers self-drive car rentals in Hyderabad with 12-hour, 24-hour, weekly, monthly and outstation rental options.",
    url: SITE_URL,
    telephone: "+91-9676861843",
    email: business.email,
    priceRange: "₹₹",
    areaServed: { "@type": "City", name: "Hyderabad" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    hasMap: business.mapsUrl,
    founder: { "@type": "Person", name: business.proprietor },
    makesOffer: priceSlots.map((s) => ({
      "@type": "Offer",
      name: `${s.category} - ${s.duration} (${s.km})`,
      price: s.price.replace(/[₹,]/g, ""),
      priceCurrency: "INR",
      category: "Self Drive Car Rental",
    })),
  };
}

/** Service structured data for the core rental services. */
export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Self Drive Car Rental",
    provider: { "@type": "AutoRental", name: business.name, url: SITE_URL },
    areaServed: { "@type": "City", name: "Hyderabad" },
    description:
      "Self drive car rental, outstation car rental, weekly car rental and monthly car rental in Hyderabad.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fleet",
      itemListElement: vehicles.map((v) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Car", name: v.name },
      })),
    },
  };
}
