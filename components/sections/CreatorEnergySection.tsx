import { Camera, Heart, Sparkles, Wand2 } from "lucide-react";

const energyCards = [
  {
    icon: Sparkles,
    title: "Bright first impression",
    body: "A fun-loving, expressive creator presence that fits beauty, skincare, lifestyle, travel, and hospitality content.",
  },
  {
    icon: Camera,
    title: "Natural on camera",
    body: "Content that feels relaxed and real, with enough polish for brand-owned feeds and paid placements.",
  },
  {
    icon: Heart,
    title: "Warm product storytelling",
    body: "Soft trust-building moments for demos, unboxings, testimonials, routines, and experience-led videos.",
  },
  {
    icon: Wand2,
    title: "Strategy behind the sparkle",
    body: "Hooks, audience intent, offer framing, and calls to action are considered before the content is filmed.",
  },
];

export function CreatorEnergySection() {
  return (
    <section className="bg-paper py-16 sm:py-20" aria-labelledby="creator-energy-title">
      <div className="container-shell">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[linear-gradient(135deg,#b74362,#e07a5f_54%,#ffd166)] p-8 text-ink sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-ink/64">
              Creator energy
            </p>
            <h2
              id="creator-energy-title"
              className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl"
            >
              Vibrant, warm, and made for the scroll.
            </h2>
            <p className="mt-5 text-lg font-bold leading-8 text-ink/74">
              Misbah Ahmad should feel like the friend who makes a product easy
              to trust, while giving the brand content that is structured enough
              to use.
            </p>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
            {energyCards.map((card) => (
              <article key={card.title} className="rounded-[1.35rem] bg-cream p-5">
                <card.icon aria-hidden="true" size={23} className="text-rosewood" />
                <h3 className="mt-5 text-lg font-black text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
