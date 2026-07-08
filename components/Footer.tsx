import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactEmail, mailtoLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="container-shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="#home" className="focus-ring inline-flex text-xl font-black">
            Misbah Ahmad
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/68">
            UGC Creator & Marketing Strategist. Pakistan · Available Worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/68 sm:flex-row sm:items-center">
          <Link
            href={mailtoLink}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-bold text-ink transition hover:bg-cream"
          >
            <Mail aria-hidden="true" size={16} />
            {contactEmail}
          </Link>
          <Link
            href="#home"
            className="focus-ring inline-flex items-center gap-1 font-bold text-white transition hover:text-white/76"
          >
            Back to top <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/52">
        © {year} Misbah Ahmad. Built for paid UGC collaborations.
      </div>
    </footer>
  );
}
