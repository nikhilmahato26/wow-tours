import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

const steps = [
  { n: "01", title: "Choose Your Car", copy: "Select your preferred vehicle." },
  { n: "02", title: "Select Duration", copy: "Choose 12 hours, 24 hours, weekly or monthly rental." },
  { n: "03", title: "Book Your Car", copy: "Submit your booking enquiry." },
  { n: "04", title: "Start Your Journey", copy: "Collect your vehicle and enjoy your trip." },
];

export function HowItWorks() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          tone="dark"
          title="How It Works"
          intro="Four steps from picking a car to driving away."
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <RevealItem key={s.n}>
              <div className="flex h-full flex-col border-t-2 border-gold/40 pt-5">
                <span className="text-4xl font-extrabold tracking-tight text-gold">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10">
          <Link href="/#book" className={buttonClasses({ variant: "gold", size: "lg" })}>
            Start Your Booking
          </Link>
        </div>
      </Container>
    </Section>
  );
}
