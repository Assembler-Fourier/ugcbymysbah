import { ArrowRight, ClipboardList, Film, Send, Wand2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { processSteps } from "@/data/site";

const icons = [ClipboardList, Wand2, Film, Send];

export function ProcessSection() {
  return (
    <section id="process" className="bg-paper py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Process"
          title="A clear production flow brands can trust."
          description="Simple inputs, thoughtful planning, polished execution, and delivery-ready assets for organic or paid usage."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article
                key={step.title}
                className="relative rounded-[1.5rem] border border-ink/8 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-cream text-rosewood">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <span className="text-sm font-black text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-black text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                {index < processSteps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    size={20}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-ink/24 lg:block"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
