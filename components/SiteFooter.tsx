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
        <div className="flex flex-col gap-2 text-sm font-bold md:items-end">
          <p>© Home Money Check.</p>
          <Link
            href="/admin/login"
            className="text-xs font-black uppercase tracking-[0.16em] text-[#F7F0E8]/45 transition-colors duration-300 ease-out hover:text-[#F7F0E8]/75"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
