
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChevronDown,
  Layers3,
  LogIn,
  Menu,
  Tags,
  X,
} from "lucide-react";

const navigationLinks = [
  {
    label: "Components",
    href: "/components",
    icon: Boxes,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: Layers3,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: Tags,
  },
  {
    label: "Documentation",
    href: "/docs",
    icon: BookOpen,
  },
];

export default function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-[4.4%]"
      >
        {/* Brand logo */}
        <Link
          href="/"
          aria-label="IMX Digital Tools homepage"
          onClick={closeMenu}
          className="relative flex h-11 w-[125px] shrink-0 items-center"
        >
          <Image
            src="/icons/footer-light-log.png"
            alt="IMX Digital Tools"
            width={125}
            height={40}
            priority
            className="h-auto max-h-10 w-auto max-w-[125px] object-contain object-left"
            sizes="125px"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigationLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 py-3 text-xs font-medium text-white/60 transition-colors hover:text-white"
              >
                <Icon
                  size={14}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="text-[#7C8615] transition-colors group-hover:text-[#a1ac2a]"
                />

                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop account actions */}
        <div className="hidden shrink-0 items-center gap-5 sm:flex">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-white"
          >
            <LogIn size={15} aria-hidden="true" />
            Sign in
          </Link>

          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#7C8615] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#929c22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#929c22]"
          >
            Sign up
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#7C8615] hover:text-[#a5af39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#929c22] sm:hidden"
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-black px-5 pb-5 pt-3 sm:hidden"
        >
          <div className="flex flex-col">
            {navigationLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center gap-3 border-b border-white/[0.07] py-3 text-sm text-white/70 transition-colors hover:text-[#a5af39]"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="text-[#7C8615]"
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-3 text-xs font-medium text-white transition-colors hover:border-[#7C8615]"
            >
              <LogIn size={15} aria-hidden="true" />
              Sign in
            </Link>

            <Link
              href="/signup"
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#7C8615] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#929c22]"
            >
              Sign up
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
