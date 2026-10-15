import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNavbar from "@/components/layout/SiteNavbar";
import { catalogueProducts } from "@/data/catalogue-products";
import PurchasePanel from "@/components/sections/catalogue/PurchasePanel";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ShieldCheck,
  Mail,
  Layers3,
  Sparkles,
  Monitor,
  Palette,
  Smartphone,
  ShieldCheck as SecureIcon,
} from "lucide-react";
import FormCustomizer from "@/components/sections/catalogue/FormCustomizer";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const productIcons = {
  code: Code2,
  security: ShieldCheck,
  mail: Mail,
  layers: Layers3,
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = catalogueProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | IMX Digital Tools",
    };
  }

  return {
    title: `${product.name} | IMX Digital Tools`,
    description: product.description,
    alternates: {
      canonical: `/components/${product.slug}`,
    },
  };
}

export function generateStaticParams() {
  return catalogueProducts
    .filter((product) => product.status === "available")
    .map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = catalogueProducts.find((item) => item.slug === slug);

  if (!product || product.status !== "available") {
    notFound();
  }

  const Icon = productIcons[product.icon ?? "code"];

  const features = [
    {
      icon: Palette,
      title: "Customizable design",
      description: "Personalize colors and appearance to match your brand.",
    },
    {
      icon: Monitor,
      title: "Live preview",
      description: "See your design changes while customizing the form.",
    },
    {
      icon: Smartphone,
      title: "Responsive interface",
      description: "Designed to adapt to different screen sizes.",
    },
    {
      icon: SecureIcon,
      title: "Integration-ready foundation",
      description: "Use the preview as a starting point for your integration.",
    },
  ];

  return (
    <>
      <SiteNavbar />

      <main className="min-h-screen overflow-hidden bg-black pt-28 text-white sm:pt-32">
        {/* Subtle background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C8615]/10 blur-[120px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-20 sm:px-8 lg:pb-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[#B8C56A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to components
            </Link>
          </nav>

          {/* Product overview */}
          <section className="mt-9 grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-start md:gap-12 md:pb-12 lg:gap-20">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#7C8615]/30 bg-[#7C8615]/10 text-[#B8C56A]">
                  <Icon size={21} aria-hidden="true" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C56A]">
                  {product.category}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live preview
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {product.name}
                <span className="text-[#A5AF39]">.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                {product.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Live customization",
                  "Responsive design",
                  "Color presets",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-white/60 sm:text-xs"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Product purchase summary */}
            <PurchasePanel
              productName={product.name}
              productSlug={product.slug}
              price={product.price}
            />
          </section>

          {/* Live customization workspace */}
          {product.slug === "email-password-form" && (
            <section id="live-editor" className="scroll-mt-28 pt-12 sm:pt-16">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C56A]">
                    <Sparkles size={13} aria-hidden="true" />
                    Interactive playground
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Make it yours.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                    Customize the form, experiment with color combinations, and
                    preview your changes in real time.
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A5AF39]" />
                  Editor ready
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-[0_24px_100px_rgba(0,0,0,0.35)] sm:rounded-3xl">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7C8615]/10 text-[#B8C56A]">
                      <Icon size={17} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/90">
                        {product.name}
                      </p>
                      <p className="mt-1 text-[10px] text-white/35">
                        Customization workspace
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/40">
                    Playground
                  </span>
                </div>

                <div className="p-3 sm:p-6 lg:p-8">
                  <FormCustomizer productName={product.name} />
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] leading-5 text-white/30">
                This is an interactive demo. Do not enter real passwords or
                sensitive information.
              </p>
            </section>
          )}

          {/* Features */}
          <section className="pt-16 sm:pt-20">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C56A]">
                Built for customization
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                A better starting point for your next project.
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Explore the design, adjust the appearance, and use the preview
                to evaluate whether this component fits your needs.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: FeatureIcon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-[#7C8615]/40 hover:bg-white/[0.035]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C8615]/20 bg-[#7C8615]/10 text-[#B8C56A]">
                    <FeatureIcon size={18} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-sm font-semibold">{title}</h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-16 overflow-hidden rounded-2xl border border-[#7C8615]/25 bg-gradient-to-br from-[#7C8615]/15 via-white/[0.025] to-transparent p-6 sm:mt-20 sm:p-9">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Explore more digital tools.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                  Browse the catalogue to discover more components and
                  customization options.
                </p>
              </div>

              <Link
                href="/components"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition hover:border-[#929C22] hover:text-[#B8C56A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
              >
                Browse catalogue
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
