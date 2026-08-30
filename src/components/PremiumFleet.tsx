import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

const premiumSlugs = ["ertiga", "xl6", "innova", "innova-crysta", "fortuner-type-2", "fortuner-type-3", "thar", "thar-roxx"];

const blurbs: Record<string, string> = {
  ertiga: "A versatile 7-seater MPV perfect for city drives and weekend trips.",
  xl6: "A premium 6-seater MPV offering enhanced comfort and cabin space.",
  innova: "Spacious and reliable 7-seater MPV for family and group travels.",
  "innova-crysta": "Room for the whole group on long comfortable drives.",
  "fortuner-type-2": "A commanding SUV built for highways and rough patches alike.",
  "fortuner-type-3": "The latest Fortuner styling with premium interior comfort.",
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
          intro="For family trips, weekend getaways and outstation journeys. Pick the Innova, Innova Crysta, Fortuner, Thar or Thar Roxx and drive it yourself."
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
                    <div className="mt-3 flex flex-col gap-0.5 text-sm text-white/80">
                      <p>
                        <span className="text-lg font-bold text-gold">{v.rate.from}</span>{" "}
                        / {v.rate.per}
                      </p>
                      {v.rate.from24 && v.rate.per24 && (
                        <p>
                          <span className="text-lg font-bold text-gold">{v.rate.from24}</span>{" "}
                          / {v.rate.per24}
                        </p>
                      )}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <Link href="/#book" className={buttonClasses({ variant: "gold", size: "lg" })}>
            Book a Premium Vehicle
          </Link>
          <p className="text-center text-sm font-medium text-white/60">
            <strong className="text-white text-sm">Note:</strong> An additional charge of ₹500/Day applies for Out of Telangana travel.
          </p>
        </div>
      </Container>
    </Section>
  );
}
