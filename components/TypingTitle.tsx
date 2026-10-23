"use client";

import { useEffect, useRef, useState } from "react";

// A heading that types itself out, letter by letter, when it scrolls into view.
// An invisible copy of the full text holds the space so nothing jumps around,
// and screen readers and search engines always get the whole heading.
export function TypingTitle({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const heading = ref.current;
    if (!heading) {
      return;
    }

    let typer = 0;
    let cursorTimer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(text.length);
          setDone(true);
          return;
        }
        let typed = 0;
        typer = window.setInterval(() => {
          typed += 1;
          setCount(typed);
          if (typed >= text.length) {
            window.clearInterval(typer);
            cursorTimer = window.setTimeout(() => setDone(true), 1800);
          }
        }, 95);
      },
      { threshold: 0.6 },
    );
    observer.observe(heading);

    return () => {
      observer.disconnect();
      window.clearInterval(typer);
      window.clearTimeout(cursorTimer);
    };
  }, [text]);

  return (
    <h2 ref={ref} className={`relative inline-block ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0 text-left">
        {text.slice(0, count)}
        <span className={`typing-cursor ${done ? "opacity-0" : ""}`} />
      </span>
    </h2>
  );
}
