import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/primitives";
import { buttonClasses } from "@/components/ui/button";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-ink pt-28 pb-16 text-white sm:pt-32">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">{intro}</p>
        <Link
          href="/#book"
          className={buttonClasses({ variant: "gold", size: "md", className: "mt-7" })}
        >
          Book a Car <ChevronRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
