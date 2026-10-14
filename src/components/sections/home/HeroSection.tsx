
import HeroPreview from "./HeroPreview";

const heroContent = {
  eyebrow: "DEVELOPER TOOLS / 001",
  title: "Build faster.",
  highlightedTitle: "Ship smarter.",
  description:
    "Production-ready UI components, practical setup guides, and tools that help you spend less time on repetitive code.",
  primaryAction: {
    label: "Explore components",
    href: "#components",
  },
  secondaryAction: {
    label: "How it works",
    href: "#how-it-works",
  },
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050604] text-white">
      {/* Subtle background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#81951F]/[0.07] blur-[120px]"
      />

      <div className="mx-auto grid min-h-[min(760px,calc(100svh-76px))] max-w-[1440px] items-center gap-2 px-6 py-12 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0 lg:px-14 lg:py-10 xl:px-20">
        {/* Left: Copy */}
        <div className="relative z-10 max-w-[540px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A9BF43]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#BBCB77] sm:text-xs">
              {heroContent.eyebrow}
            </p>
          </div>

          <h1 className="text-[clamp(3.4rem,6.5vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.075em]">
            {heroContent.title}
            <span className="mt-2 block bg-gradient-to-r from-[#D8E88C] via-[#AFC64B] to-[#788C22] bg-clip-text pb-2 text-transparent">
              {heroContent.highlightedTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-[420px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={heroContent.primaryAction.href}
              className="group inline-flex min-h-12 items-center gap-5 rounded-full bg-[#B6CB52] px-6 text-sm font-medium text-black transition duration-300 hover:bg-[#D2E77A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2E77A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050604]"
            >
              {heroContent.primaryAction.label}
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href={heroContent.secondaryAction.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white/80 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {heroContent.secondaryAction.label}
              <span aria-hidden="true" className="text-white/50">
                ↗
              </span>
            </a>
          </div>

          {/* Minimal feature line */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-white/45 sm:text-xs">
            <span>01 — Customizable UI</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>02 — Integration guides</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>03 — Developer tools</span>
          </div>
        </div>

        {/* Right: 3D black hole */}
        <div className="relative min-w-0 lg:-ml-8">
          <HeroPreview />
        </div>
      </div>

      {/* Fine bottom border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#899D35]/30 to-transparent"
      />
    </section>
  );
}
