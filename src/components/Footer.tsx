import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { business, navLinks } from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em]">
              <span className="text-gold">WOW</span> SELF DRIVE CARS
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Self-drive car rental in Hyderabad with 12-hour, 24-hour, weekly, monthly
              and outstation rental options.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Proprietor: {business.proprietor}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={business.phoneHref} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" strokeWidth={2} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="flex items-center gap-2 hover:text-gold">
                  <Mail className="h-4 w-4 text-gold" strokeWidth={2} />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <MapPin className="h-4 w-4 text-gold" strokeWidth={2} />
                  {business.city}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.shortName}. All rights reserved.
          </p>
          <p>Self Drive Car Rental in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
