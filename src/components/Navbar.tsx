"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { business, navLinks, whatsappLink } from "@/data/business";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sentinel-based scroll detection (no scroll listener, no per-frame work).
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;height:10px;width:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-white/10 bg-ink/95" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <Link
          href="/#home"
          className="text-sm font-extrabold uppercase leading-none tracking-[0.14em] text-white"
        >
          <span className="text-gold">WOW</span> SELF DRIVE CARS
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] font-medium text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-[13px] font-semibold text-white/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {business.phone}
          </a>
          <Link href="/#book" className={buttonClasses({ variant: "gold", size: "sm" })}>
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col divide-y divide-white/10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-4 text-lg font-semibold text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link href="/#book" className={buttonClasses({ variant: "gold", size: "lg" })}>
              Book Now
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={business.phoneHref}
                className={buttonClasses({ variant: "outlineLight", size: "md" })}
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "outlineLight", size: "md" })}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
