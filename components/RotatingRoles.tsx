"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 85;
const DELETE_MS = 40;
const HOLD_MS = 1800;

// Types each role, holds it, deletes it, then types the next, forever.
// An invisible copy of the longest role holds the width so nothing jumps,
// and screen readers and search engines get every role at once.
export function RotatingRoles({ roles, className = "" }: { roles: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!animate) {
      return;
    }
    const role = roles[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && count === role.length) {
      delay = HOLD_MS;
    }
    const timer = window.setTimeout(() => {
      if (!deleting && count === role.length) {
        setDeleting(true);
      } else if (deleting && count === 0) {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      } else {
        setCount(count + (deleting ? -1 : 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [animate, count, deleting, index, roles]);

  const longest = roles.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={`relative block ${className}`}>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="invisible block">
        {longest}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {roles[index].slice(0, count)}
        {animate ? <span className="typing-cursor text-strawberry" /> : null}
      </span>
    </span>
  );
}
