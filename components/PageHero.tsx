type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accentColour: string;
  howItWorksBody?: string;
  status?: "live" | "comingSoon";
};

export function PageHero({
  eyebrow,
  title,
  description,
  accentColour,
  howItWorksBody = "Send in your details, we’ll get back to you and talk you through your options and costs, answer any questions and help you save money.",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#5F2D8C] px-5 pb-16 pt-12 text-[#F7F0E8] md:px-8 md:pb-20 md:pt-16">
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#8E52C4]/40 blur-3xl" />
      <div className="absolute bottom-4 left-[18%] h-44 w-44 rotate-[14deg] rounded-[3rem] bg-[#FDCA55]/20 blur-2xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-end">
        <div>
          <p
            className="mb-5 w-fit rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4F247D]"
            style={{ backgroundColor: accentColour }}
          >
            {eyebrow}
          </p>
          <h1 className="display-font max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] text-[#FDCA55] md:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#F7F0E8]/78 md:text-2xl md:leading-9">
            {description}
          </p>
        </div>
        <div className="relative min-h-[220px] overflow-hidden rounded-[2.5rem] bg-[#F7F0E8] p-7 text-[#2C1F3D] shadow-[0_28px_80px_rgba(44,31,61,0.25)]">
          <div
            className="absolute -right-8 -top-8 h-24 w-24 rotate-[12deg] rounded-[1.5rem]"
            style={{ backgroundColor: accentColour }}
          />
          <p className="relative text-sm font-black uppercase tracking-[0.14em] text-[#5F2D8C]/70">
            HOW IT WORKS
          </p>
          <p className="display-font relative mt-10 text-3xl font-black leading-[1] tracking-[-0.055em]">
            We’ll talk it through with you.
          </p>
          <p className="relative mt-5 text-base font-bold leading-7 text-[#2C1F3D]/76">
            {howItWorksBody}
          </p>
        </div>
      </div>
    </section>
  );
}
