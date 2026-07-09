import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Play,
  Star,
  Video,
  Wand2,
} from "lucide-react";
import { contactEmail, mailtoLink } from "@/data/site";
import portfolioItems from "@/data/portfolio-items.json";

const navItems = [
  { label: "Contact", href: "#contact" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
];

const linkedinUrl = "https://www.linkedin.com/in/misbah-ahmad-401076214/";
const upworkUrl =
  "https://www.upwork.com/freelancers/~010ac3ca797266679e";
const bookCallLink =
  "mailto:misbahahmad152@gmail.com?subject=Book%20a%20Call%20with%20Mysbah";
const whatsappUrl = "https://wa.me/923104371263";
const whatsappDisplay = "+92 310 437 1263";

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
  { name: "Hotel & Resorts", label: "Hospitality", logo: null },
  { name: "Yango", label: "Mobility app", logo: "/logos/yango.png" },
];

type ContentSample = {
  title: string;
  type: string;
  color: string;
  imageSrc?: string;
  videoSrc?: string;
};

const contentSamples = portfolioItems as ContentSample[];

function publicFileExists(src?: string) {
  if (!src) {
    return false;
  }

  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

const services = [
  "Paid ad UGC",
  "Product demos",
  "Testimonials",
  "Unboxings",
  "Lifestyle hooks",
  "Travel UGC",
  "Beauty + skincare reels",
  "Creative strategy",
];

const reviewCards = [
  {
    label: "UGC proof",
    text: "Short-form creator proof and client-facing freelance signals.",
  },
  {
    label: "5.0 star Upwork",
    text: "Strong freelance trust signal with client satisfaction behind the work.",
  },
  {
    label: "Review slot",
    text: "Paste a real client quote here when Mysbah has permission to publish it.",
  },
];

function LogoTicker() {
  return (
    <div className="overflow-hidden border-y border-white/12 bg-[#302522] py-7 text-white">
      <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.18em] text-white/72">
        Brands Mysbah has created UGC for
      </p>
      <p className="mx-auto mb-5 max-w-2xl px-4 text-center text-xs font-semibold leading-5 text-white/55">
        She has made short-form content for these brands, plus UGC for more
        beauty, lifestyle, travel, app, and hospitality brands.
      </p>
      <div className="marquee-track flex w-max gap-4">
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-[5.75rem] w-64 shrink-0 items-center gap-4 rounded-[1.45rem] border border-white/18 bg-white px-4 text-[#17120f] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-1"
          >
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#f6ebe6] p-2">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={52}
                  height={52}
                  className="max-h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-center text-xs font-black uppercase leading-tight text-[#b54868]">
                  H&R
                </span>
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-black">{brand.name}</p>
              <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#b54868]">
                {brand.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Message Mysbah on WhatsApp at ${whatsappDisplay}`}
      className="focus-ring fixed bottom-4 left-4 right-4 z-[60] inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#17120f]/12 bg-[#a8c686] px-5 text-sm font-black text-[#17120f] shadow-[0_18px_45px_rgba(23,18,15,0.22)] transition hover:-translate-y-1 hover:bg-[#bdd69b] sm:left-auto sm:w-auto"
    >
      <MessageCircle aria-hidden="true" size={18} />
      <span>WhatsApp Mysbah</span>
    </Link>
  );
}

const verifiedReviewCards = [
  {
    label: "5.0 (5) on Upwork",
    text: "Her public Upwork profile shows a 5.0 rating across 5 reviews.",
  },
  {
    label: "100% Job Success",
    text: "Upwork lists her with 100% Job Success and Rising Talent status.",
  },
  {
    label: "8 Upwork jobs",
    text: "Her profile shows completed work history and short-form UGC positioning.",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: linkedinUrl, icon: Network },
  { label: "Upwork", href: upworkUrl, icon: BriefcaseBusiness },
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle },
  { label: "Email", href: mailtoLink, icon: Mail },
  // Replace this with Mysbah's real Instagram URL once she shares the handle.
  { label: "Instagram", href: "#contact", icon: Camera },
];

function ProofTicker() {
  const proofItems = [
    "5.0 (5) Upwork rating",
    "100% Job Success",
    "Rising Talent on Upwork",
    "8 Upwork jobs",
    "UGC Creator | TikTok & short-form ads",
    "LinkedIn + Upwork profile linked",
  ];

  return (
    <div className="overflow-hidden bg-[#f6ebe6] py-5">
      <div className="review-marquee flex w-max gap-4">
        {[...proofItems, ...proofItems].map((item, index) => (
          <div
            key={`${item}-${index}`}
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

function PhoneFrame({
  sample,
  index,
}: {
  sample: (typeof contentSamples)[number];
  index: number;
}) {
  const hasVideo = publicFileExists(sample.videoSrc);

  return (
    <article className="group relative rounded-[2rem] bg-[#111] p-2 shadow-[0_20px_45px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-2 hover:rotate-1">
      <div className="absolute -top-4 left-5 z-10 grid size-12 place-items-center rounded-full border-4 border-white bg-white text-xs font-black text-[#17120f] shadow-soft">
        {index + 1}
      </div>
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-black">
        {hasVideo ? (
          <video
            src={sample.videoSrc}
            poster={sample.imageSrc}
            controls
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
        ) : sample.imageSrc ? (
          <Image
            src={sample.imageSrc}
            alt={`${sample.title} UGC creator sample`}
            fill
            sizes="(max-width: 768px) 45vw, 180px"
            className="object-cover"
          />
        ) : (
          <div className={`flex size-full flex-col justify-between bg-gradient-to-br ${sample.color} p-4 text-white`}>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/18 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] backdrop-blur">
                UGC
              </span>
              <Play aria-hidden="true" className="fill-white" size={24} />
            </div>
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-white/72">
                Replace with real clip
              </p>
              <h3 className="mt-2 text-3xl font-black">
                {sample.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-white/78">{sample.type}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 p-3 text-[#17120f] backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[#b54868]">
            {sample.title}
          </p>
          <p className="mt-1 text-sm font-black">{sample.type}</p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6ebe6] pb-20 text-[#17120f] sm:pb-0">
      <FloatingWhatsApp />
      <header className="sticky top-0 z-50 border-b-4 border-[#a8c686] bg-[#473b3b] text-white">
        <nav className="container-shell flex min-h-11 items-center justify-center gap-5 overflow-x-auto text-sm font-black uppercase sm:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring shrink-0 hover:text-[#a8c686]">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-[#f8efec]">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,122,162,0.22)_0_22%,transparent_22%_100%),linear-gradient(70deg,transparent_0_66%,rgba(53,231,188,0.18)_66%_78%,transparent_78%)]" />
        <div className="container-shell relative grid gap-8 py-10 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-14">
          <div className="hero-pop">
            <h1
              aria-label="Mysbah UGC"
              className="text-[3.95rem] font-black leading-none sm:text-[6.35rem] lg:text-[8rem]"
            >
              <span
                aria-hidden="true"
                className="block pb-2 font-serif font-normal italic leading-[0.96]"
              >
                Mysbah
              </span>
              <span
                aria-hidden="true"
                className="block pt-3 uppercase leading-[0.88]"
              >
                UGC
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-xl font-bold leading-8 text-[#665957]">
              Hey - I&apos;m Mysbah. A high-energy lifestyle, beauty, and travel UGC
              creator making short-form content that feels like a real
              recommendation and is designed to earn clicks, saves, and
              conversions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={bookCallLink}
                className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#a8c686] px-5 text-sm font-black text-[#17120f] shadow-soft transition hover:-translate-y-1 hover:bg-[#bdd69b]"
              >
                <CalendarDays aria-hidden="true" size={18} />
                Book a Call
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href={mailtoLink}
                className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17120f] px-5 text-sm font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#b54868]"
              >
                <Mail aria-hidden="true" size={18} />
                Work With Mysbah
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href="#portfolio"
                className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-[#17120f]/15 bg-white px-5 text-sm font-black shadow-soft transition hover:-translate-y-1"
              >
                <Video aria-hidden="true" size={18} />
                Watch Samples
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <Star
                  aria-hidden="true"
                  size={16}
                  className="fill-[#f6c453] text-[#f6c453]"
                />
                5.0 Upwork
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <Heart aria-hidden="true" size={16} />
                100% Job Success
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <Video aria-hidden="true" size={16} />
                TikTok + Reels UGC
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <MapPin aria-hidden="true" size={16} />
                Pakistan - worldwide
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[455px] md:max-w-[520px]">
            <div className="relative flex justify-center">
              <div className="w-full rounded-[2.35rem] bg-[#17120f] p-2.5 shadow-glow">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.7rem] bg-[#f6ebe6]">
                  <Image
                    src="/images/00-main-profile-photo.jpeg"
                    alt="Mysbah in a pink top, main UGC creator portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 86vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(23,18,15,0.3)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <LogoTicker />
        <ProofTicker />
      </section>

      <section className="bg-[#f6ebe6] py-12">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white bg-white/90 p-7 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b54868]">
              Creator story
            </p>
            <p className="mt-5 text-2xl font-black leading-snug text-[#17120f] sm:text-3xl">
              I help brands show up with confident, natural, on-camera content
              that feels human in the feed and gives viewers a clear reason to
              watch, trust, and act.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Friend-rec energy",
                body: "Beauty, skincare, lifestyle, and travel stories that feel natural instead of overproduced.",
              },
              {
                icon: Wand2,
                title: "Hook-first thinking",
                body: "Every video angle starts with the first 3 seconds, the viewer problem, and the action you want.",
              },
              {
                icon: Camera,
                title: "Face of the brand",
                body: "Comfortable carrying product stories on camera with bright, expressive, brand-safe delivery.",
              },
              {
                icon: MessageCircle,
                title: "Strategy behind the smile",
                body: "Her lead-gen background helps her think about audience, offer, hook, and conversion.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.6rem] bg-white p-5 shadow-sm">
                <item.icon aria-hidden="true" size={22} className="text-[#b54868]" />
                <h2 className="mt-4 text-lg font-black">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#6b5a58]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-white py-12">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-3 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b54868]">
              Portfolio
            </p>
            <h2 className="text-5xl font-black sm:text-7xl">
              <span className="font-serif font-normal italic">Paid</span> AD STYLE
            </h2>
            <p className="mx-auto max-w-2xl text-sm font-semibold leading-6 text-[#6b5a58]">
              A compact preview of the content lanes brands can book: lifestyle,
              beauty, travel, skincare, wellness, and unboxing hooks.
            </p>
          </div>

          {/* Replace placeholder cards with Mysbah's real UGC videos as they become available. */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {contentSamples.map((sample, index) => (
              <PhoneFrame key={sample.title} sample={sample} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#17120f] py-12 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a8c686]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-6xl">
              Short-form content for brands that want to feel human.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/14 bg-white/9 px-5 py-3 text-sm font-black shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#f6ebe6] py-12">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b54868]">
              Reviews
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Public proof brands can verify fast.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviewCards.map((fallback, index) => {
              const review = verifiedReviewCards[index] ?? fallback;
              return (
                <article key={review.label} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <Star
                    aria-hidden="true"
                    className="fill-[#f6c453] text-[#f6c453]"
                    size={20}
                  />
                  <h3 className="mt-4 text-lg font-black">{review.label}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#6b5a58]">
                    {review.text}
                  </p>
                </article>
              );
            })}
            <div className="flex flex-col gap-3 rounded-[1.5rem] bg-[#17120f] p-5 text-white shadow-sm md:col-span-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-bold text-white/72">
                Verify the public proof and professional profile here.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href={upworkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#17120f] transition hover:bg-[#a8c686]"
                >
                  Upwork
                  <ExternalLink aria-hidden="true" size={15} />
                </Link>
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/16 px-4 py-2.5 text-sm font-black text-white transition hover:bg-white/10"
                >
                  LinkedIn
                  <ExternalLink aria-hidden="true" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#473b3b] py-10 text-white">
        <div className="container-shell flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="font-serif text-5xl italic">Mysbah</p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-white/66">
              Lifestyle - Beauty - Travel UGC Creator
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap justify-center gap-2 md:justify-end">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/16 px-4 text-sm font-black transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <link.icon aria-hidden="true" size={16} />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <Link
                href={mailtoLink}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-[#17120f] transition hover:-translate-y-1 hover:bg-[#a8c686]"
              >
                <Mail aria-hidden="true" size={18} />
                {contactEmail}
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a8c686] px-5 text-sm font-black text-[#17120f] transition hover:-translate-y-1 hover:bg-[#bdd69b]"
              >
                <MessageCircle aria-hidden="true" size={18} />
                {whatsappDisplay}
              </Link>
              <Link
                href="https://ugcbymysbah.vercel.app"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 px-5 text-sm font-black transition hover:-translate-y-1 hover:bg-white/10"
              >
                ugcbymysbah.vercel.app
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
