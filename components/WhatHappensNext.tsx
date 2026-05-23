export type WhatHappensNextStep = {
  title: string;
  body: string;
};

const steps: WhatHappensNextStep[] = [
  {
    title: "Choose what service you want checked",
    body: "Send a few basic details so we know what you need help with.",
  },
  {
    title: "We’ll get in touch",
    body: "We’ll contact you within 24 hours (often much sooner!) to go through a few details to understand what you really need and see if we can help.",
  },
  {
    title: "We’ll explain the right option",
    body: "Depending on the service, you’ll get a quote, a recommendation or a clear plan. It always starts with a conversation so we can make sure we’re giving you the right help.",
  },
  {
    title: "No pressure",
    body: "You can ask questions, think it over and only continue if it feels right for you.",
  },
];

export function WhatHappensNext({ customSteps = steps }: { customSteps?: WhatHappensNextStep[] }) {
  return (
    <section className="mx-auto mt-5 max-w-7xl rounded-[2.75rem] bg-white p-6 shadow-[0_24px_70px_rgba(44,31,61,0.10)] md:p-8">
      <p className="mb-5 w-fit rounded-full bg-[#EADFFD] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5F2D8C]">
        What happens next
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {customSteps.map((step, index) => (
          <article key={step.title} className="rounded-[1.75rem] bg-[#F7F0E8] p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FDCA55] text-sm font-black text-[#4F247D]">
              {index + 1}
            </span>
            <h2 className="mt-4 text-xl font-black leading-6 tracking-[-0.035em] text-[#2C1F3D]">
              {step.title}
            </h2>
            <p className="mt-3 text-sm font-bold leading-6 text-[#2C1F3D]/72">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
