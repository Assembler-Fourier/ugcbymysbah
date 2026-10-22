"use client";

import { Star } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SocialLogo } from "@/components/SocialLogo";

export type Testimonial = {
  quote: string;
  project: string;
  date: string;
};

// How long each review stays on screen before the next one slides in.
const SHOW_MS = 6500;

export function TestimonialRotator({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  // Bumped whenever the timer restarts (dot click, resume after hover) so the bar restarts too.
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Only rotate while the reviews are on screen, and start a fresh cycle when
  // they scroll into view so the first review gets its full time.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setCycle((count) => count + 1);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const running = inView && !paused && !reducedMotion;

  const goTo = (next: number) => {
    setLeaving(active === next ? null : active);
    setActive(next);
    setCycle((count) => count + 1);
  };

  useEffect(() => {
    if (!running || items.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setLeaving(active);
      setActive((active + 1) % items.length);
      setCycle((count) => count + 1);
    }, SHOW_MS);
    return () => window.clearTimeout(timer);
  }, [active, cycle, items.length, running]);

  const pause = () => setPaused(true);
  const resume = () => {
    setPaused(false);
    setCycle((count) => count + 1);
  };

  return (
    <div ref={rootRef} onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
      <div className="grid overflow-hidden px-1 py-2">
        {items.map((review, index) => {
          const state = index === active ? "is-active" : index === leaving ? "is-leaving" : "";

          return (
            <figure
              key={review.project}
              aria-hidden={index !== active}
              className={`review-card relative rounded-3xl border-4 border-cream bg-white p-6 shadow-soft [grid-area:1/1] sm:p-8 ${state} ${
                index === active ? "" : "pointer-events-none"
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

      {!reducedMotion ? (
        <div aria-hidden="true" className="mx-auto mt-4 h-1.5 w-40 overflow-hidden rounded-full bg-matcha/20">
          <div
            key={`${active}-${cycle}`}
            className="review-progress h-full rounded-full bg-strawberry"
            style={{ "--show-ms": `${SHOW_MS}ms`, animationPlayState: running ? "running" : "paused" } as CSSProperties}
          />
        </div>
      ) : null}

      <div className="mt-4 flex justify-center gap-2">
        {items.map((review, index) => (
          <button
            key={review.project}
            type="button"
            onClick={() => goTo(index)}
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
