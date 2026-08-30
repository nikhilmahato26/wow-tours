import Link from "next/link";
import { Clock, CalendarClock, CalendarDays, CalendarRange, Route } from "lucide-react";
import { rentalOptions } from "@/data/pricing";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappLink } from "@/data/business";

const icons = {
  "12h": Clock,
  "24h": CalendarClock,
  weekly: CalendarDays,
  monthly: CalendarRange,
  outstation: Route,
} as const;

export function RentalOptions() {
  return (
    <Section id="rentals" tone="light">
      <Container>
        <SectionHeading
          title="Rental Options"
          intro="Pick the duration that fits your plan. Short city runs, full-day trips, or long-term rentals."
        />

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
          {rentalOptions.map((opt, i) => {
            const Icon = icons[opt.id as keyof typeof icons];
            const href =
              opt.id === "12h" || opt.id === "24h"
                ? "/#pricing"
                : whatsappLink(
                    `Hello Wow Self Drive Cars, I would like details on ${opt.title.toLowerCase()}.`,
                  );
            const external = href.startsWith("http");
            return (
              <Reveal key={opt.id} delay={i * 0.05}>
                <div className="flex h-full min-w-[240px] snap-start flex-col rounded-2xl border border-ink/10 bg-white p-6 sm:min-w-0">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
                  <h3 className="mt-4 text-base font-bold text-ink">{opt.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-graphite/65">
                    {opt.detail}
                  </p>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink underline underline-offset-4 hover:text-gold"
                  >
                    {opt.priceHint}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
