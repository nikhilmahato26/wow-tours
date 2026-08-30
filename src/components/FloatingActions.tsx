"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/data/business";

/**
 * Desktop: two stacked round buttons, bottom-right.
 * Mobile: a full-width sticky action bar (Call / WhatsApp / Book).
 */
export function FloatingActions() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 sm:flex">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Wow Self Drive Cars on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={2} />
        </a>
        <a
          href={business.phoneHref}
          aria-label={`Call Wow Self Drive Cars on ${business.phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_12px_30px_-8px_rgba(212,175,55,0.7)] transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <Phone className="h-6 w-6" strokeWidth={2} />
        </a>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ink sm:hidden">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wide text-white"
        >
          <Phone className="h-5 w-5 text-gold" strokeWidth={2} />
          Call Now
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-white/10 py-3 text-[11px] font-semibold uppercase tracking-wide text-white"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" strokeWidth={2} />
          WhatsApp
        </a>
        <Link
          href="/#book"
          className="flex flex-col items-center justify-center gap-1 bg-gold py-3 text-[11px] font-extrabold uppercase tracking-wide text-ink"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
