"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { navItems, mailtoLink } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/88 backdrop-blur-xl">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="focus-ring rounded-full text-base font-black tracking-tight text-ink"
          onClick={() => setIsOpen(false)}
        >
          Misbah Ahmad
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3.5 py-2 text-sm font-bold text-muted transition hover:bg-white hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <ButtonLink href={mailtoLink} showArrow={false}>
            Work With Misbah
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-ink/30 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-ink/8 bg-paper lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-xl px-3 py-3 text-sm font-bold text-muted transition hover:bg-white hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={mailtoLink} className="mt-2" onClick={() => setIsOpen(false)}>
              Work With Misbah
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
