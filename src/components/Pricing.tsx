import Link from "next/link";
import { Clock, Gauge } from "lucide-react";
import { priceSlots } from "@/data/pricing";
import { business, whatsappLink } from "@/data/business";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["5 Seater", "7 Seater", "Thar", "Thar Roxx"] as const;

export function Pricing() {
  return (
    <Section id="pricing" tone="mist">
      <Container>
        <SectionHeading
          eyebrow="Price List"
          title="Transparent Rental Pricing"
          intro="Rates are shown exactly as offered by Wow Self Drive Cars. Each slot includes a fixed number of hours and kilometres."
        />

        <div className="mt-12 space-y-10">
          {categories.map((cat) => {
            const slots = priceSlots.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-graphite/50">
                  {cat} Rental
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {slots.map((s, i) => (
                    <Reveal key={s.id} delay={i * 0.06}>
                      <div
                        className={cn(
                          "flex h-full flex-col rounded-2xl border p-6",
                          s.featured
                            ? "border-gold bg-ink text-white"
                            : "border-ink/10 bg-white text-ink",
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "text-xs font-bold uppercase tracking-[0.16em]",
                              s.featured ? "text-gold-2" : "text-gold",
                            )}
                          >
                            {s.category}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                              s.featured ? "bg-white/10 text-white" : "bg-mist text-graphite/70",
                            )}
                          >
                            {s.duration}
                          </span>
                        </div>

                        <div className="mt-5 flex items-baseline gap-1">
                          <span className="text-4xl font-extrabold tracking-tight">
                            {s.price}
                          </span>
                        </div>

                        <ul
                          className={cn(
                            "mt-4 space-y-2 text-sm",
                            s.featured ? "text-white/75" : "text-graphite/70",
                          )}
                        >
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gold" strokeWidth={2} />
                            {s.duration}
                          </li>
                          <li className="flex items-center gap-2">
                            <Gauge className="h-4 w-4 text-gold" strokeWidth={2} />
                            {s.km} included
                          </li>
                        </ul>

                        <Link
                          href="/#book"
                          className={buttonClasses({
                            variant: s.featured ? "gold" : "dark",
                            size: "md",
                            className: "mt-6 w-full",
                          })}
                        >
                          Book Now
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-graphite/60">
          Weekly, monthly and outstation rentals are available. Pricing for those is
          shared on request.{" "}
          <a
            href={whatsappLink(
              "Hello Wow Self Drive Cars, please share pricing for weekly / monthly / outstation rental.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline underline-offset-4"
          >
            Message us on {business.phone}
          </a>{" "}
          for a quote.
        </p>
      </Container>
    </Section>
  );
}
