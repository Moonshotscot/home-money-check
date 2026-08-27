import Link from "next/link";
import { socialLinks } from "@/lib/social-links";
import { SiteBrand } from "@/components/home/SiteBrand";

const footerLinks = [
  { href: "/household-bills-check", label: "Household bills" },
  { href: "/energy", label: "Energy check" },
  { href: "/broadband", label: "Broadband check" },
  { href: "/20k-giveaway", label: "£20K Giveaway" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About Home Money Check" },
  { href: "/build-a-second-income", label: "Build a second income" },
  { href: "/staff-bills-check", label: "For your staff" },
  { href: "/for-your-clients", label: "For your clients" },
  { href: "/updates", label: "Offers & updates" },
  { href: "/#questions", label: "Questions" },
  { href: "/contact", label: "Contact" },
] as const;
const otherServices = [
  { href: "https://www.wherecanifindamortgage.co.uk/", label: "Mortgages" },
  { href: "https://wherecanifindamortgage.co.uk/protection/", label: "Life insurance and protection" },
  { href: "https://neillconnollywills.co.uk/", label: "Wills & Powers of Attorney" },
  { href: "/business-utilities", label: "Business utilities" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#35104F] px-5 pb-8 pt-14 text-white sm:px-8">
      <div className="mx-auto max-w-[86rem]">
        <div className="grid gap-10 border-b border-white/14 pb-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SiteBrand inverted />
            <p className="mt-6 max-w-md text-base font-medium leading-7 text-white/64">
              We do everything we can to help you save money on your household bills.
            </p>
            <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/46">
              Home Money Check is run by Neill Connolly. If another provider or specialist needs to contact you, we&rsquo;ll explain this before making an introduction.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E7B93E]">Explore</p>
              <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
                {footerLinks.map((item) => (
                  <Link
                    className="w-fit text-sm font-bold text-white/76 transition hover:text-white"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E7B93E]">Other services</p>
              <nav aria-label="Other services" className="mt-5 grid gap-3">
                {otherServices.map((item) => (
                  <Link
                    className="w-fit text-sm font-bold text-white/76 transition hover:text-white"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E7B93E]">Follow</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {socialLinks.map((item) => (
                  <a
                    className="text-sm font-bold text-white/76 transition hover:text-white"
                    href={item.href}
                    key={item.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs font-semibold text-white/47 sm:flex-row sm:items-center sm:justify-between">
          <p>© Home Money Check.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="transition hover:text-white/75" href="/privacy-policy">Privacy</Link>
            <Link className="transition hover:text-white/75" href="/terms">Terms</Link>
            <Link className="transition hover:text-white/75" href="/disclaimers">Disclaimers</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
