import { MessageSquareQuote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonialPlaceholders } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section id="feedback" className="bg-cream py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Ready for verified reviews without inventing fake testimonials."
          description="Replace these placeholders with real client feedback, Upwork reviews, or brand comments when available."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonialPlaceholders.map((placeholder) => (
            <article
              key={placeholder.title}
              className="rounded-[1.5rem] border border-dashed border-ink/18 bg-white p-6 shadow-sm"
            >
              <MessageSquareQuote aria-hidden="true" size={24} className="text-clay" />
              <h3 className="mt-6 text-lg font-black text-ink">{placeholder.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{placeholder.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
