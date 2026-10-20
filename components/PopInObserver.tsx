"use client";

import { useEffect } from "react";

// Adds the "pop in while scrolling" effect to every element marked data-pop.
// Content stays fully visible without JavaScript or with reduced motion.
export function PopInObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const elements = document.querySelectorAll("[data-pop]");
    for (const element of elements) {
      const box = element.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) {
        element.classList.add("is-in");
      } else {
        observer.observe(element);
      }
    }
    root.classList.add("pop-ready");

    return () => {
      observer.disconnect();
      root.classList.remove("pop-ready");
    };
  }, []);

  return null;
}
