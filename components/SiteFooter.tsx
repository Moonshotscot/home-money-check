import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#5F2D8C] px-5 pb-8 text-[#F7F0E8]/70 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/12 pt-8 md:flex-row md:items-center">
        <Link href="/">
          <Image
            src="/brand/hmc-logo-full-transparent.png"
            alt="Home Money Check"
            width={248}
            height={88}
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>
        {/* TODO before launch: add Privacy Policy, Terms, Cookie Policy if needed, and clear disclaimers for Utility Warehouse-related enquiries, prize draw handling, mortgages and insurance/protection. */}
        <div className="flex flex-col gap-3 text-sm font-bold md:items-end">
          <p>© Home Money Check.</p>
          <nav
            aria-label="Footer links"
            className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.14em] text-[#F7F0E8]/45 md:justify-end"
          >
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms" },
              { href: "/disclaimers", label: "Disclaimers" },
              { href: "/admin/login", label: "Admin" },
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
        </div>
      </div>
    </footer>
  );
}
