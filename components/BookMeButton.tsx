"use client";

import { Check, Copy, X } from "lucide-react";
import { useId, useRef, useState, type ReactNode } from "react";
import { SocialLogo, type SocialLogoName } from "@/components/SocialLogo";
import { contactEmail, mailtoLink, profileLinks } from "@/data/site";

type BookMeButtonProps = {
  children: ReactNode;
  className?: string;
};

const contactRows: Array<{
  label: string;
  detail: string;
  href: string;
  logo: SocialLogoName;
}> = [
  {
    label: "Email me your brief",
    detail: contactEmail,
    href: mailtoLink,
    logo: "email",
  },
  {
    label: "DM me on Instagram",
    detail: "@mysbahdoingugc__",
    href: profileLinks.instagram,
    logo: "instagram",
  },
  {
    label: "Hire me on Upwork",
    detail: "5.0 rating, 100% job success",
    href: profileLinks.upwork,
    logo: "upwork",
  },
  {
    label: "Connect on LinkedIn",
    detail: "Mysbah Ahmad",
    href: profileLinks.linkedin,
    logo: "linkedin",
  },
];

export function BookMeButton({ children, className }: BookMeButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={className}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="book-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="focus-ring absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-strawberry-milk text-berry transition hover:rotate-90 hover:bg-strawberry hover:text-white"
          >
            <X aria-hidden="true" size={18} />
          </button>

          <p className="font-script text-3xl text-matcha">let&apos;s create</p>
          <h2
            id={titleId}
            className="font-display text-4xl leading-tight text-cocoa"
          >
            Work with Mysbah
          </h2>
          <p className="mt-2 text-sm text-cocoa/75">
            Share your product, how many videos you need, and your deadline.
          </p>

          <ul className="mt-6 space-y-3">
            {contactRows.map((row) => (
              <li key={row.label}>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring flex items-center gap-4 rounded-2xl border-2 border-strawberry-milk bg-white p-4 transition hover:-translate-y-0.5 hover:border-strawberry"
                >
                  <SocialLogo logo={row.logo} className="size-8 shrink-0" />
                  <span className="min-w-0">
                    <span className="block font-bold text-cocoa">
                      {row.label}
                    </span>
                    <span className="block truncate text-sm text-cocoa/65">
                      {row.detail}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={copyEmail}
            className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-matcha px-5 text-sm font-bold text-white transition hover:bg-matcha-deep"
          >
            {copied ? (
              <Check aria-hidden="true" size={17} />
            ) : (
              <Copy aria-hidden="true" size={17} />
            )}
            {copied ? "Email copied" : "Copy my email"}
          </button>
          <p aria-live="polite" className="sr-only">
            {copied ? "Email address copied" : ""}
          </p>
        </div>
      </dialog>
    </>
  );
}
