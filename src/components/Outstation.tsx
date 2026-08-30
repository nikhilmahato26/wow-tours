import { Route, MapPin } from "lucide-react";
import { whatsappLink } from "@/data/business";
import { Section, Container } from "@/components/primitives";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

export function Outstation() {
  return (
    <Section id="outstation" tone="light">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-mist">
            <SmartImage
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Long open highway for an outstation self-drive rental from Hyderabad"
              label="Outstation"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Outstation
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Outstation Self-Drive Rental
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-graphite/70">
              Planning a trip beyond the city? Outstation rentals are also available.
              You can enquire about taking a rental vehicle for outstation travel, and
              we will talk you through what works for your plan.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-graphite/75">
              <li className="flex items-center gap-3">
                <Route className="h-5 w-5 text-gold" strokeWidth={1.75} />
                Outstation rentals also available
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.75} />
                Enquire for trip details before you book
              </li>
            </ul>

            <a
              href={whatsappLink(
                "Hello Wow Self Drive Cars, I would like to enquire about an outstation self-drive rental.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "dark", size: "lg", className: "mt-8" })}
            >
              Enquire for Outstation Rental
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
