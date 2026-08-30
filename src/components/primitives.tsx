import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: "light" | "mist" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    light: "bg-white text-graphite",
    mist: "bg-mist text-graphite",
    dark: "bg-ink text-white",
  } as const;
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]",
            dark ? "text-gold-2" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-extrabold leading-[1.05] sm:text-4xl md:text-[2.75rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-white/70" : "text-graphite/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
