"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ChevronRight, Clock, CalendarDays, CalendarRange, Route } from "lucide-react";
import { business } from "@/data/business";
import { buttonClasses } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { SmartImage } from "@/components/SmartImage";

const badges = [
  { label: "12 HR Rentals", icon: Clock },
  { label: "24 HR Rentals", icon: Clock },
  { label: "Weekly Rentals", icon: CalendarDays },
  { label: "Monthly Rentals", icon: CalendarRange },
  { label: "Outstation Available", icon: Route },
];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Premium car on an open road, ready for a self-drive rental from Hyderabad"
          sizes="100vw"
          priority
          className="opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>

      <div className="mx-auto grid min-h-[100dvh] max-w-[1240px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div>
          <motion.p
            {...rise(0)}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-gold"
          >
            {business.positioningSecondary}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-4 text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-[3.75rem]"
          >
            Hyderabad&apos;s Best
            <br />
            <span className="text-gold">Self-Drive</span> Car Rental
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Premium self-drive cars with flexible rental options for city travel,
            weekend trips and outstation journeys.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#book" className={buttonClasses({ variant: "gold", size: "lg" })}>
              Book a Car <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={business.phoneHref}
              className={buttonClasses({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          id="book"
          className="scroll-mt-28"
        >
          <BookingForm variant="onDark" />
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/80">
        <ul className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
          {badges.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70"
            >
              <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
