import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { PremiumFleet } from "@/components/PremiumFleet";
import { Pricing } from "@/components/Pricing";
import { RentalOptions } from "@/components/RentalOptions";
import { WeeklyMonthly } from "@/components/WeeklyMonthly";
import { Outstation } from "@/components/Outstation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { HyderabadSection } from "@/components/HyderabadSection";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Fleet />
      <PremiumFleet />
      <Pricing />
      <RentalOptions />
      <WeeklyMonthly />
      <Outstation />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <HyderabadSection />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}
