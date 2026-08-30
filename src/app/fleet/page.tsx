import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Fleet } from "@/components/Fleet";
import { PremiumFleet } from "@/components/PremiumFleet";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Fleet | Self Drive Cars & SUVs in Hyderabad",
  description:
    "Self-drive fleet from Wow Self Drive Cars in Hyderabad: Swift, Baleno, Fronx, Automatic Fronx, Kia Seltos Manual, Kia Seltos Automatic, Innova, Innova Crysta, Fortuner Type 2, Fortuner Type 3, Thar and Thar Roxx.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Fleet"
        title="Self Drive Cars & SUVs in Hyderabad"
        intro="Hatchbacks, an automatic option, premium MPVs and adventure SUVs. Every vehicle is available on a self-drive basis."
      />
      <Fleet />
      <PremiumFleet />
      <Pricing />
      <Contact />
    </>
  );
}
