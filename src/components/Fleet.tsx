import { Sparkles } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { VehicleCard } from "@/components/VehicleCard";
import { Reveal } from "@/components/motion/Reveal";

export function Fleet() {
  return (
    <Section id="fleet" tone="light">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Fleet"
            title="Choose Your Ride"
            intro="Hatchbacks for the city, MPVs and SUVs for the highway, and adventure SUVs for the weekend. Every car is available on a self-drive basis."
          />
          <Reveal
            className="flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-semibold text-ink"
            delay={0.1}
          >
            <Sparkles className="h-5 w-5 text-gold" strokeWidth={2} />
            Automatic Fronx is available
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 4) * 0.06}>
              <VehicleCard vehicle={v} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-graphite/60">
          <strong className="text-ink text-sm">Note:</strong> An additional charge of ₹500/Day applies for Out of Telangana travel.
        </p>
      </Container>
    </Section>
  );
}
