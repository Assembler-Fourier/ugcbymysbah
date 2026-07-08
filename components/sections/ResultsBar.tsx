import { ArrowUpRight, BadgeCheck, Star, Target, Users } from "lucide-react";
import { resultStats } from "@/data/site";

const statIcons = [BadgeCheck, Star, Target, Users];

export function ResultsBar() {
  return (
    <section
      aria-labelledby="results-heading"
      className="border-y border-ink/8 bg-[linear-gradient(135deg,#17120f,#5f375f_48%,#b74362)] text-white"
    >
      <div className="container-shell py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p id="results-heading" className="text-sm font-extrabold uppercase tracking-[0.12em] text-white/48">
              Proof points
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/68">
              Lead generation metrics reflect Misbah Ahmad&apos;s outreach
              experience, not UGC campaign performance.
            </p>
          </div>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-1 text-sm font-extrabold text-white transition hover:text-white/76"
          >
            Start a collaboration <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/12 bg-white/[0.08] p-5 shadow-soft backdrop-blur"
              >
                <Icon aria-hidden="true" size={22} className="text-blush" />
                <p className="mt-5 text-3xl font-black tracking-tight">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-white/62">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
