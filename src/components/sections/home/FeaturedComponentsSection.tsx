
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import ComponentPreview from "./ComponentPreview";

const featuredProduct = {
  category: "AUTHENTICATION UI",
  name: "Email + Password Form",
  description:
    "Start with a clean, customizable form. Get the component source, setup instructions, and a guided path to connect your own backend provider.",
  price: "₹49",
  href: "/components/email-password-form",
  features: [
    "Custom colors & gradients",
    "Integration guide",
    "Downloadable ZIP",
  ],
};

const upcomingProducts = [
  {
    name: "Password Reset Form",
    category: "AUTHENTICATION",
    description:
      "A customizable password reset interface for your application.",
    icon: ShieldCheck,
  },
  {
    name: "Contact Form",
    category: "FORMS & COMMUNICATION",
    description:
      "A flexible contact form designed for real project workflows.",
    icon: Braces,
  },
];

export default function FeaturedComponentsSection() {
  return (
    <section
      id="components"
      aria-labelledby="featured-components-title"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[4.4%]">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#7C8615]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#929C22]">
                The component library
              </p>
            </div>

            <h2
              id="featured-components-title"
              className="mt-5 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl lg:text-5xl"
            >
              Built to ship.
              <span className="mt-1 block text-[#737A1A]">
                Designed to fit.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
              Developer-focused building blocks with customizable UI and
              practical integration guidance.
            </p>
          </div>

          <Link
            href="/components"
            className="inline-flex w-fit items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-[#a5af39]"
          >
            Explore all components
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Featured product */}
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Product information */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C8615]/30 bg-[#7C8615]/10 text-[#a5af39]">
                  <Code2 size={16} aria-hidden="true" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a5af39]">
                  {featuredProduct.category}
                </span>
              </div>

              <h3 className="mt-7 max-w-md text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                {featuredProduct.name}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                {featuredProduct.description}
              </p>

              {/* Product benefits */}
              <ul className="mt-6 space-y-3">
                {featuredProduct.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-xs text-white/65"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C8615]/15 text-[#a5af39]">
                      <ArrowRight size={11} aria-hidden="true" />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and product CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
                    Starting price
                  </p>

                  <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                    {featuredProduct.price}
                  </p>
                </div>

                <Link
                  href={featuredProduct.href}
                  className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#7C8615] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#929c22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#929c22]"
                >
                  View component
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/30">
                Product release is in progress. Purchase and downloads are not
                available yet.
              </p>
            </div>

            {/* Preview area */}
            <div className="relative flex items-center border-t border-white/10 bg-[#0D0D0B] p-5 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,134,21,0.09),transparent_70%)]"
              />

              <div className="relative w-full">
                <ComponentPreview />
              </div>
            </div>
          </div>
        </article>

        {/* Upcoming components */}
        <div className="mb-5 mt-14 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              More building blocks
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/40">
              More components are planned for future releases.
            </p>
          </div>

          <Layers3
            size={20}
            strokeWidth={1.5}
            className="shrink-0 text-[#7C8615]"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {upcomingProducts.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.name}
                className="group rounded-xl border border-white/10 bg-[#080808] p-5 transition-colors hover:border-[#7C8615]/40 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#929C22] transition-colors group-hover:border-[#7C8615]/30 group-hover:bg-[#7C8615]/10">
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-white/45">
                    Coming soon
                  </span>
                </div>

                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#929C22]">
                  {product.category}
                </p>

                <h4 className="mt-2 text-lg font-semibold tracking-tight text-white">
                  {product.name}
                </h4>

                <p className="mt-2 max-w-md text-xs leading-6 text-white/45">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <span className="text-[10px] text-white/30">
                    Future release {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-white/40">
                    Not available yet
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
