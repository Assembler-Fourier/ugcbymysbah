import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleCheck,
  ExternalLink,
  Eye,
  Film,
  Globe2,
  Heart,
  Mail,
  MessageCircleMore,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Video,
  WandSparkles,
} from "lucide-react";
import { SocialLogo, type SocialLogoName } from "@/components/SocialLogo";
import { ConceptNavbar } from "@/components/ConceptNavbar";
import {
  PortfolioGallery,
  SampleTrigger,
  VideoShowcaseProvider,
  WatchSamplesButton,
  type VideoSample,
} from "@/components/VideoShowcase";
import { contactEmail, mailtoLink } from "@/data/site";
import generatedVideoSamples from "@/data/generated-video-manifest.json";

const canonicalUrl = "https://ugcbymysbah.com";
const linkedinUrl = "https://www.linkedin.com/in/misbah-ahmad-401076214/";
const upworkUrl = "https://www.upwork.com/freelancers/~010ac3ca797266679e";
const instagramUrl = "https://www.instagram.com/mysbahdoingugc__/";
const tiktokUrl = "https://www.tiktok.com/@mysbah_ugc";

const brandLogos = [
  { name: "ReelTodo", logo: "/logos/reeltodo.png" },
  { name: "Pepsi", logo: "/logos/pepsi.png" },
  { name: "Anua", logo: "/logos/anua.png" },
  { name: "L'Oreal", logo: "/logos/loreal.png" },
  { name: "Maybelline", logo: "/logos/maybelline.png" },
  { name: "AccuFix Cosmetics", logo: "/logos/accufix.png" },
  { name: "Orbitz", logo: "/logos/orbitz.png" },
  { name: "Agoda", logo: "/logos/agoda.png" },
  { name: "Hotel & Resorts", logo: "/logos/hotel-resorts.svg" },
  { name: "Yango", logo: "/logos/yango.png" },
];

const videoSamples = generatedVideoSamples as VideoSample[];

const proofPoints = [
  {
    icon: Video,
    value: "100+",
    label: "short-form creatives",
  },
  {
    icon: Star,
    value: "5.0 (5)",
    label: "public Upwork rating",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Upwork Job Success",
  },
  {
    icon: BadgeCheck,
    value: "Rising Talent",
    label: "verified Upwork status",
  },
];

const creativeSystem = [
  {
    number: "01",
    icon: Eye,
    title: "Insight",
    body: "Start with the audience tension, product truth, and single message the viewer needs to remember.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Hook",
    body: "Build an opening that earns attention quickly without making the creator voice feel scripted.",
  },
  {
    number: "03",
    icon: Film,
    title: "Story",
    body: "Turn the message into natural on-camera delivery, useful product detail, and social-native pacing.",
  },
  {
    number: "04",
    icon: Target,
    title: "Action",
    body: "Close with a clear next step and deliver the versions agreed for the campaign and channel.",
  },
];

const engagementStyles = [
  {
    eyebrow: "One clear brief",
    title: "Signature creative",
    body: "For a brand with a defined product and message that needs one polished, creator-led vertical asset.",
    features: [
      "Concept and script support",
      "On-camera filming and edit",
      "Captions and platform-ready delivery",
    ],
  },
  {
    eyebrow: "More angles to learn from",
    title: "Creative testing set",
    body: "For paid teams that want one strong idea shaped into distinct openings, messages, or calls to action.",
    features: [
      "Hook and angle variations",
      "Consistent core story",
      "Usage scope agreed per brief",
    ],
    featured: true,
  },
  {
    eyebrow: "A steadier content rhythm",
    title: "Ongoing creative partner",
    body: "For teams that need recurring creator-led content across social, launches, and performance campaigns.",
    features: [
      "Repeatable content planning",
      "A mix of formats and concepts",
      "Custom monthly scope",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share the brief",
    body: "Send the product, audience, campaign goal, platform, deliverables, timing, and reference links you already have.",
  },
  {
    number: "02",
    title: "Shape the concept",
    body: "Mysbah aligns the angle, hook, story, call to action, and the exact files and usage the campaign needs.",
  },
  {
    number: "03",
    title: "Create and refine",
    body: "The content is filmed and edited in a natural creator voice, then refined through the agreed feedback round.",
  },
  {
    number: "04",
    title: "Deliver campaign-ready",
    body: "Receive the agreed vertical assets, versions, and usage scope in a handoff your team can put to work.",
  },
];

const faqItems = [
  {
    question: "What can Mysbah create?",
    answer:
      "Creator-led paid ads, product demos, testimonials, unboxings, beauty and skincare routines, lifestyle hooks, travel stories, voiceovers, and organic social content. The exact mix is shaped around the campaign brief.",
  },
  {
    question: "Is this UGC creation or influencer posting?",
    answer:
      "The core service is UGC asset creation for a brand's own organic, paid, and product channels. Creator posting or audience access is separate and only included when it is specifically agreed.",
  },
  {
    question: "Can the content be used in paid ads?",
    answer:
      "Yes, when paid usage is included in the project scope. Channel, term, Spark Ads or Partnership Ads access, raw footage, edits, and any exclusivity should be agreed before production begins.",
  },
  {
    question: "Are raw files and extra versions available?",
    answer:
      "They can be. Raw footage, additional hooks, alternate calls to action, resizes, and clean versions are scoped as needed rather than assumed in every project.",
  },
  {
    question: "What is the turnaround time?",
    answer:
      "Timing depends on the brief, product delivery, concept complexity, and number of assets. Mysbah confirms the working timeline before the project starts so expectations stay clear.",
  },
  {
    question: "What should I include in the first message?",
    answer:
      "Your brand and product, target audience, campaign goal, intended platform, desired deliverables, deadline, paid-usage needs, and any reference creative. A rough brief is enough to begin.",
  },
];

const socialLinks = [
  { label: "Instagram", href: instagramUrl, logo: "instagram" },
  { label: "TikTok", href: tiktokUrl, logo: "tiktok" },
  { label: "LinkedIn", href: linkedinUrl, logo: "linkedin" },
  { label: "Upwork", href: upworkUrl, logo: "upwork" },
] satisfies Array<{
  label: string;
  href: string;
  logo: SocialLogoName;
}>;

const scopeAddOns = [
  "Raw footage",
  "Extra hooks",
  "Alternate CTAs",
  "Paid usage",
  "Spark / Partnership Ads",
  "Resizes",
  "Still frames",
];

const aboutFeatures = [
  { icon: Heart, label: "Friend-to-friend delivery" },
  { icon: Target, label: "Audience and offer thinking" },
  { icon: Globe2, label: "Remote brand collaborations" },
  { icon: BriefcaseBusiness, label: "Professional work history" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${canonicalUrl}/#mysbah`,
      name: "Mysbah Ahmad",
      alternateName: ["Mysbah Butt", "Misbah Ahmad", "UGC by Mysbah"],
      url: canonicalUrl,
      image: `${canonicalUrl}/images/00-main-profile-photo.jpeg`,
      email: contactEmail,
      jobTitle: ["UGC Creator", "Short-Form Video Creator", "Marketing Strategist"],
      description:
        "Creator-led beauty, skincare, lifestyle, and travel UGC for organic social, paid campaigns, and product pages.",
      sameAs: [instagramUrl, tiktokUrl, linkedinUrl, upworkUrl],
      knowsAbout: [
        "User-generated content",
        "Short-form video",
        "TikTok ads",
        "Instagram Reels",
        "Product demos",
        "Creative strategy",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${canonicalUrl}/#studio`,
      name: "UGC by Mysbah",
      url: canonicalUrl,
      founder: { "@id": `${canonicalUrl}/#mysbah` },
      email: contactEmail,
      areaServed: "Worldwide",
      serviceType: [
        "UGC video creation",
        "Paid social creative",
        "Instagram Reels and TikTok content",
        "Product demos and testimonials",
        "Creative strategy",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

function BrandWall() {
  return (
    <section aria-labelledby="brand-wall-title" className="border-y border-[#171513]/10 bg-white">
      <div className="container-shell py-8 sm:py-10">
        <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="eyebrow">Brands featured in selected work</p>
            <h2 id="brand-wall-title" className="mt-2 text-2xl font-black sm:text-3xl">
              A portfolio across beauty, lifestyle, travel, and apps.
            </h2>
          </div>
          <p className="text-xs font-bold text-[#756a63]">Existing portfolio selection · No invented campaign metrics</p>
        </div>
        <div className="brand-wall mt-7">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="brand-tile">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={138}
                height={48}
                className="h-auto max-h-9 w-auto max-w-[7.5rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <VideoShowcaseProvider samples={videoSamples}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen overflow-x-clip bg-[#f6f1ea] text-[#171513]">
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[120] -translate-y-24 rounded-full bg-white px-4 py-3 text-sm font-black shadow-xl transition focus:translate-y-0"
        >
          Skip to content
        </a>

        <ConceptNavbar />

        <main id="main-content" tabIndex={-1}>
          <section id="home" className="concept-hero relative overflow-hidden">
            <div className="hero-grid-lines" aria-hidden="true" />
            <div className="container-shell relative grid gap-12 py-12 md:grid-cols-[1.03fr_0.97fr] md:items-center md:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-16">
              <div className="hero-copy relative z-10">
                <div className="availability-badge">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8e304f] opacity-40" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#8e304f]" />
                  </span>
                  Available for paid collaborations
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#8e304f]">
                  Creator-led content · Brand-minded strategy
                </p>
                <h1 className="mt-4 max-w-4xl text-[clamp(3.7rem,7vw,6.25rem)] font-black leading-[0.86] tracking-[-0.065em]">
                  UGC that feels
                  <span className="block font-serif font-normal italic tracking-[-0.04em] text-[#8e304f]">
                    human.
                  </span>
                  Works hard.
                </h1>
                <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-[#655b55] sm:text-lg sm:leading-8">
                  Mysbah creates social-native beauty, skincare, lifestyle, and travel content with natural delivery, a sharp hook, and a clear job to do.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <WatchSamplesButton className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d7f36a] px-6 text-sm font-black text-[#171513] shadow-[0_14px_40px_rgba(121,143,37,0.2)] transition hover:-translate-y-1 hover:bg-white" />
                  <a
                    href={mailtoLink}
                    className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#171513]/14 bg-white px-6 text-sm font-black transition hover:-translate-y-1 hover:border-[#8e304f]/40"
                  >
                    Send a brief
                    <ArrowDownRight aria-hidden="true" size={18} />
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#171513]/12 pt-6">
                  <div>
                    <p className="text-2xl font-black sm:text-3xl">100+</p>
                    <p className="mt-1 text-[0.68rem] font-black uppercase leading-4 tracking-[0.08em] text-[#756a63]">Creatives</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black sm:text-3xl">5.0</p>
                    <p className="mt-1 text-[0.68rem] font-black uppercase leading-4 tracking-[0.08em] text-[#756a63]">Upwork rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black sm:text-3xl">100%</p>
                    <p className="mt-1 text-[0.68rem] font-black uppercase leading-4 tracking-[0.08em] text-[#756a63]">Job Success</p>
                  </div>
                </div>
              </div>

              <div className="hero-studio relative mx-auto w-full max-w-[34rem]">
                <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
                <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

                <div className="relative ml-auto w-[82%] rotate-[1.5deg] overflow-hidden rounded-[1.8rem] bg-[#171513] p-2 shadow-[0_32px_90px_rgba(70,45,39,0.25)]">
                  <div className="relative aspect-[9/14] overflow-hidden rounded-[1.35rem] bg-[#d8cec5]">
                    <Image
                      src="/images/video-posters/08-Maybelline Super Stay Foundation Review.jpg"
                      alt="Maybelline foundation review UGC by Mysbah"
                      fill
                      fetchPriority="high"
                      sizes="(max-width: 767px) 50vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-transparent to-black/10" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white">
                      <span className="rounded-full bg-[#171513]/75 px-3 py-2 backdrop-blur">Beauty · Review</span>
                      <span>08 / 08</span>
                    </div>
                    <SampleTrigger
                      index={7}
                      label="Play featured edit — Maybelline foundation review sample"
                      className="focus-ring absolute bottom-4 left-4 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-4 text-sm font-black text-[#171513] shadow-lg transition hover:-translate-y-1 hover:bg-[#d7f36a]"
                    >
                      <span className="grid size-8 place-items-center rounded-full bg-[#d7f36a]">
                        <Play aria-hidden="true" className="ml-0.5 fill-current" size={15} />
                      </span>
                      Play featured edit
                    </SampleTrigger>
                  </div>
                </div>

                <div className="hero-polaroid absolute -left-1 bottom-8 w-[36%] -rotate-[6deg] rounded-[1.1rem] bg-white p-2 shadow-[0_20px_55px_rgba(70,45,39,0.24)] sm:-left-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[0.75rem] bg-[#d9cfc5]">
                    <Image
                      src="/images/00-main-profile-photo.jpeg"
                      alt="Mysbah Ahmad"
                      fill
                      loading="eager"
                      sizes="(max-width: 639px) 121px, 180px"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-1 pb-1 pt-2 text-center font-serif text-sm italic sm:text-base">Creator + strategist</p>
                </div>

                <div className="absolute -right-1 top-8 rotate-[5deg] rounded-2xl bg-[#f58ba4] px-4 py-3 text-center shadow-lg sm:-right-4">
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.14em]">Best for</p>
                  <p className="mt-1 text-sm font-black">Paid + organic</p>
                </div>
              </div>
            </div>
          </section>

          <BrandWall />

          <section id="work" className="section-pad bg-[#f6f1ea]">
            <div className="container-shell">
              <div className="section-heading-grid">
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h2 className="section-title mt-3">
                    Don&apos;t take the pitch.
                    <span className="block font-serif font-normal italic text-[#8e304f]">Watch the work.</span>
                  </h2>
                </div>
                <div className="max-w-lg lg:pt-9">
                  <p className="text-base font-semibold leading-7 text-[#655b55]">
                    Filter by creative lane, then open any sample. Every video stays in its original form with user-controlled playback and optional captions where available.
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-[#8e304f]">
                    <CircleCheck aria-hidden="true" size={16} />
                    Eight real, vertical samples
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <PortfolioGallery />
              </div>
            </div>
          </section>

          <section className="section-pad overflow-hidden bg-[#171513] text-white">
            <div className="container-shell">
              <div className="section-heading-grid">
                <div>
                  <p className="eyebrow eyebrow-on-dark">Creative thinking</p>
                  <h2 className="section-title mt-3 text-white">
                    One message.
                    <span className="block font-serif font-normal italic text-[#f58ba4]">A whole creative system.</span>
                  </h2>
                </div>
                <p className="max-w-lg text-base font-semibold leading-7 text-white/60 lg:pt-9">
                  The polished part is what viewers see. Behind it is a deliberate path from audience insight to the hook, the story, and the action.
                </p>
              </div>

              <div className="creative-system mt-12">
                {creativeSystem.map((item, index) => (
                  <article key={item.title} className="creative-step">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-black tracking-[0.16em] text-white/70">{item.number}</span>
                      <item.icon aria-hidden="true" className="text-[#d7f36a]" size={22} />
                    </div>
                    <h3 className="mt-10 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/56">{item.body}</p>
                    {index < creativeSystem.length - 1 ? (
                      <ChevronRight aria-hidden="true" className="creative-arrow" size={20} />
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="mt-8 grid gap-4 rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-7">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#f58ba4] text-[#171513]">
                  <WandSparkles aria-hidden="true" size={25} />
                </div>
                <div>
                  <h3 className="text-lg font-black">Built to give brands useful options</h3>
                  <p className="mt-1 text-sm font-semibold leading-6 text-white/58">
                    A brief can become a core concept plus alternate openings, calls to action, and clean versions—only when those deliverables make sense and are agreed in scope.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section-pad bg-white">
            <div className="container-shell">
              <div className="section-heading-grid">
                <div>
                  <p className="eyebrow">Ways to work together</p>
                  <h2 className="section-title mt-3">A clear fit for the brief you actually have.</h2>
                </div>
                <div className="max-w-lg lg:pt-9">
                  <p className="text-base font-semibold leading-7 text-[#655b55]">
                    Choose a starting point, then tailor the creative, versions, timing, and usage to your campaign. Pricing is quoted after the scope is clear.
                  </p>
                  <a href={mailtoLink} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-black text-[#8e304f] underline decoration-[#f58ba4] decoration-2 underline-offset-4">
                    Request a tailored quote <ArrowRight aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-11 grid gap-4 lg:grid-cols-3">
                {engagementStyles.map((item, index) => (
                  <article key={item.title} className={`service-card ${item.featured ? "service-card-featured" : ""}`}>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#8e304f]">{item.eyebrow}</p>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#171513]/10 text-xs font-black">0{index + 1}</span>
                    </div>
                    <h3 className="mt-10 text-3xl font-black leading-tight">{item.title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#655b55]">{item.body}</p>
                    <ul className="mt-8 grid gap-3 border-t border-[#171513]/10 pt-6">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm font-bold">
                          <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[#8e304f]" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {scopeAddOns.map((item) => (
                  <span key={item} className="rounded-full border border-[#171513]/10 bg-[#f6f1ea] px-4 py-2.5 text-xs font-black text-[#5f5651]">
                    {item} · scoped as needed
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="proof" className="section-pad bg-[#eadfd5]">
            <div className="container-shell">
              <div className="section-heading-grid">
                <div>
                  <p className="eyebrow">Proof you can verify</p>
                  <h2 className="section-title mt-3">
                    Real signals.
                    <span className="block font-serif font-normal italic text-[#8e304f]">Clearly sourced.</span>
                  </h2>
                </div>
                <div className="max-w-lg lg:pt-9">
                  <p className="text-base font-semibold leading-7 text-[#655b55]">
                    When private campaign performance is not available to publish, credibility should come from attributable work history—not invented numbers.
                  </p>
                  <a
                    href={upworkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171513] px-5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#8e304f]"
                  >
                    Verify on Upwork
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {proofPoints.map((item) => (
                  <article key={item.label} className="proof-stat">
                    <item.icon aria-hidden="true" size={22} className="text-[#8e304f]" />
                    <p className="mt-8 text-[clamp(1.6rem,3vw,2.7rem)] font-black leading-none tracking-[-0.04em]">{item.value}</p>
                    <p className="mt-3 text-xs font-black uppercase leading-5 tracking-[0.08em] text-[#756a63]">{item.label}</p>
                  </article>
                ))}
              </div>

              <div className="mt-4 grid gap-4 rounded-[1.6rem] bg-[#8e304f] p-6 text-white md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
                <Quote aria-hidden="true" size={38} className="text-[#d7f36a]" />
                <div>
                  <p className="text-xl font-black leading-snug sm:text-2xl">The strongest proof is still the work itself.</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/72">Watch the portfolio, check the public profile, then send the product and goal.</p>
                </div>
                <a href="#work" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-[#171513] transition hover:-translate-y-1 hover:bg-[#d7f36a]">
                  See the work <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
          </section>

          <section id="process" className="section-pad bg-[#f6f1ea]">
            <div className="container-shell">
              <div className="max-w-3xl">
                <p className="eyebrow">A simple working rhythm</p>
                <h2 className="section-title mt-3">From rough brief to ready-to-use creative.</h2>
              </div>

              <ol className="process-grid mt-12">
                {processSteps.map((step) => (
                  <li key={step.number} className="process-step">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 place-items-center rounded-full bg-[#171513] text-xs font-black text-white">{step.number}</span>
                      <div className="h-px flex-1 bg-[#171513]/12" />
                    </div>
                    <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[#655b55]">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="about" className="section-pad bg-[#f58ba4]">
            <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="about-collage relative min-h-[31rem] sm:min-h-[38rem]">
                <div className="absolute inset-y-0 left-0 w-[78%] -rotate-2 overflow-hidden rounded-[1.8rem] bg-[#171513] p-2 shadow-[0_30px_80px_rgba(70,27,42,0.25)]">
                  <div className="relative h-full overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/images/00-travel-profile-photo.jpeg"
                      alt="Mysbah creating lifestyle and travel content"
                      fill
                      quality={75}
                      sizes="(max-width: 1023px) 75vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-8 right-0 w-[44%] rotate-6 rounded-[1.2rem] bg-[#d7f36a] p-3 shadow-xl">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[0.85rem]">
                    <Image
                      src="/images/video-posters/07-Rare Beauty ASMR.jpg"
                      alt="Rare Beauty ASMR UGC still"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-1 pt-3 text-center text-xs font-black uppercase tracking-[0.08em]">Beauty · detail · feel</p>
                </div>
              </div>

              <div>
                <p className="eyebrow eyebrow-on-pink">Meet Mysbah</p>
                <h2 className="section-title mt-3">
                  Natural on camera.
                  <span className="block font-serif font-normal italic">Strategic behind it.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-[#392a2d]">
                  Mysbah brings creator instinct and marketing experience into the same frame. She understands the difference between content that simply looks polished and content that gives a brand a clear message, usable format, and reason to keep testing.
                </p>
                <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#51383e]">
                  Her portfolio spans beauty, skincare, lifestyle, travel, hospitality, and consumer apps—with warm delivery that feels closer to a recommendation than a commercial read.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {aboutFeatures.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3 rounded-2xl bg-white/68 p-4 text-sm font-black backdrop-blur">
                      <feature.icon aria-hidden="true" size={19} />
                      {feature.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="section-pad bg-white">
            <div className="container-shell grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">Before you brief</p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Clear answers make better projects.</h2>
                <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-[#655b55]">
                  Specific inclusions, licensing, revisions, and timing are confirmed for each scope. These answers explain the starting point.
                </p>
              </div>

              <div className="divide-y divide-[#171513]/10 border-y border-[#171513]/10">
                {faqItems.map((item) => (
                  <details key={item.question} className="faq-item group py-1">
                    <summary className="focus-ring flex min-h-20 list-none items-center justify-between gap-5 rounded-lg py-5 text-left text-lg font-black sm:text-xl">
                      <span>{item.question}</span>
                      <span className="faq-plus grid size-9 shrink-0 place-items-center rounded-full bg-[#f6f1ea] text-[#8e304f]" aria-hidden="true">+</span>
                    </summary>
                    <p className="max-w-2xl pb-6 pr-12 text-sm font-semibold leading-7 text-[#655b55] sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section overflow-hidden bg-[#171513] text-white">
            <div className="contact-glow" aria-hidden="true" />
            <div className="container-shell relative py-16 text-center sm:py-24">
              <p className="eyebrow eyebrow-on-dark justify-center">Your next creator brief</p>
              <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.86] tracking-[-0.065em]">
                Let&apos;s make the next scroll
                <span className="block font-serif font-normal italic text-[#f58ba4]">stop here.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base font-semibold leading-7 text-white/62 sm:text-lg">
                Send the brand, product, campaign goal, platform, deliverables, timing, and any reference creative. A rough brief is enough to start.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={mailtoLink} className="focus-ring inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#d7f36a] px-7 text-sm font-black text-[#171513] transition hover:-translate-y-1 hover:bg-white sm:w-auto">
                  <Mail aria-hidden="true" size={19} />
                  Start a project
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/16 px-7 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#171513] sm:w-auto">
                  <MessageCircleMore aria-hidden="true" size={19} />
                  Talk on Instagram
                </a>
              </div>
              <p className="mt-6 text-sm font-bold text-white/52">{contactEmail}</p>
            </div>
          </section>
        </main>

        <footer className="bg-[#171513] text-white">
          <div className="container-shell border-t border-white/10 py-8">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <a href="#home" className="focus-ring logo-lockup inline-flex rounded-md text-white">
                  <span className="logo-kicker bg-[#d7f36a] text-[#171513]">UGC</span>
                  <span className="logo-script">by Mysbah</span>
                </a>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-white/70">Creator-led content · Brand-minded strategy</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`Visit Mysbah on ${link.label}`} className="focus-ring grid size-11 place-items-center rounded-full border border-white/14 text-white/70 transition hover:-translate-y-1 hover:bg-white hover:text-[#171513]">
                    <SocialLogo logo={link.logo} className="size-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs font-bold text-white/65 sm:flex-row sm:items-center sm:justify-between">
              <p>© {currentYear} UGC by Mysbah</p>
              <p>Original portfolio media · Remote collaborations</p>
            </div>
          </div>
        </footer>

        <a href={mailtoLink} className="focus-ring mobile-brief-cta fixed inset-x-3 bottom-3 z-40 min-h-13 items-center justify-center gap-2 rounded-full bg-[#d7f36a] px-5 text-sm font-black text-[#171513] shadow-[0_18px_50px_rgba(23,21,19,0.3)] sm:hidden">
          <Mail aria-hidden="true" size={18} />
          Start a project
          <ArrowRight aria-hidden="true" size={17} />
        </a>
      </div>
    </VideoShowcaseProvider>
  );
}
