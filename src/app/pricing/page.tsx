import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Pricing } from "@/components/Pricing";
import { RentalOptions } from "@/components/RentalOptions";
import { WeeklyMonthly } from "@/components/WeeklyMonthly";
import { Outstation } from "@/components/Outstation";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pricing | Self Drive Car Rental Rates in Hyderabad",
  description:
    "Self-drive rental pricing in Hyderabad. 5-seater from ₹1,500 / 12 hrs, 7-seater from ₹2,500 / 12 hrs, Thar and Thar Roxx tariffs. Weekly and monthly on request.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Price List"
        title="Self Drive Car Rental Rates in Hyderabad"
        intro="Fixed hours and kilometres per slot, shown exactly as offered. Weekly, monthly and outstation pricing is shared on request."
      />
      <Pricing />
      <RentalOptions />
      <WeeklyMonthly />
      <Outstation />
      <Contact />
    </>
  );
}
