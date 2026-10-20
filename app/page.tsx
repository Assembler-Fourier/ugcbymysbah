import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  Heart,
  Mail,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { BookMeButton } from "@/components/BookMeButton";
import { PopInObserver } from "@/components/PopInObserver";
import { SocialLogo, type SocialLogoName } from "@/components/SocialLogo";
import {
  CategoryJumpMenu,
  CategoryPortfolio,
  VideoShowcaseProvider,
  type VideoCategory,
  type VideoSample,
} from "@/components/VideoShowcase";
import categoryList from "@/data/categories.json";
import generatedVideoSamples from "@/data/generated-video-manifest.json";
import { contactEmail, mailtoLink, profileLinks } from "@/data/site";

const siteUrl = "https://ugcbymysbah.com";

const navItems = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const brandLogos = [
  { name: "Pepsi", logo: "/logos/pepsi.png" },
  { name: "L'Oréal", logo: "/logos/loreal.png" },
  { name: "Maybelline", logo: "/logos/maybelline.png" },
  { name: "Anua", logo: "/logos/anua.png" },
  { name: "AccuFix", logo: "/logos/accufix.png" },
  { name: "Agoda", logo: "/logos/agoda.png" },
  { name: "Orbitz", logo: "/logos/orbitz.png" },
  { name: "Yango", logo: "/logos/yango.png" },
  { name: "ReelTodo", logo: "/logos/reeltodo.png" },
  { name: "Hotels & Resorts", logo: "/logos/hotel-resorts.svg" },
];

const categories = categoryList as VideoCategory[];
const videoSamples = categories.flatMap((category) =>
  (generatedVideoSamples as VideoSample[]).filter(
    (sample) => sample.category === category.id,
  ),
);

const heroStickers = [
  {
    text: "3 years creating UGC",
    className: "left-0 top-[12%] bg-cream text-cocoa",
    tilt: "-6deg",
    delay: "0.55s",
  },
  {
    text: "100+ videos made",
    className: "right-0 top-[44%] bg-strawberry text-white",
    tilt: "5deg",
    delay: "0.75s",
  },
  {
    text: "5.0 ★ on Upwork",
    className: "bottom-[8%] left-[4%] bg-cocoa text-cream",
    tilt: "-3deg",
    delay: "0.95s",
  },
];

const strengths = [
  { icon: Zap, text: "Hooks that stop the scroll in 3 seconds" },
  { icon: Heart, text: "Natural, friend-to-friend delivery" },
  { icon: Target, text: "A marketing brain behind every video" },
];

const services = [
  "Product demos",
  "Testimonials",
  "Unboxings",
  "ASMR",
  "Get ready with me",
  "Voiceovers",
  "Paid ad UGC",
  "Hook variations",
];

const proofStats = [
  { value: "3 yrs", label: "creating UGC" },
  { value: "100+", label: "videos made" },
  { value: "5.0 ★", label: "Upwork rating" },
  { value: "100%", label: "job success" },
];

const socialLinks = [
  { label: "Instagram", href: profileLinks.instagram, logo: "instagram" },
  { label: "TikTok", href: profileLinks.tiktok, logo: "tiktok" },
  { label: "LinkedIn", href: profileLinks.linkedin, logo: "linkedin" },
  { label: "Upwork", href: profileLinks.upwork, logo: "upwork" },
] satisfies Array<{ label: string; href: string; logo: SocialLogoName }>;

const sameAs = socialLinks.map((link) => link.href);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#mysbah`,
      name: "Mysbah Ahmad",
      alternateName: ["Mysbah Butt", "UGC by Mysbah"],
      url: siteUrl,
      mainEntityOfPage: { "@id": `${siteUrl}/#profile-page` },
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/00-main-profile-photo.jpeg`,
        contentUrl: `${siteUrl}/images/00-main-profile-photo.jpeg`,
        caption: "Mysbah Ahmad, UGC creator",
      },
      email: contactEmail,
      jobTitle: [
        "UGC Content Creator",
        "Short-Form Video Creator",
        "TikTok and Reels Ad Creator",
      ],
      description:
        "UGC creator with 3 years of experience making beauty, skincare, haircare, wellness, and lifestyle videos for organic and paid social campaigns.",
      contactPoint: {
        "@type": "ContactPoint",
        email: contactEmail,
        contactType: "brand collaborations",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
      sameAs,
      knowsAbout: [
        "User-generated content",
        "TikTok ads",
        "Instagram Reels",
        "Beauty UGC",
        "Skincare UGC",
        "Haircare UGC",
        "Wellness UGC",
        "Lifestyle UGC",
        "Product demo videos",
        "Testimonial videos",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#service`,
      name: "UGC by Mysbah",
      url: siteUrl,
      image: `${siteUrl}/images/00-main-profile-photo.jpeg`,
      founder: { "@id": `${siteUrl}/#mysbah` },
      email: contactEmail,
      areaServed: "Worldwide",
      serviceType: [
        "UGC video creation",
        "TikTok ad creation",
        "Instagram Reels creation",
        "Product demo videos",
        "Beauty, skincare, and haircare content",
        "Wellness and lifestyle content",
      ],
      sameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Mysbah Ahmad | UGC Creator for Beauty, Skincare & Lifestyle Brands",
      description:
        "The official portfolio of Mysbah Ahmad, a UGC creator for beauty, skincare, haircare, wellness, and lifestyle brands.",
      inLanguage: "en",
      mainEntity: { "@id": `${siteUrl}/#mysbah` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "UGC by Mysbah",
      url: siteUrl,
      inLanguage: "en",
      about: { "@id": `${siteUrl}/#mysbah` },
    },
  ],
};

function SectionTitle({
  script,
  title,
  light = false,
}: {
  script: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div data-pop className="text-center">
      <p
        className={`font-script text-2xl sm:text-3xl ${
          light ? "text-strawberry-soft" : "text-matcha"
        }`}
      >
        {script}
      </p>
      <h2
        className={`font-display text-5xl leading-tight sm:text-6xl ${
          light ? "text-cream" : "text-berry"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <VideoShowcaseProvider categories={categories} samples={videoSamples}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PopInObserver />

      <div className="min-h-screen overflow-x-clip">
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[120] -translate-y-24 rounded-full bg-cream px-4 py-3 text-sm font-bold shadow-soft transition focus:translate-y-0"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-50 border-b-4 border-matcha bg-cocoa/95 text-cream backdrop-blur">
          <div className="container-shell flex min-h-14 items-center justify-between gap-4">
            <a
              href="#home"
              className="focus-ring font-display text-3xl italic text-strawberry-milk"
            >
              Mysbah
            </a>
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-5 text-sm font-bold sm:gap-8"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`focus-ring transition hover:text-strawberry-soft ${
                    item.href === "#about" || item.href === "#brands"
                      ? "hidden sm:inline"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <BookMeButton className="focus-ring hidden min-h-10 items-center gap-2 rounded-full bg-strawberry px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-berry sm:inline-flex">
              Book me
            </BookMeButton>
          </div>
        </header>

        <main id="main-content">
          <section
            id="home"
            className="relative overflow-hidden bg-strawberry-milk"
          >
            <span
              aria-hidden="true"
              className="berry-spark absolute right-[6%] top-10 size-10 bg-strawberry sm:size-14"
            />
            <span
              aria-hidden="true"
              className="berry-spark absolute bottom-16 left-[3%] hidden size-8 bg-matcha md:block"
            />

            <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
              <div className="hero-pop">
                <p className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-sm">
                  <span className="size-2 rounded-full bg-matcha shadow-[0_0_0_4px_rgba(94,125,58,0.25)]" />
                  Available for brand collabs
                </p>

                <h1 className="mt-6">
                  <span className="block font-display text-[5.2rem] italic leading-[0.95] text-berry sm:text-[7rem] lg:text-[8rem]">
                    Mysbah
                  </span>
                  <span className="mt-4 block text-4xl font-extrabold uppercase tracking-tight text-cocoa sm:text-5xl">
                    UGC Creator
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-lg font-medium leading-8 text-cocoa/80">
                  3 years of beauty, skincare and lifestyle videos that feel like
                  a friend&apos;s recommendation.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#portfolio"
                    className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-strawberry px-6 text-sm font-bold text-white shadow-berry transition hover:-translate-y-1 hover:bg-berry"
                  >
                    See my work
                    <ArrowRight aria-hidden="true" size={17} />
                  </a>
                  <BookMeButton className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-matcha px-6 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-matcha-deep">
                    <Sparkles aria-hidden="true" size={17} />
                    Book me
                  </BookMeButton>
                </div>

                <div className="mt-7 flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Mysbah on ${link.label}`}
                      className="focus-ring grid size-11 place-items-center rounded-full bg-cream shadow-sm transition hover:-translate-y-1 hover:scale-110"
                    >
                      <SocialLogo logo={link.logo} className="size-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[420px] px-6">
                <div className="hero-pop hero-arch relative aspect-[4/5] overflow-hidden bg-matcha shadow-berry [animation-delay:0.15s]">
                  <Image
                    src="/images/00-main-profile-photo.jpeg"
                    alt="Mysbah Ahmad, UGC creator"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                {heroStickers.map((sticker) => (
                  <span
                    key={sticker.text}
                    style={
                      {
                        "--tilt": sticker.tilt,
                        "--delay": sticker.delay,
                      } as CSSProperties
                    }
                    className={`hero-sticker absolute rounded-full px-4 py-2 text-sm font-bold shadow-soft ${sticker.className}`}
                  >
                    {sticker.text}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="brands" className="bg-cream py-16">
            <div className="container-shell">
              <SectionTitle script="brands I've created for" title="Trusted by" />
              <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
                {brandLogos.map((brand, index) => (
                  <li
                    key={brand.name}
                    data-pop
                    style={{ "--pop-delay": `${index * 60}ms` } as CSSProperties}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="brand-bubble grid size-20 place-items-center rounded-full border-4 border-strawberry-milk bg-white shadow-soft sm:size-24">
                      <Image
                        src={brand.logo}
                        alt=""
                        width={48}
                        height={48}
                        className="h-auto max-h-11 w-auto max-w-12 object-contain"
                      />
                    </span>
                    <span className="text-center text-xs font-bold uppercase tracking-wide text-cocoa/75">
                      {brand.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="portfolio" className="bg-white py-16 sm:py-20">
            <div className="container-shell">
              <SectionTitle script="my work" title="Portfolio" />
              <div className="mt-8">
                <CategoryJumpMenu />
              </div>
              <div className="mt-14">
                <CategoryPortfolio />
              </div>
            </div>
          </section>

          <section id="about" className="bg-matcha-latte py-16 sm:py-20">
            <div className="container-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div data-pop className="relative mx-auto w-[calc(100%-1.5rem)] max-w-sm">
                <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-strawberry" />
                <div className="relative aspect-[4/5] -rotate-2 overflow-hidden rounded-[2rem] border-8 border-cream shadow-soft">
                  <Image
                    src="/images/00-travel-profile-photo.jpeg"
                    alt="Mysbah outdoors on a sunny day"
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div data-pop>
                <p className="font-script text-3xl text-berry">hey, I&apos;m Mysbah</p>
                <h2 className="mt-1 font-display text-5xl leading-tight text-matcha-deep sm:text-6xl">
                  Videos that feel real and sell
                </h2>
                <p className="mt-4 max-w-lg text-lg leading-8 text-cocoa/80">
                  I&apos;ve spent 3 years making UGC for brands in the US, UK and
                  beyond, from skincare launches to apps and hotels.
                </p>
                <ul className="mt-6 space-y-3">
                  {strengths.map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 font-bold shadow-sm"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-strawberry text-white">
                        <item.icon aria-hidden="true" size={19} />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-cocoa py-16 text-cream sm:py-20">
            <div className="container-shell">
              <SectionTitle script="what I make" title="My services" light />
              <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
                {services.map((service, index) => (
                  <li
                    key={service}
                    data-pop
                    style={{ "--pop-delay": `${index * 60}ms` } as CSSProperties}
                    className={`service-pill rounded-full px-5 py-3 text-sm font-bold ${
                      index % 2 === 0
                        ? "bg-strawberry text-white"
                        : "bg-matcha text-white"
                    }`}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-strawberry-milk py-16 sm:py-20">
            <div className="container-shell">
              <SectionTitle script="the numbers" title="Proof it works" />
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                {proofStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    data-pop
                    style={{ "--pop-delay": `${index * 80}ms` } as CSSProperties}
                    className="rounded-3xl border-4 border-cream bg-white p-6 text-center shadow-soft"
                  >
                    <p className="font-display text-4xl text-berry sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wide text-matcha-deep">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href={profileLinks.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-cocoa px-5 text-sm font-bold text-cream transition hover:-translate-y-1 hover:bg-berry"
                >
                  <BadgeCheck aria-hidden="true" size={17} />
                  See my Upwork reviews
                </a>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden bg-matcha-deep py-16 text-cream sm:py-20"
          >
            <span
              aria-hidden="true"
              className="berry-spark absolute right-[8%] top-10 size-12 bg-strawberry"
            />
            <div data-pop className="container-shell text-center">
              <p className="font-script text-3xl text-strawberry-soft">
                let&apos;s create something sweet
              </p>
              <h2 className="mx-auto mt-1 max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
                Ready for your next campaign?
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <BookMeButton className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-strawberry px-7 text-sm font-bold text-white shadow-berry transition hover:-translate-y-1 hover:bg-berry">
                  <Clapperboard aria-hidden="true" size={17} />
                  Book me
                </BookMeButton>
                <a
                  href={mailtoLink}
                  className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-bold text-cocoa transition hover:-translate-y-1 hover:bg-strawberry-milk"
                >
                  <Mail aria-hidden="true" size={17} />
                  {contactEmail}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-cocoa py-10 text-cream">
          <div className="container-shell flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-4xl italic text-strawberry-milk">
                Mysbah
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-cream/70">
                <Star aria-hidden="true" size={14} className="text-strawberry-soft" />
                UGC creator for beauty, skincare and lifestyle brands
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-end">
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Mysbah on ${link.label}`}
                    className="focus-ring grid size-10 place-items-center rounded-full bg-cream transition hover:-translate-y-1"
                  >
                    <SocialLogo logo={link.logo} className="size-5" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-cream/60">
                ugcbymysbah.com · © {currentYear} Mysbah Ahmad
              </p>
            </div>
          </div>
        </footer>
      </div>
    </VideoShowcaseProvider>
  );
}
