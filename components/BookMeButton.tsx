"use client";

import { Check, Copy, Mail, Send, X } from "lucide-react";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { SocialLogo } from "@/components/SocialLogo";
import { contactEmail, profileLinks } from "@/data/site";

type BookMeButtonProps = {
  children: ReactNode;
  className?: string;
};

type Brief = {
  name: string;
  brand: string;
  email: string;
  project: string;
  videos: string;
  timeline: string;
  budget: string;
  details: string;
};

type Field = keyof Brief;

const emptyBrief: Brief = {
  name: "",
  brand: "",
  email: "",
  project: "",
  videos: "",
  timeline: "",
  budget: "",
  details: "",
};

const requiredFields: Array<{ field: Field; message: string }> = [
  { field: "name", message: "Add your name" },
  { field: "brand", message: "Add your brand or company" },
  { field: "project", message: "Tell me what the project is" },
  { field: "videos", message: "Choose how many videos you need" },
];

const videoOptions = ["1 video", "2 to 3 videos", "4 to 5 videos", "6 to 10 videos", "More than 10"];
const timelineOptions = ["As soon as possible", "Within 1 week", "Within 2 weeks", "Within a month", "Flexible"];
const budgetOptions = ["Under $100", "$100 to $300", "$300 to $600", "$600 to $1,000", "$1,000+", "Not sure yet"];

// Instagram can't pre-fill a DM from a link, so the brief is copied first.
const instagramDm = "https://ig.me/m/mysbahdoingugc__";

function briefText(brief: Brief) {
  const line = (label: string, value: string) => `${label}: ${value.trim() || "Not given"}`;
  return [
    "Hi Mysbah,",
    "",
    "Here is my UGC project brief.",
    "",
    line("Name", brief.name),
    line("Brand / company", brief.brand),
    line("Email", brief.email),
    line("Project", brief.project),
    line("Number of videos", brief.videos),
    line("Timeline", brief.timeline),
    line("Budget", brief.budget),
    "",
    "Details:",
    brief.details.trim() || "Not given",
  ].join("\n");
}

const inputClass =
  "mt-1.5 w-full rounded-xl border-2 border-strawberry-milk bg-white px-3 py-2.5 text-sm text-cocoa outline-none transition placeholder:text-cocoa/40 focus:border-strawberry aria-[invalid=true]:border-strawberry";

export function BookMeButton({ children, className }: BookMeButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formId = useId();
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "emailed" | "copied" | "copy-failed">("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const fieldId = (field: Field) => `${formId}-${field}`;

  const update = (field: Field, value: string) => {
    setBrief((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    setStatus("idle");
  };

  const validate = () => {
    const found: Partial<Record<Field, string>> = {};
    for (const { field, message } of requiredFields) {
      if (!brief[field].trim()) {
        found[field] = message;
      }
    }
    if (brief.email.trim() && !/^\S+@\S+\.\S+$/.test(brief.email.trim())) {
      found.email = "Check your email address";
    }
    setErrors(found);
    const first = Object.keys(found)[0] as Field | undefined;
    if (first) {
      document.getElementById(fieldId(first))?.focus();
    }
    return !first;
  };

  const sendByEmail = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    const subject = `UGC brief from ${brief.brand.trim()}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefText(brief))}`;
    setStatus("emailed");
  };

  const sendOnInstagram = async () => {
    if (!validate()) {
      return;
    }
    try {
      await navigator.clipboard.writeText(briefText(brief));
      setStatus("copied");
    } catch {
      setStatus("copy-failed");
    }
    window.open(instagramDm, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  const errorFor = (field: Field) =>
    errors[field] ? (
      <span id={`${fieldId(field)}-error`} className="mt-1 block text-xs font-bold text-strawberry">
        {errors[field]}
      </span>
    ) : null;

  const fieldProps = (field: Field) => ({
    id: fieldId(field),
    value: brief[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${fieldId(field)}-error` : undefined,
  });

  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={`${formId}-title`}
        className="book-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <form noValidate onSubmit={sendByEmail} className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="focus-ring absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-strawberry-milk text-berry transition hover:rotate-90 hover:bg-strawberry hover:text-white"
          >
            <X aria-hidden="true" size={18} />
          </button>

          <p className="font-script text-3xl text-matcha">let&apos;s create</p>
          <h2 id={`${formId}-title`} className="font-display text-4xl leading-tight text-cocoa">
            Tell me about your project
          </h2>
          <p className="mt-2 text-sm text-cocoa/75">
            Fill this in and send it by email or Instagram. I&apos;ll reply with ideas for your brand.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-bold text-cocoa" htmlFor={fieldId("name")}>
              Your name *
              <input {...fieldProps("name")} type="text" autoComplete="name" placeholder="Sarah Khan" className={inputClass} onChange={(e) => update("name", e.target.value)} />
              {errorFor("name")}
            </label>
            <label className="block text-sm font-bold text-cocoa" htmlFor={fieldId("brand")}>
              Brand or company *
              <input {...fieldProps("brand")} type="text" autoComplete="organization" placeholder="Glow Skincare" className={inputClass} onChange={(e) => update("brand", e.target.value)} />
              {errorFor("brand")}
            </label>
            <label className="block text-sm font-bold text-cocoa sm:col-span-2" htmlFor={fieldId("email")}>
              Your email <span className="font-medium text-cocoa/55">(so I can reply)</span>
              <input {...fieldProps("email")} type="email" autoComplete="email" placeholder="sarah@glowskincare.com" className={inputClass} onChange={(e) => update("email", e.target.value)} />
              {errorFor("email")}
            </label>
            <label className="block text-sm font-bold text-cocoa sm:col-span-2" htmlFor={fieldId("project")}>
              What&apos;s the project? *
              <input {...fieldProps("project")} type="text" placeholder="3 TikTok ads for our new vitamin C serum" className={inputClass} onChange={(e) => update("project", e.target.value)} />
              {errorFor("project")}
            </label>
            <label className="block text-sm font-bold text-cocoa" htmlFor={fieldId("videos")}>
              How many videos? *
              <select {...fieldProps("videos")} className={inputClass} onChange={(e) => update("videos", e.target.value)}>
                <option value="">Choose</option>
                {videoOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              {errorFor("videos")}
            </label>
            <label className="block text-sm font-bold text-cocoa" htmlFor={fieldId("timeline")}>
              Timeline
              <select {...fieldProps("timeline")} className={inputClass} onChange={(e) => update("timeline", e.target.value)}>
                <option value="">Choose</option>
                {timelineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-bold text-cocoa sm:col-span-2" htmlFor={fieldId("budget")}>
              Budget (USD)
              <select {...fieldProps("budget")} className={inputClass} onChange={(e) => update("budget", e.target.value)}>
                <option value="">Choose</option>
                {budgetOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-bold text-cocoa sm:col-span-2" htmlFor={fieldId("details")}>
              Details
              <textarea
                {...fieldProps("details")}
                rows={4}
                maxLength={1200}
                placeholder="Your product, who it's for, the style you like, where the videos will run, usage rights, and anything else I should know."
                className={`${inputClass} resize-y`}
                onChange={(e) => update("details", e.target.value)}
              />
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-strawberry px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-berry">
              <Mail aria-hidden="true" size={17} />
              Email my brief
            </button>
            <button type="button" onClick={sendOnInstagram} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-matcha px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-matcha-deep">
              <Send aria-hidden="true" size={17} />
              Send on Instagram
            </button>
          </div>

          <div aria-live="polite" className="mt-3 text-center text-sm">
            {status === "emailed" ? (
              <p className="font-bold text-matcha-deep">Your email app is opening with the brief ready to send.</p>
            ) : null}
            {status === "copied" ? (
              <p className="font-bold text-matcha-deep">Brief copied. Paste it into the Instagram chat that just opened.</p>
            ) : null}
            {status === "copy-failed" ? (
              <div className="text-left">
                <p className="font-bold text-strawberry">Copy this brief and paste it into the Instagram chat:</p>
                <textarea readOnly value={briefText(brief)} rows={6} className={`${inputClass} font-mono text-xs`} onFocus={(e) => e.target.select()} />
              </div>
            ) : null}
            {status === "idle" ? (
              <p className="text-xs text-cocoa/60">
                Instagram can&apos;t fill in a message for you, so the brief is copied for you to paste.
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-strawberry-milk pt-5 text-sm">
            <span className="w-full text-center text-xs font-bold uppercase tracking-wide text-cocoa/55">or reach me on</span>
            <a href={profileLinks.upwork} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-strawberry-milk bg-white px-3 py-1.5 font-bold text-cocoa transition hover:border-strawberry">
              <SocialLogo logo="upwork" className="size-5" />
              Upwork
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-strawberry-milk bg-white px-3 py-1.5 font-bold text-cocoa transition hover:border-strawberry">
              <SocialLogo logo="linkedin" className="size-5" />
              LinkedIn
            </a>
            <button type="button" onClick={copyEmail} className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-strawberry-milk bg-white px-3 py-1.5 font-bold text-cocoa transition hover:border-strawberry">
              {emailCopied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
              {emailCopied ? "Email copied" : contactEmail}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
