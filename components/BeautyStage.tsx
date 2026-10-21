"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Droplet offsets from the splash point (rem) and their sizes, for the "thrown paint" burst.
const droplets = [
  { dx: -4.2, dy: -1.6, size: 0.7 },
  { dx: -2.6, dy: 1.9, size: 0.45 },
  { dx: 1.4, dy: -2.4, size: 0.55 },
  { dx: 3.6, dy: -1.1, size: 0.85 },
  { dx: 4.4, dy: 1.5, size: 0.5 },
  { dx: 2.2, dy: 2.3, size: 0.35 },
  { dx: -1.1, dy: -2.7, size: 0.4 },
];

function Lipstick() {
  return (
    <svg viewBox="0 0 60 160" className="h-full w-auto drop-shadow-xl" aria-hidden="true">
      <path d="M17 50V24c0-9 5-15 14-20l12 9v37z" fill="#d61f45" />
      <path d="M21 48V26c0-6 3-11 8-14" fill="none" stroke="#ff8fa6" strokeWidth="3" strokeLinecap="round" />
      <rect x="15" y="48" width="30" height="34" rx="2" fill="#e8b85a" />
      <rect x="15" y="48" width="6" height="34" fill="#f6d58f" />
      <rect x="11" y="80" width="38" height="10" rx="2" fill="#c99232" />
      <rect x="11" y="88" width="38" height="70" rx="5" fill="#2b1e1c" />
      <rect x="15" y="92" width="5" height="62" rx="2" fill="#4a3a37" />
    </svg>
  );
}

function Foundation() {
  return (
    <svg viewBox="0 0 80 150" className="h-full w-auto drop-shadow-xl" aria-hidden="true">
      <rect x="25" y="3" width="30" height="36" rx="5" fill="#2b1e1c" />
      <rect x="29" y="7" width="5" height="28" rx="2" fill="#4a3a37" />
      <rect x="32" y="38" width="16" height="10" fill="#cdb4a2" />
      <rect x="7" y="46" width="66" height="100" rx="15" fill="#f6dccb" stroke="#2b1e1c" strokeWidth="3" />
      <rect x="12" y="68" width="56" height="73" rx="11" fill="#e2a883" />
      <rect x="21" y="90" width="38" height="22" rx="4" fill="#fff8f1" />
      <rect x="27" y="97" width="26" height="3" rx="1.5" fill="#8e2343" />
      <rect x="31" y="103" width="18" height="2.5" rx="1.25" fill="#c8435f" />
      <rect x="13" y="52" width="6" height="84" rx="3" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}

type BeautyStageProps = {
  title: string;
  titleId: string;
  children: ReactNode;
};

// Beauty section: when it scrolls into view, a lipstick and a foundation pop up
// behind the videos for about 3 seconds while a red splash turns the title red.
export function BeautyStage({ title, titleId, children }: BeautyStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [hit, setHit] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    // With reduced motion the title still turns red, but the products stay hidden.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hideTimer = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          setHit(true);
          if (!reducedMotion) {
            setShowProducts(true);
            hideTimer = window.setTimeout(() => setShowProducts(false), 3400);
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(stage);

    return () => {
      observer.disconnect();
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div ref={stageRef} className={hit ? "beauty-hit" : undefined}>
      <div data-pop className="mb-8 text-center">
        <h3
          id={titleId}
          className="relative inline-block font-display text-5xl text-berry sm:text-6xl"
        >
          {title}
          <span aria-hidden="true" className="beauty-red absolute inset-0">
            {title}
          </span>
          {droplets.map((drop, index) => (
            <span
              key={index}
              aria-hidden="true"
              className="beauty-drop"
              style={
                {
                  "--dx": `${drop.dx}rem`,
                  "--dy": `${drop.dy}rem`,
                  "--size": `${drop.size}rem`,
                  "--delay": `${420 + index * 35}ms`,
                } as CSSProperties
              }
            />
          ))}
        </h3>
        <p className="-mt-1 font-script text-2xl text-matcha sm:text-3xl">
          Short form UGC videos
        </p>
      </div>

      <div className="relative">
        {showProducts ? (
          <>
            <span
              className="beauty-product left-[2%] h-28 sm:left-[calc(50%_-_28rem)] sm:h-52"
              style={{ "--tilt": "-14deg" } as CSSProperties}
            >
              <Foundation />
            </span>
            <span
              className="beauty-product right-[3%] h-28 sm:right-[calc(50%_-_27.5rem)] sm:h-56"
              style={{ "--tilt": "16deg", animationDelay: "120ms" } as CSSProperties}
            >
              <Lipstick />
            </span>
          </>
        ) : null}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
