import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-cream py-20 sm:py-24">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader
          eyebrow="Experience"
          title="Content creation, outreach, and pipeline experience in one profile."
          description="Misbah Ahmad brings together creative production and marketing execution across creator, content, and business development roles."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 sm:block" />
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="relative rounded-[1.5rem] border border-ink/8 bg-white p-6 shadow-sm sm:ml-14"
              >
                <span className="absolute -left-[4.25rem] top-6 hidden size-10 items-center justify-center rounded-full border border-ink/10 bg-paper text-rosewood shadow-sm sm:inline-flex">
                  <BriefcaseBusiness aria-hidden="true" size={18} />
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-ink">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm font-extrabold text-rosewood">{item.role}</p>
                  </div>
                  <p className="text-sm font-black text-muted">{item.period}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm leading-6 text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
