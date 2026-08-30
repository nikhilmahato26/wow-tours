import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { HyderabadSection } from "@/components/HyderabadSection";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About | Wow Self Drive Cars, Hyderabad",
  description:
    "Wow Self Drive Cars provides self-drive car rental services in Hyderabad with flexible 12-hour, 24-hour, weekly, monthly and outstation options. Proprietor: Osman Khan.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Wow Self Drive Cars, Hyderabad"
        intro="A local self-drive car rental service with a range of cars and SUVs and rental durations to match your plan."
      />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <HyderabadSection />
      <Contact />
    </>
  );
}
