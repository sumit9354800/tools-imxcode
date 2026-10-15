
"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";

export const CATALOGUE_CATEGORIES = [
  "All",
  "Authentication",
  "Forms",
] as const;

export type CatalogueCategory =
  (typeof CATALOGUE_CATEGORIES)[number];

type CatalogueToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  category: CatalogueCategory;
  onCategoryChange: (value: CatalogueCategory) => void;
};

export default function CatalogueToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: CatalogueToolbarProps) {
  return (
    <div className="flex flex-col gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}

      <div className="relative w-full lg:max-w-md">
        <Search
          size={17}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search components..."
          aria-label="Search components"
          className="h-12 w-full rounded-xl border border-white/10 bg-[#090909] pl-11 pr-10 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#7C8615] focus:ring-1 focus:ring-[#7C8615]"
        />

        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/40 transition hover:text-white"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Category filters */}

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 flex items-center gap-2 text-xs text-white/40">
          <SlidersHorizontal size={14} aria-hidden="true" />
          Category
        </span>

        {CATALOGUE_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onCategoryChange(item)}
            aria-pressed={category === item}
            className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] ${
              category === item
                ? "border-[#7C8615] bg-[#7C8615] text-white"
                : "border-white/10 bg-transparent text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
