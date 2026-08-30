import Link from "next/link";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

export function HyderabadSection() {
  return (
    <Section tone="mist">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Self Drive Car Rental in Hyderabad
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-graphite/75">
            <p>
              Wow Self Drive Cars is a self drive car rental service based in Hyderabad.
              Whether you need a car for a few hours in the city or a full day across
              town, you drive it yourself with rental durations that suit your plan.
            </p>
            <p>
              Alongside day rentals, we also handle weekly car rental and monthly car
              rental for people who need a vehicle for longer. For trips beyond the city,
              outstation car rental is available on enquiry. Choose from hatchbacks, an
              automatic option, MPVs and SUVs including the Thar and Thar Roxx.
            </p>
          </div>
          <Link
            href="/#book"
            className={buttonClasses({ variant: "dark", size: "lg", className: "mt-7" })}
          >
            Book a Self-Drive Car
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
