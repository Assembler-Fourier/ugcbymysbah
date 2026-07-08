import { Play, Replace, Target } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioItems } from "@/data/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-cream py-20 sm:py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Portfolio"
            title="Colorful campaign-ready slots for Misbah’s real UGC work."
            description="Use these slots for TikTok videos, Instagram Reels, product demos, travel clips, testimonials, and ad creative tests."
          />
          <p className="max-w-sm text-sm leading-6 text-muted">
            No fake brand results are shown. Each card is prepared for real
            thumbnails, embedded videos, or hosted short-form examples.
          </p>
        </div>

        {/* Replace placeholder media with Misbah’s real UGC videos/images.
            Add real thumbnails, <video> elements, or linked case studies inside these portfolio cards. */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.7rem] border border-ink/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/5] bg-ink p-5 text-white">
                <div
                  className={`absolute inset-0 opacity-88 ${
                    index % 3 === 0
                      ? "bg-[linear-gradient(135deg,#17120f_0%,#5f375f_44%,#b74362_100%)]"
                      : index % 3 === 1
                        ? "bg-[linear-gradient(135deg,#17120f_0%,#5bb8b0_52%,#6f9c8c_100%)]"
                        : "bg-[linear-gradient(135deg,#17120f_0%,#e07a5f_50%,#ffd166_100%)]"
                  }`}
                />
                <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.11em] backdrop-blur">
                      <Replace aria-hidden="true" size={13} />
                      Replaceable thumbnail
                    </span>
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink">
                      <Play aria-hidden="true" size={18} className="ml-0.5 fill-ink" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-white/62">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight">{item.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <Target aria-hidden="true" size={19} className="mt-0.5 shrink-0 text-rosewood" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">
                      Objective
                    </p>
                    <p className="mt-1 text-sm font-bold leading-6 text-charcoal">
                      {item.objective}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
