import Image from "next/image";
import Link from "next/link";
import { footerCompliance } from "@/lib/compliance";
import { socialLinks } from "@/lib/social-links";

export function SiteFooter() {
  return (
    <footer className="bg-[#5F2D8C] px-5 pb-8 text-[#F7F0E8]/70 md:px-8">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-8">
        <div className="grid gap-5 lg:grid-cols-[0.34fr_1.66fr] lg:items-start">
          <Link href="/" className="w-fit">
            <Image
              src="/brand/hmc-logo-full-transparent.png"
              alt="Home Money Check"
              width={248}
              height={88}
              className="h-14 w-auto object-contain md:h-16"
            />
          </Link>

          <div className="max-w-5xl text-xs font-bold leading-5 text-[#F7F0E8]/66 md:columns-2 md:gap-8 lg:columns-3">
            <p className="break-inside-avoid">{footerCompliance.intro}</p>
            <p className="mt-2 break-inside-avoid md:mt-0">{footerCompliance.services}</p>
            <p className="mt-2 break-inside-avoid">{footerCompliance.regulated}</p>
            <p className="mt-2 break-inside-avoid">{footerCompliance.company}</p>
            <p className="mt-2 break-inside-avoid">{footerCompliance.register}</p>
          </div>
        </div>

        {/* TODO before launch: add Cookie Policy if needed and final compliance-approved service disclaimers. */}
        <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 text-sm font-bold md:grid-cols-[1fr_auto_1fr] md:items-end">
          <p>© Home Money Check.</p>
          <div className="text-center">
            <p className="mx-auto max-w-sm text-sm font-black leading-6 text-[#F7F0E8]/75">
              We’d really appreciate it if you could follow us on our socials.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {socialLinks.map((item) => (
                <a
                  aria-label={`Follow Home Money Check on ${item.label}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#22C55E] text-xs font-black uppercase tracking-[0.12em] text-[#2C1F3D] shadow-[0_12px_30px_rgba(34,197,94,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#32D86A]"
                  href={item.href}
                  key={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.shortLabel}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <nav
              aria-label="Footer links"
              className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.14em] text-[#F7F0E8]/48 md:justify-end"
            >
              {[
                { href: "/updates", label: "Updates" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms" },
                { href: "/disclaimers", label: "Disclaimers" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-300 ease-out hover:text-[#F7F0E8]/75"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/admin/login"
              className="w-fit text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#F7F0E8]/28 transition-colors duration-300 ease-out hover:text-[#F7F0E8]/55"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
