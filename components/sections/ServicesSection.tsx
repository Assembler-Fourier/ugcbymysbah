import {
  Brain,
  Heart,
  Megaphone,
  MessageSquareQuote,
  Network,
  PackageOpen,
  Plane,
  Sparkles,
  Video,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/site";

const icons = [
  Video,
  Megaphone,
  Sparkles,
  MessageSquareQuote,
  PackageOpen,
  Plane,
  Heart,
  Brain,
  Network,
];

export function ServicesSection() {
  const accents = [
    "from-rosewood to-blush",
    "from-plum to-rosewood",
    "from-clay to-gold",
    "from-sage to-aqua",
    "from-gold to-clay",
    "from-aqua to-sage",
    "from-blush to-clay",
    "from-ink to-plum",
    "from-sage to-rosewood",
  ];

  return (
    <section id="services" className="bg-paper py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Services"
          title="UGC assets with personality, polish, and a reason to click."
          description="From creative strategy to short-form production, Misbah Ahmad helps brands turn product moments into content that feels bright, natural, and native in-feed."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[1.5rem] border border-ink/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className={`h-2 bg-gradient-to-r ${accents[index]}`} />
                <div className="p-6">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-cream text-rosewood transition group-hover:bg-ink group-hover:text-white">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
