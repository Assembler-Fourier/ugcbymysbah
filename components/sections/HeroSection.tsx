import Image from "next/image";
import { BadgeCheck, Mail, Play, Sparkles, Star, Video } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { mailtoLink } from "@/data/site";

const trustBadges = [
  "100+ Short-Form Ad Creatives",
  "5.0★ Upwork Rating",
  "Beauty · Skincare · Lifestyle · Travel",
];

const mediaTiles = [
  {
    label: "Glow demo",
    detail: "Texture · routine · trust",
    tone: "bg-[linear-gradient(135deg,#b74362,#ff8aa1)] text-white",
  },
  {
    label: "Travel story",
    detail: "Arrival · mood · details",
    tone: "bg-[linear-gradient(135deg,#5bb8b0,#6f9c8c)] text-white",
  },
  {
    label: "Unboxing",
    detail: "First look · reaction · CTA",
    tone: "bg-[linear-gradient(135deg,#ffd166,#e07a5f)] text-ink",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="creator-stripes grain overflow-hidden">
      <div className="container-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="rise-in relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rosewood/15 bg-white/84 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-rosewood shadow-sm backdrop-blur">
            <BadgeCheck aria-hidden="true" size={15} />
            Misbah Ahmad · Vibrant UGC Creator
          </div>

          <h1 className="mt-7 text-balance text-5xl font-black leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            UGC Content That Feels Real — And Performs Like Paid Media
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Bright, warm, fun-loving creator energy with strategy behind every
            hook. Misbah creates TikTok, Reels, product demos, testimonials,
            unboxings, and lifestyle content for beauty, skincare, travel, and
            hospitality brands.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={mailtoLink}>
              <Mail aria-hidden="true" size={18} />
              Work With Misbah
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              <Video aria-hidden="true" size={18} />
              View Services
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/82 px-4 py-2 text-sm font-extrabold text-charcoal shadow-sm backdrop-blur"
              >
                <Star aria-hidden="true" size={14} className="fill-gold text-gold" />
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Camera-ready warmth", "Scroll-stopping hooks", "Paid + organic assets"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-ink/8 bg-white/70 px-4 py-3 text-sm font-black text-ink shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[560px] lg:mr-0">
          {/* Replace placeholder media with Misbah’s real UGC videos/images. */}
          <div className="relative grid gap-4 sm:grid-cols-[0.92fr_1fr]">
            <div className="float-soft relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-glow">
              <div className="absolute left-0 top-0 z-10 rounded-br-[1.5rem] bg-[linear-gradient(135deg,#ffd166,#ff8aa1)] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-ink">
                On-camera sparkle
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-linen">
                <Image
                  src="/images/mysbah-main.jpeg"
                  alt="Misbah Ahmad, UGC creator and short-form video specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 88vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-soft backdrop-blur">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-rosewood">
                  Creator media kit
                </p>
                <p className="mt-1 text-sm font-black text-ink">
                  Vibrant, natural, and polished enough for brands that care
                  about trust and conversion.
                </p>
              </div>
            </div>

            <div className="grid content-center gap-4">
              <div className="rounded-[1.75rem] border border-ink/8 bg-[linear-gradient(145deg,#17120f,#5f375f_62%,#b74362)] p-4 text-white shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/55">
                      Short-form ad flow
                    </p>
                    <p className="mt-2 text-2xl font-black">Fun feel. Clear sell.</p>
                  </div>
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-white text-ink">
                    <Play aria-hidden="true" size={20} className="ml-0.5 fill-ink" />
                  </span>
                </div>
                <div className="mt-5 grid gap-2">
                  {["Stop the scroll", "Show the product", "Make action easy"].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white/8 px-3 py-2 text-sm font-bold"
                    >
                      <span>{item}</span>
                      <span className="text-white/50">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {mediaTiles.map((tile) => (
                <div
                  key={tile.label}
                  className="rounded-[1.5rem] border border-ink/8 bg-white p-3 shadow-soft"
                >
                  <div className={`rounded-[1.1rem] p-4 ${tile.tone}`}>
                    <Sparkles aria-hidden="true" size={18} />
                    <p className="mt-4 text-lg font-black">{tile.label}</p>
                    <p className="mt-1 text-sm opacity-80">{tile.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
