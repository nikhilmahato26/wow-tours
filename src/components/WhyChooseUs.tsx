import {
  KeyRound,
  SlidersHorizontal,
  Clock,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  Route,
  CarFront,
  Cog,
  MapPin,
} from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const points = [
  { icon: KeyRound, title: "Self Drive Rental", copy: "Drive the car yourself, on your own schedule." },
  { icon: SlidersHorizontal, title: "Flexible Rental Durations", copy: "Choose the slot that matches your plan." },
  { icon: Clock, title: "12 Hour Rentals", copy: "Half-day rentals for city runs and short trips." },
  { icon: CalendarClock, title: "24 Hour Rentals", copy: "Full-day rentals with more kilometres included." },
  { icon: CalendarDays, title: "Weekly Rentals", copy: "A full week of self-drive access." },
  { icon: CalendarRange, title: "Monthly Rentals", copy: "Long-term rental for regular use." },
  { icon: Route, title: "Outstation Available", copy: "Enquire about taking a vehicle outstation." },
  { icon: CarFront, title: "Multiple Vehicle Options", copy: "Hatchbacks, MPVs and SUVs to pick from." },
  { icon: Cog, title: "Automatic Fronx Available", copy: "An automatic option in the 5-seater range." },
  { icon: MapPin, title: "Hyderabad-Based Service", copy: "A local self-drive service in Hyderabad." },
];

export function WhyChooseUs() {
  return (
    <Section tone="mist">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose Wow Self Drive Cars"
          intro="Straightforward self-drive rentals with the flexibility to match how long you actually need a car."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <RevealItem key={p.title} className="bg-mist">
              <div className="flex h-full flex-col gap-3 bg-white p-6">
                <p.icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-graphite/65">{p.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
