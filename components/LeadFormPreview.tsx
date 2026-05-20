import { ArrowUpRight } from "lucide-react";
import { sitePages } from "@/lib/site-pages";

type LeadFormPreviewProps = {
  selectedCheck?: string;
  uwRelated?: boolean;
  title?: string;
};

export function LeadFormPreview({
  selectedCheck = "Choose your check",
  uwRelated = false,
  title = "Tell us what you want to check.",
}: LeadFormPreviewProps) {
  return (
    <div className="relative overflow-hidden rounded-[2.75rem] bg-[#F7F0E8] p-7 shadow-[0_24px_70px_rgba(44,31,61,0.13)] ring-1 ring-[#EADFFD] md:p-9">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EADFFD]/55" />
      <p className="relative mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
        Leave your details
      </p>
      <h2 className="relative text-4xl font-black leading-[0.98] tracking-[-0.065em] text-[#2C1F3D] md:text-5xl">
        {title}
      </h2>
      {uwRelated ? (
        <p className="relative mt-5 rounded-[1.35rem] bg-white/70 p-4 text-sm font-bold leading-6 text-[#4F247D]">
          If your enquiry relates to Utility Warehouse, you may be contacted about UW services or the
          UW Partner opportunity. You can opt out of marketing messages at any time.
        </p>
      ) : null}
      <div className="relative mt-7 grid gap-4">
        <input
          className="w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96]"
          placeholder="Name"
          readOnly
        />
        <input
          className="w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96]"
          placeholder="Email"
          readOnly
        />
        <input
          className="w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96]"
          placeholder="Mobile"
          readOnly
        />
        <input
          className="w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96]"
          placeholder="Postcode"
          readOnly
        />
        <select
          className="w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent"
          defaultValue={selectedCheck}
        >
          <option>Choose your check</option>
          {sitePages
            .filter((page) => page.status === "live")
            .map((page) => (
              <option key={page.slug}>{page.selectedCheck}</option>
            ))}
        </select>
        <textarea
          className="min-h-28 w-full appearance-none rounded-[1.35rem] border-0 bg-white px-5 py-4 text-base font-bold text-[#2C1F3D] shadow-[inset_0_0_0_1px_rgba(95,45,140,0.08)] outline-none ring-2 ring-transparent placeholder:text-[#8A7D96]"
          placeholder="Message"
          readOnly
        />
        <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/65 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
          <input className="mt-1 h-4 w-4 accent-[#6A35A0]" type="checkbox" disabled />
          <span>
            I agree that Home Money Check or a representative may contact me about my enquiry.
          </span>
        </label>
        <label className="flex items-start gap-3 rounded-[1.35rem] bg-white/65 p-4 text-sm font-bold leading-6 text-[#2C1F3D]">
          <input className="mt-1 h-4 w-4 accent-[#6A35A0]" type="checkbox" disabled />
          <span>
            I would also like to receive occasional Home Money Check updates, including useful home
            money tips, relevant services and local offers. I can unsubscribe at any time.
          </span>
        </label>
        <button
          className="flex transform-gpu items-center justify-center gap-2 rounded-full bg-[#6A35A0] px-7 py-4 text-base font-black text-[#F7F0E8] shadow-[0_18px_45px_rgba(106,53,160,0.25)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          type="button"
        >
          Start my check
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
        </button>
        <p className="text-center text-xs font-black uppercase tracking-[0.12em] text-[#5F2D8C]/60">
          Form handling will be connected in the next build stage.
        </p>
      </div>
    </div>
  );
}
