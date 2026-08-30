import Link from "next/link";
import { Cog, Users, Sparkles } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { SmartImage } from "@/components/SmartImage";
import { buttonClasses } from "@/components/ui/button";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(17,17,17,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <SmartImage
          src={vehicle.image}
          alt={vehicle.alt}
          label={vehicle.name}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {vehicle.highlight ? (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
            <Sparkles className="h-3 w-3" strokeWidth={2.5} />
            {vehicle.highlight}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-ink">{vehicle.name}</h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-graphite/50">
              {vehicle.categoryLabel}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-mist px-2.5 py-1 text-[11px] font-semibold text-graphite/70">
            <Users className="h-3.5 w-3.5" strokeWidth={2} />
            {vehicle.category === "5-Seater" ? "5-Seater" : "Premium"}
          </span>
          {vehicle.transmission ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">
              <Cog className="h-3.5 w-3.5" strokeWidth={2} />
              {vehicle.transmission}
            </span>
          ) : null}
        </div>

        <div className="mt-auto pt-5">
          {vehicle.rate ? (
            <div className="flex flex-col gap-0.5 text-sm text-graphite/60">
              <p>
                <span className="text-lg font-extrabold text-ink">{vehicle.rate.from}</span>{" "}
                <span className="text-xs">/ {vehicle.rate.per}</span>
              </p>
              {vehicle.rate.from24 && vehicle.rate.per24 && (
                <p>
                  <span className="text-lg font-extrabold text-ink">{vehicle.rate.from24}</span>{" "}
                  <span className="text-xs">/ {vehicle.rate.per24}</span>
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm font-semibold text-graphite/60">Contact for tariff</p>
          )}
          <Link
            href="/#book"
            className={buttonClasses({ variant: "dark", size: "sm", className: "mt-3 w-full" })}
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
