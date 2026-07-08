import { BadgeCheck, Brain, Clapperboard, MousePointerClick, Radio, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { mailtoLink, whyMisbah } from "@/data/site";

const icons = [Sparkles, Radio, Clapperboard, Brain, BadgeCheck, MousePointerClick];

export function WhyMisbahSection() {
  return (
    <section
      id="why"
      className="bg-[linear-gradient(145deg,#17120f,#302522_42%,#5f375f)] py-20 text-white sm:py-24"
    >
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Why Misbah"
            title="She brings the spark brands want, then backs it with strategy."
            description="A strong UGC creator has to feel natural on camera while still guiding the viewer toward a decision. That is where Misbah Ahmad stands out."
            tone="dark"
          />
          <div className="mt-8">
            <ButtonLink href={mailtoLink} variant="light">
              Email Misbah
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyMisbah.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div
                key={reason.title}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5"
              >
                <Icon aria-hidden="true" size={22} className="text-blush" />
                <h3 className="mt-5 text-lg font-black text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
