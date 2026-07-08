import { Building2, HeartPulse, Hotel, Leaf, Plane, ShoppingBag, Sparkles, Wand2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { industries } from "@/data/site";

const industryIcons = [Sparkles, Leaf, ShoppingBag, Plane, Hotel, HeartPulse, Building2, Wand2];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-paper py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Best Fit"
          title="For brands that need content to feel human before it sells."
          description="Misbah Ahmad is especially suited to products and experiences where trust, relatability, and visual storytelling matter."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <div
                key={industry}
                className="rounded-[1.35rem] border border-ink/8 bg-white px-5 py-6 text-center shadow-sm"
              >
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-cream text-clay">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <p className="mt-4 text-base font-black text-ink">{industry}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
