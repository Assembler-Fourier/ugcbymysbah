import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { contentTypes } from "@/data/site";

export function ContentTypesSection() {
  return (
    <section id="content-types" className="bg-cream py-20 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          eyebrow="Content Types"
          title="Built for the way people actually watch, compare, and buy."
          description="Misbah Ahmad creates short-form video concepts that can work across organic social, paid social, and product education."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {contentTypes.map((type) => (
            <div
              key={type}
              className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-white px-4 py-4 shadow-sm"
            >
              <CheckCircle2
                aria-hidden="true"
                size={20}
                className="mt-0.5 shrink-0 text-sage"
              />
              <p className="text-sm font-extrabold leading-6 text-charcoal">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
