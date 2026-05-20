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
        <p className="text-sm font-bold">© Home Money Check.</p>
      </div>
    </footer>
  );
}
