
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteNavbar from "@/components/layout/SiteNavbar";
import ProductGrid from "@/components/sections/catalogue/ProductGrid";
import CatalogueToolbar, {
  type CatalogueCategory,
} from "@/components/sections/catalogue/CatalogueToolbar";
import { catalogueProducts } from "@/data/catalogue-products";
import { ArrowRight } from "lucide-react";

export default function ComponentsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<CatalogueCategory>("All");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return catalogueProducts.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <SiteNavbar />

      <main className="min-h-screen bg-black pt-28 text-white sm:pt-32">
        <section className="mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-[4.4%] lg:pb-28">
          {/* Catalogue hero */}

          <header className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#7C8615]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#929C22]">
                IMX Digital Tools
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Components that
              <span className="block text-[#7C8615]">
                work for you.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Explore customizable UI components built to help you
              ship projects faster. Preview designs, discover
              integrations and find the right starting point for your
              next build.
            </p>
          </header>

          {/* Search and filters */}

          <div className="mt-10">
            <CatalogueToolbar
              search={search}
              onSearchChange={setSearch}
              category={category}
              onCategoryChange={setCategory}
            />
          </div>

          {/* Results summary */}

          <div
            className="mb-5 mt-8 flex items-center justify-between gap-3"
            aria-live="polite"
          >
            <p className="text-sm text-white/55">
              <span className="font-semibold text-white">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1
                ? "component"
                : "components"}
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
              Built for developers
            </p>
          </div>

          {/* Product grid */}

          <ProductGrid products={filteredProducts} />

          {/* Bottom navigation */}

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-white/40">
              New components and developer tools will be added as
              the library grows.
            </p>

            <Link
              href="/#components"
              className="inline-flex w-fit items-center gap-2 text-xs font-medium text-white/65 transition hover:text-[#A5AF39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
            >
              Try the featured preview
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
