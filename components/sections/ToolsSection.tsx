import { BadgeCheck, Clapperboard, Send, Smartphone, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { tools } from "@/data/site";

const iconCycle = [Smartphone, Clapperboard, Users, Send, Sparkles, BadgeCheck];

export function ToolsSection() {
  return (
    <section id="tools" className="bg-paper py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Tools"
          title="Comfortable across creator platforms, editing workflows, and outreach tools."
          description="A practical stack for short-form creation, campaign preparation, prospect research, and brand collaboration."
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => {
            const Icon = iconCycle[index % iconCycle.length];
            return (
              <div
                key={tool}
                className="inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white px-4 py-3 text-sm font-extrabold text-charcoal shadow-sm"
              >
                <Icon aria-hidden="true" size={16} className="text-rosewood" />
                {tool}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
