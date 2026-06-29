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
          <p>&copy; Home Money Check.</p>
          <div className="text-center md:min-w-[31rem]">
            <p className="mx-auto max-w-[34rem] text-sm font-black leading-6 text-[#FDCA55] md:whitespace-nowrap">
              We&rsquo;d love for you to follow us on our socials.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {socialLinks.map((item) => (
                <a
                  aria-label={`Follow Home Money Check on ${item.label}`}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#F7F0E8] text-[#4F247D] shadow-[0_10px_28px_rgba(44,31,61,0.14)] ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FDCA55] hover:text-[#173E29] hover:shadow-[0_14px_34px_rgba(44,31,61,0.18)]"
                  href={item.href}
                  key={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon label={item.label} />
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

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
        <path
          d="M14.45 8.42V6.67c0-.74.49-.91.85-.91h2.19V2.1h-3.03c-3.35 0-4.11 2.51-4.11 4.12v2.2H7.7v3.74h2.65V22h4.1v-9.84h2.91l.47-3.74h-3.38Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
        <rect
          height="16.4"
          rx="4.9"
          stroke="currentColor"
          strokeWidth="2.2"
          width="16.4"
          x="3.8"
          y="3.8"
        />
        <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="17" cy="7" fill="currentColor" r="1.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="block h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d="M15.75 2.35c.22 1.82 1.24 3.42 2.77 4.39.62.39 1.31.68 2.08.86v3.82a9.38 9.38 0 0 1-4.63-1.23v5.33c0 3.65-2.92 6.55-6.57 6.55a6.29 6.29 0 0 1-3.67-1.17 6.44 6.44 0 0 1-2.48-5.07c0-3.61 2.9-6.51 6.51-6.51.37 0 .72.03 1.08.1v3.95a2.69 2.69 0 0 0-1.08-.22 2.66 2.66 0 0 0-2.68 2.68 2.7 2.7 0 0 0 2.74 2.7 2.69 2.69 0 0 0 2.68-2.69V2.35h3.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
