"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SocialLogo } from "@/components/SocialLogo";

export type Testimonial = {
  quote: string;
  project: string;
  date: string;
};

// Long reviews stay on screen longer so they can be read in full.
function readingTime(quote: string) {
  return Math.min(12000, 4000 + quote.length * 35);
}

export function TestimonialRotator({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  // Bumped on every dot click so the reading timer always restarts.
  const [restarts, setRestarts] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || items.length < 2) {
      return;
    }

    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % items.length),
      readingTime(items[active].quote),
    );
    return () => window.clearTimeout(timer);
  }, [active, items, paused, reducedMotion, restarts]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid">
        {items.map((review, index) => {
          const isActive = index === active;

          return (
            <figure
              key={review.project}
              aria-hidden={!isActive}
              className={`review-card relative rounded-3xl border-4 border-cream bg-white p-6 shadow-soft [grid-area:1/1] sm:p-8 ${
                isActive ? "is-active" : "pointer-events-none"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-2 font-display text-8xl leading-none text-strawberry-milk"
              >
                &rdquo;
              </span>
              <p className="flex gap-0.5 text-strawberry" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} aria-hidden="true" size={18} className="fill-current" />
                ))}
              </p>
              <blockquote className="relative mt-4 text-lg leading-8 text-cocoa/85">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 border-t border-strawberry-milk pt-4 text-xs font-bold uppercase tracking-wide text-matcha-deep">
                <SocialLogo logo="upwork" className="size-5 shrink-0" />
                <span>
                  Upwork client · {review.project} · {review.date}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {items.map((review, index) => (
          <button
            key={review.project}
            type="button"
            onClick={() => {
              setActive(index);
              setRestarts((count) => count + 1);
            }}
            aria-label={`Show review ${index + 1} of ${items.length}`}
            aria-current={index === active}
            className={`focus-ring h-2.5 rounded-full transition-all duration-300 ${
              index === active ? "w-8 bg-strawberry" : "w-2.5 bg-matcha/40 hover:bg-matcha"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
