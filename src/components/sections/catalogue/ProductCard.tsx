
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Mail,
  Layers3,
} from "lucide-react";

export type CatalogueProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number | null;
  status: "available" | "coming-soon";
  icon?: "code" | "security" | "mail" | "layers";
};

type ProductCardProps = {
  product: CatalogueProduct;
};

const productIcons = {
  code: Code2,
  security: ShieldCheck,
  mail: Mail,
  layers: Layers3,
};

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = productIcons[product.icon ?? "code"];
  const isAvailable =
    product.status === "available" && product.price !== null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090909] transition-colors duration-300 hover:border-[#7C8615]/50">
      {/* Card header */}

      <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] p-5 sm:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7C8615]/25 bg-[#7C8615]/10 text-[#A5AF39] transition-colors group-hover:bg-[#7C8615]/20">
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </div>

        <span
          className={`rounded-full border px-3 py-1.5 text-[9px] font-medium ${
            isAvailable
              ? "border-[#7C8615]/30 bg-[#7C8615]/10 text-[#B8C56A]"
              : "border-white/10 text-white/40"
          }`}
        >
          {isAvailable ? "Available to preview" : "Coming soon"}
        </span>
      </div>

      {/* Product details */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#929C22]">
          {product.category}
        </p>

        <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">
          {product.name}
        </h2>

        <p className="mt-3 text-xs leading-6 text-white/45">
          {product.description}
        </p>

        {/* Price and action */}

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/[0.07] pt-5">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.14em] text-white/35">
              {isAvailable ? "Starting price" : "Release"}
            </p>

            <p className="mt-1 text-xl font-semibold text-white">
              {isAvailable ? `₹${product.price}` : "Coming soon"}
            </p>
          </div>

          {isAvailable ? (
            <Link
              href={`/components/${product.slug}`}
              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#7C8615] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#929C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View details
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          ) : (
            <span className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 text-xs text-white/35">
              <Layers3 size={14} aria-hidden="true" />
              In progress
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
