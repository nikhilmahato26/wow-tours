import { UserRound } from "lucide-react";
import { business } from "@/data/business";
import { Section, Container } from "@/components/primitives";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <Section id="about" tone="light">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-mist lg:order-1">
            <SmartImage
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
              alt="Interior of a self-drive rental car from Wow Self Drive Cars in Hyderabad"
              label="Wow Self Drive Cars"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              About
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              About WOW SELF DRIVE CARS
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite/75">
              Wow Self Drive Cars provides self-drive car rental services in Hyderabad,
              offering a range of cars and SUVs with flexible rental options including
              12-hour, 24-hour, weekly, monthly and outstation rentals.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-ink/10 bg-mist px-4 py-3">
              <UserRound className="h-5 w-5 text-gold" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">
                Proprietor: {business.proprietor}
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
