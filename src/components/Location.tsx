import { MapPin, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

export function Location() {
  return (
    <Section id="location" tone="dark">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-2">
              Location
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Find Us
            </h2>
            <div className="mt-5 space-y-3 text-white/75">
              <p className="flex items-center gap-3 text-lg font-bold text-white">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={2} />
                {business.name}
              </p>
              <p className="pl-8 text-sm">{business.city}</p>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "gold", size: "lg", className: "mt-7" })}
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-white/12">
            <iframe
              title={`Map showing ${business.name} in ${business.city}`}
              src={business.mapsEmbedUrl}
              className="h-[320px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
