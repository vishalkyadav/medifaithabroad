"use client";

import { useCallback, useEffect, useState, type FocusEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeImages } from "@/lib/content/home-images";

export function HomeStudentFamilySlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const photos = homeImages.studentFamilyPhotos;
  const photo = photos[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % photos.length);
  }

  /* Auto-advance every 3s; hover/focus pauses so manual browsing stays usable. */
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, photos.length]);

  const onFocusOut = useCallback((event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setPaused(false);
    }
  }, []);

  return (
    <div
      className="mx-auto max-w-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Student and family photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={onFocusOut}
    >
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-brand-midnight shadow-xl sm:aspect-video sm:rounded-3xl">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
            className="object-contain transition-opacity duration-300"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-brand-midnight/85 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-6">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous photo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-brand-midnight/70 text-white transition-colors hover:bg-brand-gold hover:text-brand-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <figcaption className="px-3 text-center text-sm font-medium text-white">
              Photo {activeIndex + 1} of {photos.length}
            </figcaption>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next photo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-brand-midnight/70 text-white transition-colors hover:bg-brand-gold hover:text-brand-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </figure>
      <div className="mt-5 flex justify-center gap-2" aria-label="Choose a photo">
        {photos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-3 rounded-full transition-[width,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
              activeIndex === index
                ? "w-8 bg-brand-gold"
                : "w-3 bg-brand-midnight/30 hover:bg-brand-gold/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
