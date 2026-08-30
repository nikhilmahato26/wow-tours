"use client";

import Image from "next/image";
import { useState } from "react";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * next/image with a branded fallback. If the remote photo fails to load, we show
 * a flat black + gold panel with the label, so the layout never breaks. Replace
 * the source URLs in the data files with real photos to remove the fallback.
 */
export function SmartImage({
  src,
  alt,
  label,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 bg-ink text-center",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <Car className="h-10 w-10 text-gold" strokeWidth={1.5} />
        {label ? (
          <span className="px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
            {label}
          </span>
        ) : null}
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
