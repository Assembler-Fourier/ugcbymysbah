"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { mailtoLink } from "@/data/site";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function ConceptNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#171513]/10 bg-[#f6f1ea]/92 backdrop-blur-xl">
      <div className="container-shell flex min-h-[4.5rem] items-center justify-between gap-3">
        <a
          href="#home"
          className="focus-ring logo-lockup shrink-0 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          <span className="logo-kicker">UGC</span>
          <span className="logo-script">by Mysbah</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-xs font-black uppercase tracking-[0.1em] text-[#5f5651] transition hover:text-[#8e304f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={mailtoLink}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171513] px-4 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#8e304f] sm:px-5"
          >
            <span className="hidden sm:inline">Start a project</span>
            <span className="sm:hidden">Brief</span>
            <ArrowRight aria-hidden="true" size={15} />
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center rounded-full border border-[#171513]/12 bg-white text-[#171513] lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#171513]/10 bg-[#f6f1ea] lg:hidden"
        >
          <div className="container-shell grid grid-cols-2 gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="focus-ring flex min-h-12 items-center justify-between rounded-xl bg-white px-4 text-sm font-black"
              >
                {item.label}
                <ArrowRight aria-hidden="true" size={15} className="text-[#8e304f]" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="focus-ring flex min-h-12 items-center justify-between rounded-xl bg-[#d7f36a] px-4 text-sm font-black"
            >
              Contact
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
