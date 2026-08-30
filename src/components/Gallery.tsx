"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;
const filters: Filter[] = ["All", ...galleryCategories];

export function Gallery() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);

  const visible =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const active = index === null ? null : visible[index];

  return (
    <Section id="gallery" tone="light">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="On The Road With Wow"
          intro="Cars, SUVs and the trips they are built for. Photos are being updated with our own fleet."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                filter === f
                  ? "bg-ink text-white"
                  : "border border-ink/15 text-graphite/70 hover:border-ink",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-mist"
              aria-label={`Open image: ${item.alt}`}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                label={item.category}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active.id}
              className="relative h-[70vh] w-full max-w-4xl"
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
