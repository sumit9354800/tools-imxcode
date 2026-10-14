
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  Palette,
  Puzzle,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Choose your component",
    description:
      "Find a ready-to-integrate component that fits your project. Review its features, compatibility, and setup requirements.",
    label: "Browse components",
    icon: Puzzle,
  },
  {
    number: "02",
    title: "Customize your design",
    description:
      "Adjust colors, gradients, borders, and button states. Preview your design before integrating it into your project.",
    label: "Make it yours",
    icon: Palette,
  },
  {
    number: "03",
    title: "Integrate & build",
    description:
      "Get the component source code, setup documentation, and environment-variable example for your integration.",
    label: "Start building",
    icon: Code2,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C8615]/30 bg-[#7C8615]/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#929C22]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B1BD52]">
                Simple workflow
              </span>
            </div>

            <h2
              id="how-it-works-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              From component to{" "}
              <span className="text-[#929C22]">production.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Less time building everything from scratch. More time creating
              products that move your project forward.
            </p>
          </div>

          <Link
            href="/components"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-[#B1BD52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Explore components
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-6 transition-colors duration-300 hover:border-[#7C8615]/50 hover:bg-[#0C0D08] sm:p-7 lg:p-8"
              >
                {/* Background number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-5 select-none text-8xl font-semibold tracking-tighter text-white/[0.035] transition-colors duration-300 group-hover:text-[#929C22]/[0.09]"
                >
                  {step.number}
                </span>

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7C8615]/30 bg-[#7C8615]/10 text-[#A9B64B] transition-colors group-hover:bg-[#7C8615]/20">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs tracking-wider text-white/35">
                    STEP {step.number}
                  </span>
                </div>

                <div className="relative z-10 mt-9">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center gap-2 pt-7 text-xs font-medium text-white/65 transition-colors group-hover:text-[#B1BD52]">
                  <Check size={14} className="text-[#929C22]" />
                  {step.label}
                </div>

                {index < STEPS.length - 1 && (
                  <ArrowDownRight
                    aria-hidden="true"
                    size={18}
                    className="absolute bottom-7 right-7 hidden text-white/15 md:block"
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-white/10 bg-[#080808] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-6 text-white/55">
            Your project. Your design. Your integration.
          </p>

          <span className="inline-flex items-center gap-2 text-xs text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#929C22]" />
            Built for developers
          </span>
        </div>
      </div>
    </section>
  );
}
