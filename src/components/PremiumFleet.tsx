import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

const premiumSlugs = ["innova-crysta", "fortuner", "thar", "thar-roxx"];

const blurbs: Record<string, string> = {
  "innova-crysta": "Room for the whole group on long comfortable drives.",
  fortuner: "A commanding SUV built for highways and rough patches alike.",
  thar: "The classic weekend escape machine for open roads.",
  "thar-roxx": "More space, more comfort, same go-anywhere character.",
};

export function PremiumFleet() {
  const premium = vehicles.filter((v) => premiumSlugs.includes(v.slug));

  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          tone="dark"
          title="Premium & Adventure Fleet"
          intro="For family trips, weekend getaways and outstation journeys. Pick the Innova Crysta, Fortuner, Thar or Thar Roxx and drive it yourself."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {premium.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 2) * 0.08}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                  <SmartImage
                    src={v.image}
                    alt={v.alt}
                    label={v.name}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-extrabold text-white">{v.name}</h3>
                  <p className="mt-1 max-w-sm text-sm text-white/70">{blurbs[v.slug]}</p>
                  {v.rate ? (
                    <p className="mt-3 text-sm text-white/80">
                      <span className="text-lg font-bold text-gold">{v.rate.from}</span>{" "}
                      / {v.rate.per}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/#book" className={buttonClasses({ variant: "gold", size: "lg" })}>
            Book a Premium Vehicle
          </Link>
        </div>
      </Container>
    </Section>
  );
}
