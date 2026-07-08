import { Mail, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { mailtoLink } from "@/data/site";

export function CtaSection() {
  return (
    <section id="cta" className="bg-paper py-20 sm:py-24">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#17120f,#b74362_58%,#e07a5f)] p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-blush">
                <Sparkles aria-hidden="true" size={16} />
                Collaborations
              </span>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black tracking-tight sm:text-5xl">
                Need authentic short-form content for your brand?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                Let&apos;s create UGC that looks natural, earns trust, and helps
                your audience take action.
              </p>
            </div>
            <ButtonLink href={mailtoLink} variant="light" className="w-full sm:w-auto">
              <Mail aria-hidden="true" size={18} />
              Email Misbah
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
