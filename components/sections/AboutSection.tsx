import { Eye, MousePointerClick, Quote, Target } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-24">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="About Misbah"
          title="A vibrant creator presence with marketing strategy underneath."
          description="Misbah Ahmad is a UGC Content Creator and Marketing Strategist who brings bright, fun-loving energy to short-form content for brands that need authentic, scroll-stopping videos."
        />

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
            <Quote aria-hidden="true" size={28} className="text-rosewood" />
            <p className="mt-5 text-2xl font-black leading-tight tracking-tight text-ink">
              Most creators only think about the video. Misbah thinks about the
              viewer, the hook, the offer, and the action.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Vibrant feel",
                body: "Warm, expressive product stories that feel like a real person sharing a real find.",
              },
              {
                icon: Target,
                title: "Audience aware",
                body: "Lead generation experience helps her think clearly about targeting.",
              },
              {
                icon: MousePointerClick,
                title: "Action focused",
                body: "Every concept is shaped around a hook, proof point, and next step.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-ink/8 bg-paper p-5">
                <item.icon aria-hidden="true" size={22} className="text-clay" />
              <h3 className="mt-4 text-base font-black text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </div>
          ))}
        </div>

          <p className="text-lg leading-8 text-muted">
            She has experience creating TikTok and Reels-style ads, product
            demos, testimonials, unboxings, and lifestyle content. Her
            background in lead generation and audience targeting gives her a
            data-driven edge: she understands who the audience is, what they
            care about, and how to create content that makes them act.
          </p>
        </div>
      </div>
    </section>
  );
}
