import { CalendarDays, CalendarRange, Check } from "lucide-react";
import { business, whatsappLink } from "@/data/business";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

export function WeeklyMonthly() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-2">
              Long-Term Rentals
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Weekly &amp; Monthly Car Rental
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Need a car for longer than a day? Wow Self Drive Cars offers weekly and
              monthly self-drive rentals across Hyderabad. Tell us the vehicle and how
              long you need it, and we will share a quote.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello Wow Self Drive Cars, I would like a quote for a weekly / monthly rental.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "gold", size: "lg" })}
              >
                Get Weekly / Monthly Quote
              </a>
              <a
                href={business.phoneHref}
                className={buttonClasses({ variant: "outlineLight", size: "lg" })}
              >
                Contact for Pricing
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4">
            {[
              {
                icon: CalendarDays,
                title: "Weekly rentals available",
                copy: "A full week of self-drive access. Pricing on request.",
              },
              {
                icon: CalendarRange,
                title: "Monthly rentals available",
                copy: "Month-long self-drive rental for regular use. Pricing on request.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-6"
              >
                <b.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-1.5 text-sm text-white/65">{b.copy}</p>
                <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-2">
                  <Check className="h-4 w-4" strokeWidth={2.5} /> Contact for Pricing
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
