import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Check,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Video,
  Wand2,
} from "lucide-react";
import { SocialLogo, type SocialLogoName } from "@/components/SocialLogo";
import {
  FeaturedVideoGrid,
  VideoShowcaseProvider,
  WatchSamplesButton,
  type VideoSample,
} from "@/components/VideoShowcase";
import { contactEmail, mailtoLink } from "@/data/site";
import generatedVideoSamples from "@/data/generated-video-manifest.json";

const siteUrl = "https://ugcbymysbah.com";
const linkedinUrl = "https://www.linkedin.com/in/misbah-ahmad-401076214/";
const upworkUrl = "https://www.upwork.com/freelancers/~010ac3ca797266679e";
const instagramUrl = "https://www.instagram.com/mysbahdoingugc__/";
const tiktokUrl = "https://www.tiktok.com/@mysbah_ugc";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

const brandLogos = [
  { name: "ReelTodo App", label: "Travel app", logo: "/logos/reeltodo.png" },
  { name: "Pepsi", label: "Lifestyle FMCG", logo: "/logos/pepsi.png" },
  { name: "Anua", label: "Skincare", logo: "/logos/anua.png" },
  { name: "L'Oreal", label: "Beauty", logo: "/logos/loreal.png" },
  { name: "Maybelline", label: "Makeup", logo: "/logos/maybelline.png" },
  {
    name: "AccuFix Cosmetics",
    label: "Skincare",
    logo: "/logos/accufix.png",
  },
  { name: "Orbitz", label: "Travel", logo: "/logos/orbitz.png" },
  { name: "Agoda", label: "Hotels", logo: "/logos/agoda.png" },
  {
    name: "Hotel & Resorts",
    label: "Hospitality",
    logo: "/logos/hotel-resorts.svg",
  },
  { name: "Yango", label: "Mobility app", logo: "/logos/yango.png" },
];

const videoSamples = generatedVideoSamples as VideoSample[];

const services = [
  "Paid ad UGC",
  "Product demos",
  "Testimonials",
  "Unboxings",
  "Lifestyle hooks",
  "Travel UGC",
  "Beauty and skincare reels",
  "Creative strategy",
];

const creatorAdvantages = [
  {
    icon: Heart,
    title: "Natural energy",
    body: "Friend-to-friend delivery that feels native to the feed, not read from a brand script.",
  },
  {
    icon: Wand2,
    title: "Hook-first thinking",
    body: "Every concept starts with the first three seconds, the viewer problem, and a clear reason to stay.",
  },
  {
    icon: Camera,
    title: "Camera confidence",
    body: "Expressive, brand-safe delivery across beauty, skincare, lifestyle, travel, apps, and hospitality.",
  },
  {
    icon: Target,
    title: "Marketing instinct",
    body: "Lead generation experience adds audience, offer, and conversion thinking behind every creative choice.",
  },
];

const verifiedProof = [
  {
    icon: Star,
    value: "5.0 (5)",
    label: "Upwork rating",
    text: "A public five-star profile brands can verify directly.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Job Success",
    text: "Upwork's public measure of consistently strong client outcomes.",
  },
  {
    icon: BadgeCheck,
    value: "Rising Talent",
    label: "Upwork status",
    text: "Recognized on Upwork for strong potential and early success.",
  },
  {
    icon: BriefcaseBusiness,
    value: "8",
    label: "Total Upwork jobs",
    text: "A real professional work history beyond social content alone.",
  },
];

const faqItems = [
  {
    question: "What does a UGC creator do for brands?",
    answer:
      "A UGC creator produces natural, platform-ready videos that help a brand explain a product, build trust, and earn attention on TikTok, Instagram Reels, paid social, and product pages.",
  },
  {
    question: "Can Mysbah create UGC for brands outside Pakistan?",
    answer:
      "Yes. Mysbah is based in Pakistan and works remotely with brands worldwide across beauty, skincare, lifestyle, travel, hospitality, and consumer apps.",
  },
  {
    question: "What should brands look for in a UGC creator in Pakistan?",
    answer:
      "Look for relevant samples, natural on-camera delivery, native short-form pacing, reliable public work history, and an understanding of hooks and audience intent. Mysbah brings those creative and marketing skills together.",
  },
];

const socialLinks = [
  { label: "Instagram", href: instagramUrl, logo: "instagram" },
  { label: "TikTok", href: tiktokUrl, logo: "tiktok" },
  { label: "LinkedIn", href: linkedinUrl, logo: "linkedin" },
  { label: "Upwork", href: upworkUrl, logo: "upwork" },
  { label: "Email", href: mailtoLink, logo: "email" },
] satisfies Array<{
  label: string;
  href: string;
  logo: SocialLogoName;
}>;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#mysbah`,
      name: "Mysbah Ahmad",
      alternateName: ["Mysbah Butt", "Misbah Ahmad", "UGC by Mysbah"],
      url: siteUrl,
      mainEntityOfPage: { "@id": `${siteUrl}/#profile-page` },
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/00-main-profile-photo.jpeg`,
        contentUrl: `${siteUrl}/images/00-main-profile-photo.jpeg`,
        caption: "Mysbah Ahmad, UGC creator in Pakistan",
      },
      email: contactEmail,
      jobTitle: [
        "UGC Content Creator",
        "Short-Form Video Creator",
        "TikTok and Reels Ad Creator",
        "Marketing Strategist",
      ],
      description:
        "Pakistan-based beauty, skincare, lifestyle, and travel UGC creator producing short-form videos for organic and paid social campaigns.",
      homeLocation: {
        "@type": "Country",
        name: "Pakistan",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: contactEmail,
        contactType: "brand collaborations",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
      sameAs: [instagramUrl, tiktokUrl, linkedinUrl, upworkUrl],
      knowsAbout: [
        "User-generated content",
        "TikTok ads",
        "Instagram Reels",
        "Beauty UGC",
        "Skincare UGC",
        "Travel UGC",
        "Product demo videos",
        "Testimonial videos",
        "Creative strategy",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "UGC by Mysbah",
      url: siteUrl,
      image: `${siteUrl}/images/00-main-profile-photo.jpeg`,
      founder: { "@id": `${siteUrl}/#mysbah` },
      provider: { "@id": `${siteUrl}/#mysbah` },
      email: contactEmail,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      areaServed: ["Pakistan", "Worldwide"],
      serviceType: [
        "UGC video creation",
        "TikTok ad creation",
        "Instagram Reels creation",
        "Product demo videos",
        "Beauty and skincare content",
        "Travel and hospitality content",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UGC content services",
        itemListElement: [
          "UGC video creation",
          "TikTok and Instagram Reels ads",
          "Product demos and unboxings",
          "Testimonial-style videos",
          "Beauty and skincare UGC",
          "Lifestyle, travel, and hospitality UGC",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            provider: { "@id": `${siteUrl}/#mysbah` },
          },
        })),
      },
      sameAs: [instagramUrl, tiktokUrl, linkedinUrl, upworkUrl],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Mysbah Ahmad | UGC Creator in Pakistan",
      description:
        "The official portfolio of Mysbah Ahmad, a Pakistan-based UGC creator for beauty, skincare, lifestyle, travel, hospitality, and consumer brands.",
      inLanguage: "en-PK",
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
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function LogoTicker() {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <div className="overflow-hidden border-y border-white/12 bg-[#302522] py-7 text-white">
      <p className="text-center text-xs font-black uppercase text-white/72">
        Brands Mysbah has created UGC for
      </p>
      <p className="mx-auto mb-5 mt-2 max-w-2xl px-4 text-center text-xs font-semibold leading-5 text-white/55">
        Plus short-form work for more beauty, lifestyle, travel, app, and
        hospitality brands.
      </p>
      <div className="marquee-window">
        <div className="marquee-track flex w-max gap-4">
          {logos.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              aria-hidden={index >= brandLogos.length}
              className="flex h-[5.75rem] w-52 shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-white/18 bg-white px-4 text-[#17120f] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-1"
            >
              <div className="grid h-11 w-full place-items-center">
                <Image
                  src={brand.logo}
                  alt={index < brandLogos.length ? `${brand.name} logo` : ""}
                  width={140}
                  height={54}
                  className="h-auto w-auto max-h-11 max-w-[8.75rem] object-contain"
                />
              </div>
              <p className="max-w-full truncate text-[0.66rem] font-black uppercase text-[#a23b57]">
                {brand.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProofTicker() {
  const proofItems = [
    "100+ short-form creatives",
    "5.0 (5) Upwork rating",
    "100% Job Success",
    "Rising Talent on Upwork",
    "Beauty and skincare UGC",
    "Lifestyle and travel UGC",
    "TikTok and Reels ad creative",
    "Pakistan based, available worldwide",
  ];
  const items = [...proofItems, ...proofItems];

  return (
    <div className="overflow-hidden bg-[#f6ebe6] py-5">
      <div className="review-marquee flex w-max gap-4">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            aria-hidden={index >= proofItems.length}
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#17120f]/10 bg-white px-5 py-3 text-sm font-black text-[#17120f] shadow-sm"
          >
            <Star
              aria-hidden="true"
              className="fill-[#f6c453] text-[#f6c453]"
              size={16}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
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

      <main className="min-h-screen overflow-x-clip bg-[#f6ebe6] text-[#17120f]">
        <header className="sticky top-0 z-50 border-b-4 border-[#a8c686] bg-[#473b3b]/96 text-white backdrop-blur">
          <div className="container-shell flex min-h-12 items-center justify-between gap-4">
            <a
              href="#home"
              className="focus-ring shrink-0 font-serif text-2xl italic"
            >
              Mysbah
            </a>
            <nav
              aria-label="Main navigation"
              className="flex items-center justify-center gap-4 overflow-x-auto text-xs font-black uppercase sm:gap-7 sm:text-sm"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`focus-ring shrink-0 transition hover:text-[#a8c686] ${
                    item.href === "#services" || item.href === "#proof"
                      ? "hidden sm:inline"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Mysbah on Instagram at @mysbahdoingugc__"
              className="focus-ring hidden min-h-9 shrink-0 items-center gap-2 rounded-full bg-white px-3 text-xs font-black text-[#17120f] transition hover:-translate-y-0.5 hover:bg-[#a8c686] lg:inline-flex"
            >
              <SocialLogo logo="instagram" className="size-5 shrink-0" />
              @mysbahdoingugc__
            </a>
          </div>
        </header>

        <section id="home" className="hero-canvas relative overflow-hidden">
          <span aria-hidden="true" className="hero-spark hero-spark-one" />
          <span aria-hidden="true" className="hero-spark hero-spark-two" />
          <div className="container-shell relative grid gap-9 py-10 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-14">
            <div className="hero-pop min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#17120f]/10 bg-white/92 px-3 py-2 text-xs font-black uppercase shadow-sm">
                <span className="size-2 rounded-full bg-[#76a955] shadow-[0_0_0_4px_rgba(168,198,134,0.3)]" />
                Available for paid collaborations
              </div>

              <h1 className="font-black leading-none">
                <span className="block pb-3 font-serif text-[4rem] font-normal italic leading-[1.04] sm:text-[6.3rem] lg:text-[7.4rem]">
                  Mysbah
                </span>{" "}
                <span className="block text-[4rem] uppercase leading-[0.94] sm:text-[6.3rem] lg:text-[7.4rem]">
                  UGC
                </span>{" "}
                <span className="mt-3 block text-sm uppercase leading-6 text-[#a23b57] sm:text-base">
                  Creator in Pakistan
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-[#665957] sm:text-xl">
                Hey, I&apos;m Mysbah. I create beauty, skincare, lifestyle, and
                travel UGC that feels like a real recommendation and performs
                with the clarity of paid media.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
                <a
                  href={mailtoLink}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a8c686] px-3 text-sm font-black text-[#17120f] shadow-soft transition hover:-translate-y-1 hover:bg-white sm:px-5"
                >
                  <Mail aria-hidden="true" size={18} />
                  Send Brief
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <WatchSamplesButton className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17120f] px-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#a23b57] disabled:cursor-not-allowed disabled:opacity-50 sm:px-5" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks
                  .filter((link) => link.label !== "Email")
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 text-xs font-black shadow-sm transition hover:-translate-y-1 ${
                        link.label === "Instagram"
                          ? "bg-[#17120f] text-white hover:bg-[#a23b57]"
                          : "border border-[#17120f]/10 bg-white text-[#17120f] hover:border-[#a23b57]/40"
                      }`}
                    >
                      <SocialLogo logo={link.logo} className="size-5 shrink-0" />
                      {link.label === "Instagram"
                        ? "@mysbahdoingugc__"
                        : link.label}
                    </a>
                  ))}
              </div>

              <div className="mt-6 flex flex-nowrap gap-3 overflow-x-auto pb-2 text-sm font-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                  <Video aria-hidden="true" size={16} />
                  100+ creatives
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                  <Star
                    aria-hidden="true"
                    size={16}
                    className="fill-[#f6c453] text-[#f6c453]"
                  />
                  5.0 Upwork
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                  <Heart aria-hidden="true" size={16} />
                  100% Job Success
                </span>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                  <MapPin aria-hidden="true" size={16} />
                  Pakistan based, available worldwide
                </span>
              </div>
            </div>

            <div className="hero-portrait relative mx-auto w-full min-w-0 max-w-[455px] md:max-w-[520px]">
              <div className="absolute -right-4 -top-4 size-24 rotate-6 rounded-lg bg-[#a8c686] sm:-right-6 sm:-top-6 sm:size-32" />
              <div className="absolute -bottom-4 -left-4 size-20 -rotate-6 rounded-lg bg-[#ff8aa1] sm:-bottom-6 sm:-left-6 sm:size-28" />
              <div className="relative flex justify-center">
                <div className="portrait-float w-full rotate-[1.5deg] rounded-[1.5rem] bg-[#17120f] p-2.5 shadow-glow transition duration-500 hover:rotate-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.05rem] bg-[#f6ebe6]">
                    <Image
                      src="/images/00-main-profile-photo.jpeg"
                      alt="Mysbah Ahmad, Pakistan-based UGC creator"
                      fill
                      priority
                      sizes="(max-width: 768px) 86vw, 420px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LogoTicker />
          <ProofTicker />
        </section>

        <section id="about" className="reveal-on-scroll bg-[#f6ebe6] py-14">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-black uppercase text-[#a23b57]">
                  UGC creator in Pakistan
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
                  More than a pretty frame. Strategy in every story.
                </h2>
                <p className="mt-5 text-base font-semibold leading-7 text-[#6b5a58] sm:text-lg">
                  Mysbah Ahmad combines natural on-camera storytelling with
                  marketing and lead generation experience. She thinks about
                  the viewer, the hook, the offer, and the action, not only the
                  shot.
                </p>
                <blockquote className="mt-6 border-l-4 border-[#a8c686] pl-5 text-xl font-black leading-8">
                  Content that blends into the feed, then quietly makes people
                  stop, save, click, and remember.
                </blockquote>
              </div>

              <div className="travel-frame relative min-h-[390px] overflow-hidden rounded-2xl bg-[#17120f] shadow-soft sm:min-h-[480px]">
                <Image
                  src="/images/00-travel-profile-photo.jpeg"
                  alt="Mysbah enjoying a scenic travel setting"
                  fill
                  quality={60}
                  sizes="(max-width: 1024px) 94vw, 560px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(23,18,15,0.74)_100%)]" />
                <p className="absolute inset-x-5 bottom-5 text-lg font-black text-white sm:text-2xl">
                  Lifestyle energy. Travel-ready storytelling. Remote worldwide.
                </p>
              </div>
            </div>

            <div className="mt-9 grid grid-cols-2 border-y border-[#17120f]/12 lg:grid-cols-4">
              {creatorAdvantages.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-[#17120f]/12 px-3 py-6 odd:border-r sm:px-5 lg:border-b-0 lg:border-r lg:odd:border-r lg:last:border-r-0"
                >
                  <item.icon
                    aria-hidden="true"
                    size={23}
                    className="text-[#a23b57]"
                  />
                  <h3 className="mt-4 text-base font-black sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-[#6b5a58] sm:text-sm sm:leading-6">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="reveal-on-scroll bg-white py-14">
          <div className="container-shell">
            <div className="mb-9 flex flex-col gap-3 text-center">
              <p className="text-sm font-black uppercase text-[#a23b57]">
                Portfolio
              </p>
              <h2 className="text-5xl font-black sm:text-7xl">
                <span className="font-serif font-normal italic">Real</span> WORK
              </h2>
              <p className="mx-auto max-w-2xl text-sm font-semibold leading-6 text-[#6b5a58]">
                Product-led, personality-led, and native short-form creative
                across lifestyle, beauty, skincare, and travel.
              </p>
            </div>

            <FeaturedVideoGrid />
          </div>
        </section>

        <section id="services" className="reveal-on-scroll bg-[#17120f] py-14 text-white">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#a8c686]">
                Services
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
                Short-form content brands want to watch and can actually use.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <span
                  key={service}
                  className={`service-pill rounded-full border px-5 py-3 text-sm font-black shadow-sm ${
                    index % 3 === 0
                      ? "border-[#ff8aa1]/45 bg-[#ff8aa1]/12"
                      : index % 3 === 1
                        ? "border-[#a8c686]/45 bg-[#a8c686]/12"
                        : "border-white/14 bg-white/8"
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll relative overflow-hidden bg-[#a8c686] py-14">
          <div aria-hidden="true" className="cta-outline" />
          <div className="container-shell relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#473b3b]">
                <Sparkles aria-hidden="true" size={16} />
                Ready for your next brief
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Need authentic short-form content for your brand?
              </h2>
              <p className="mt-3 max-w-2xl text-base font-bold leading-7 text-[#473b3b]">
                Share the product, campaign goal, and timeline. Mysbah will
                reply with the right content direction for the brief.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={mailtoLink}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17120f] px-6 text-sm font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#a23b57]"
              >
                <Mail aria-hidden="true" size={18} />
                Send Your Brief
                <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#17120f]/16 bg-white/84 px-6 text-sm font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <SocialLogo logo="instagram" className="size-5 shrink-0" />
                @mysbahdoingugc__
              </a>
            </div>
          </div>
        </section>

        <section id="proof" className="reveal-on-scroll bg-[#f6ebe6] py-14">
          <div className="container-shell">
            <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase text-[#a23b57]">
                  Verified profile proof
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                  Credibility brands can check in one click.
                </h2>
                <a
                  href={upworkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#17120f] px-5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#a23b57]"
                >
                  View Upwork Profile
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {verifiedProof.map((item) => (
                  <article
                    key={item.label}
                    className="proof-card relative overflow-hidden rounded-lg border border-[#17120f]/7 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-5"
                  >
                    <item.icon
                      aria-hidden="true"
                      size={23}
                      className="text-[#a23b57]"
                    />
                    <p className="mt-5 text-2xl font-black sm:text-3xl">{item.value}</p>
                    <h3 className="mt-1 text-xs font-black uppercase text-[#a23b57] sm:text-sm">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-xs font-semibold leading-5 text-[#6b5a58] sm:text-sm sm:leading-6">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[#17120f]/12 pt-9">
              <p className="text-sm font-black uppercase text-[#a23b57]">
                Quick answers
              </p>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="faq-item group rounded-lg border border-[#17120f]/10 bg-white p-5 shadow-sm open:shadow-soft"
                  >
                    <summary className="focus-ring cursor-pointer list-none pr-7 text-base font-black leading-6">
                      {item.question}
                    </summary>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#6b5a58]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-[#473b3b] py-12 text-white">
          <div className="container-shell flex flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="font-serif text-5xl italic">Mysbah</p>
              <p className="mt-2 text-sm font-black uppercase text-white/66">
                UGC Creator and Marketing Strategist
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/82">
                <Check aria-hidden="true" size={17} className="text-[#a8c686]" />
                Pakistan based, available worldwide
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap justify-center gap-2 md:justify-end">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/16 px-4 text-sm font-black transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <SocialLogo logo={link.logo} className="size-5 shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <a
                  href={mailtoLink}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-[#17120f] transition hover:-translate-y-1 hover:bg-[#a8c686]"
                >
                  <Mail aria-hidden="true" size={18} />
                  {contactEmail}
                </a>
                <WatchSamplesButton className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a8c686] px-5 text-sm font-black text-[#17120f] transition hover:-translate-y-1 hover:bg-white disabled:opacity-50" />
              </div>
              <p className="text-xs font-bold text-white/70 md:text-right">
                ugcbymysbah.com / Copyright {currentYear} Mysbah Ahmad
              </p>
            </div>
          </div>
        </footer>
      </main>
    </VideoShowcaseProvider>
  );
}
