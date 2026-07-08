import Link from "next/link";
import { ArrowUpRight, Mail, Network, Sparkles } from "lucide-react";
import { contactEmail, mailtoLink, socialLinks } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="min-w-0">
          <span className="section-kicker">
            <Sparkles aria-hidden="true" size={14} />
            Contact
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Brands can reach Misbah Ahmad directly.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Send a brief, product category, timeline, deliverables, and usage
            needs. Misbah is based in Pakistan and open to remote collaborations
            worldwide.
          </p>
          {/* Optional hidden phone section can be added here later if Misbah Ahmad chooses to show a phone number publicly. */}
        </div>

        <div className="min-w-0 rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
          <Link
            href={mailtoLink}
            className="focus-ring flex flex-col gap-3 rounded-[1.4rem] bg-ink p-6 text-white transition hover:bg-charcoal sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white/54">
                <Mail aria-hidden="true" size={16} />
                Email
              </span>
              <span className="mt-2 block break-words text-xl font-black">
                {contactEmail}
              </span>
            </span>
            <ArrowUpRight aria-hidden="true" size={24} />
          </Link>

          {/* Replace "#" with Misbah Ahmad's real LinkedIn, Upwork, and portfolio URLs. */}
          <div className="mt-5 grid gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="focus-ring flex items-center justify-between rounded-2xl border border-ink/8 bg-paper px-4 py-4 text-sm font-extrabold text-charcoal transition hover:border-ink/20 hover:bg-white"
              >
                <span className="flex items-center gap-2">
                  {link.label === "LinkedIn" ? (
                    <Network aria-hidden="true" size={17} className="text-rosewood" />
                  ) : (
                    <Sparkles aria-hidden="true" size={17} className="text-rosewood" />
                  )}
                  {link.label}
                </span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
