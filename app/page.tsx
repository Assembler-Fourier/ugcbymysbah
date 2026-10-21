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
  TestimonialRotator,
  type Testimonial,
} from "@/components/TestimonialRotator";
import {
  CategoryJumpMenu,
  CategoryPortfolio,
  VideoShowcaseProvider,
  type VideoCategory,
  type VideoSample,
} from "@/components/VideoShowcase";
import categoryList from "@/data/categories.json";
import generatedVideoSamples from "@/data/generated-video-manifest.json";
import { serviceGroups, serviceKeywords } from "@/data/services";
import { contactEmail, mailtoLink, profileLinks } from "@/data/site";

const siteUrl = "https://ugcbymysbah.com";

const navItems = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

// Brands without a logo file show their name inside the bubble instead.
const brands: Array<{ name: string; logo?: string; square?: boolean }> = [
  { name: "L'Oréal", logo: "/logos/loreal.svg" },
  { name: "Garnier", logo: "/logos/garnier.png" },
  { name: "Maybelline", logo: "/logos/maybelline.svg" },
  { name: "Essence", logo: "/logos/essence.png" },
  { name: "Miss Rose", logo: "/logos/missrose.png" },
  { name: "Anua", logo: "/logos/anua.jpg", square: true },
  { name: "Pureclans", logo: "/logos/pureclans.png" },
  { name: "Promise Skin", logo: "/logos/promiseskin.png" },
  { name: "inDrive", logo: "/logos/indrive.svg", square: true },
  { name: "Yango", logo: "/logos/yango.png" },
];

const categories = categoryList as VideoCategory[];
const videoSamples = categories.flatMap((category) =>
  (generatedVideoSamples as VideoSample[]).filter(
    (sample) => sample.category === category.id,
  ),
);

const heroStickers = [
  {
    text: "4 years creating UGC",
    className: "left-0 top-[12%] bg-cream text-cocoa",
    tilt: "-6deg",
    delay: "0.55s",
  },
  {
    text: "50+ creative ads",
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

// Verbatim 5-star client reviews from Mysbah's public Upwork profile.
const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Misbah Ahmed has been an absolute pleasure! As a talented UGC creator, Misbah consistently delivers high-quality, engaging content that feels authentic and aligned with the brand’s voice. Their creativity, attention to detail, and ability to understand the target audience really set them apart.",
    project: "TikTok-style UGC video",
    date: "Mar 2026",
  },
  {
    quote:
      "Misbah knows her work and she understood the content real quick. She is very efficient and creative with the ugc videos. I would love to work with her again.",
    project: "UGC videos for new products",
    date: "Nov 2024",
  },
  {
    quote:
      "Misbah understood the task quickly and she made an excellent testimonial within a few minutes. I am truly impressed with her passion and dedication to video creation. I hope to work with her soon",
    project: "Short video testimonial",
    date: "Jan 2025",
  },
  {
    quote: "Great to work with!",
    project: "Video testimonial recording",
    date: "Feb 2025",
  },
];

const strengths = [
  { icon: Zap, text: "Hooks that stop the scroll in 3 seconds" },
  { icon: Heart, text: "Natural, friend-to-friend delivery" },
  { icon: Target, text: "A marketing brain behind every video" },
];


const proofStats = [
  { value: "4 yrs", label: "skincare and beauty" },
  { value: "50+", label: "creative ads" },
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
        "UGC creator with 4 years of experience in skincare and beauty, making product, ASMR, and review videos for organic and paid social campaigns.",
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
        "ASMR UGC",
        "Product UGC",
        ...serviceKeywords,
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
        "Skincare and beauty content",
        "ASMR and product content",
        ...serviceKeywords,
      ],
      sameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Mysbah Ahmad | UGC Creator for Skincare & Beauty Brands",
      description:
        "The official portfolio of Mysbah Ahmad, a UGC creator for skincare, beauty, and product brands.",
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
                    item.href === "#about" ||
                    item.href === "#brands" ||
                    item.href === "#reviews"
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
                  <span className="sm:hidden">Available for UGC work worldwide</span>
                  <span className="hidden sm:inline">
                    Available for UGC and content creation worldwide
                  </span>
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
                  4 years of skincare and beauty videos that feel like a
                  friend&apos;s recommendation.
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
                    className="object-cover"
                  />
                </div>
                <figure className="hero-pop absolute -bottom-8 -right-1 w-[36%] rotate-6 rounded-xl bg-white p-1.5 pb-6 shadow-berry [animation-delay:0.4s] sm:-right-3 sm:p-2 sm:pb-7">
                  <span className="relative block aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src="/images/hero-wink.jpg"
                      alt="Mysbah winking while holding a lip product"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0.5 text-center font-script text-base text-berry sm:bottom-1 sm:text-lg">
                    beauty mode
                  </figcaption>
                </figure>
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
              <ul className="mx-auto mt-10 flex max-w-[22rem] flex-wrap justify-center gap-x-4 gap-y-5 sm:max-w-[42rem] sm:gap-x-6 sm:gap-y-6">
                {brands.map((brand, index) => (
                  <li
                    key={brand.name}
                    data-pop
                    style={{ "--pop-delay": `${index * 60}ms` } as CSSProperties}
                    className="flex w-24 flex-col items-center gap-2 sm:w-28"
                  >
                    <span className="brand-bubble grid size-24 place-items-center rounded-full border-4 border-strawberry-milk bg-white px-3 text-center font-display text-[0.95rem] leading-tight text-berry shadow-soft sm:size-28 sm:text-lg">
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          width={160}
                          height={160}
                          unoptimized
                          className={`h-auto w-auto object-contain ${
                            brand.square
                              ? "max-h-14 max-w-14 sm:max-h-16 sm:max-w-16"
                              : "max-h-8 max-w-[3.9rem] sm:max-h-9 sm:max-w-[4.6rem]"
                          }`}
                        />
                      ) : (
                        brand.name
                      )}
                    </span>
                    <span className="text-center text-[0.7rem] font-bold uppercase tracking-wide text-cocoa/70">
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
            <div data-pop className="container-shell mx-auto max-w-3xl text-center">
              <p className="font-script text-3xl text-berry">hey, I&apos;m Mysbah</p>
              <h2 className="mt-1 font-display text-5xl leading-tight text-matcha-deep sm:text-6xl">
                Videos that feel real and sell
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cocoa/80">
                I&apos;ve spent 4 years making skincare and beauty UGC for
                brands in the US, UK and beyond.
              </p>
              <ul className="mt-8 grid gap-3 text-left sm:grid-cols-3 sm:text-center">
                {strengths.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 font-bold shadow-sm sm:flex-col sm:gap-2 sm:py-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-strawberry text-white">
                      <item.icon aria-hidden="true" size={19} />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div id="reviews" className="container-shell mt-20 scroll-mt-20 sm:mt-24">
              <SectionTitle script="kind words" title="What clients say" />
              <div className="mx-auto mt-10 grid max-w-4xl gap-y-10 [grid-template-areas:'work''quote'] md:grid-cols-[1.8fr_1fr] md:items-start md:gap-x-10 md:[grid-template-areas:'quote_work']">
                <div className="[grid-area:quote]">
                  <TestimonialRotator items={testimonials} />
                </div>

                <figure
                  data-pop
                  className="relative mx-auto w-full max-w-[11rem] rotate-6 self-start rounded-xl bg-white p-2 pb-8 shadow-berry [grid-area:work] sm:p-2.5 sm:pb-9 md:max-w-[15rem]"
                >
                  <span className="relative block aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src="/images/about-working.jpg"
                      alt="Mysbah on a call while working on her laptop"
                      fill
                      sizes="(max-width: 768px) 40vw, 200px"
                      className="object-cover"
                    />
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-1 text-center font-script text-lg text-berry sm:bottom-1.5 sm:text-xl">
                    on set
                  </figcaption>
                </figure>
              </div>
              <div className="mt-10 text-center">
                <a
                  href={profileLinks.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-matcha-deep px-5 text-sm font-bold text-cream transition hover:-translate-y-1 hover:bg-berry"
                >
                  <BadgeCheck aria-hidden="true" size={17} />
                  Read all reviews on Upwork
                </a>
              </div>
            </div>
          </section>

          <section id="services" className="bg-cocoa py-16 text-cream sm:py-20">
            <div className="container-shell">
              <SectionTitle script="what I make" title="My services" light />
              <div className="mx-auto mt-10 max-w-4xl space-y-10">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-center font-display text-2xl text-strawberry-soft sm:text-3xl">
                      {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                      {group.items.map((service, index) => (
                        <li
                          key={service}
                          data-pop
                          style={{ "--pop-delay": `${index * 40}ms` } as CSSProperties}
                          className={`service-pill rounded-full px-4 py-2.5 text-sm font-bold sm:px-5 sm:py-3 ${
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
                ))}
              </div>
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
                UGC creator for skincare, beauty and product brands
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
