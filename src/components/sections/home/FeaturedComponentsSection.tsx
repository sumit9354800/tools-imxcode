"use client";

import { useState } from "react";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Download,
  Eye,
  Palette,
  RotateCcw,
  Server,
  ShieldCheck,
  Type,
} from "lucide-react";

type FormTheme = {
  background: string;

  heading: string;

  text: string;

  inputBackground: string;

  inputText: string;

  border: string;

  buttonBackground: string;

  buttonHover: string;

  buttonText: string;
};

const DEFAULT_THEME: FormTheme = {
  background: "#FFFFFF",

  heading: "#111111",

  text: "#666666",

  inputBackground: "#FFFFFF",

  inputText: "#111111",

  border: "#D9D9D9",

  buttonBackground: "#7C8615",

  buttonHover: "#626A10",

  buttonText: "#FFFFFF",
};

const PRESETS: { name: string; theme: FormTheme }[] = [
  { name: "Classic", theme: DEFAULT_THEME },

  {
    name: "Dark",

    theme: {
      background: "#111111",

      heading: "#FFFFFF",

      text: "#B8B8B8",

      inputBackground: "#1D1D1D",

      inputText: "#FFFFFF",

      border: "#414141",

      buttonBackground: "#7C8615",

      buttonHover: "#929C22",

      buttonText: "#FFFFFF",
    },
  },

  {
    name: "Ocean",

    theme: {
      background: "#F0F9FF",

      heading: "#0C2D48",

      text: "#46677D",

      inputBackground: "#FFFFFF",

      inputText: "#0C2D48",

      border: "#B8D8E8",

      buttonBackground: "#087EA4",

      buttonHover: "#056080",

      buttonText: "#FFFFFF",
    },
  },

  {
    name: "Lavender",

    theme: {
      background: "#F7F3FF",

      heading: "#35245C",

      text: "#76658F",

      inputBackground: "#FFFFFF",

      inputText: "#35245C",

      border: "#D9CDED",

      buttonBackground: "#7654C8",

      buttonHover: "#5C3EAA",

      buttonText: "#FFFFFF",
    },
  },
];

const COLOR_OPTIONS: { key: keyof FormTheme; label: string }[] = [
  { key: "background", label: "Form background" },

  { key: "heading", label: "Heading color" },

  { key: "text", label: "Subtitle color" },

  { key: "inputBackground", label: "Input background" },

  { key: "inputText", label: "Input text" },

  { key: "border", label: "Input border" },

  { key: "buttonBackground", label: "Button color" },

  { key: "buttonHover", label: "Button hover" },

  { key: "buttonText", label: "Button text" },
];

const SETUP_STEPS = [
  {
    title: "Customize your form",

    description:
      "Edit the heading, subtitle and theme. Preview your changes instantly.",

    icon: Palette,
  },

  {
    title: "Download the component",

    description:
      "After purchase is available, get the source code and setup documentation.",

    icon: Download,
  },

  {
    title: "Connect your backend",

    description:
      "Configure your own API endpoint, server-side validation and password handling.",

    icon: Server,
  },

  {
    title: "Test and deploy",

    description:
      "Verify authentication, error handling and production configuration.",

    icon: ShieldCheck,
  },
];

const editorInput =
  "mt-1.5 w-full rounded-lg border border-white/10 bg-black px-3 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#7C8615] focus:outline-none focus:ring-1 focus:ring-[#7C8615]";

export default function FeaturedComponentsSection() {
  const [theme, setTheme] = useState<FormTheme>(DEFAULT_THEME);

  const [heading, setHeading] = useState("Welcome back");

  const [subtitle, setSubtitle] = useState(
    "Sign in to continue to your account.",
  );

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [feedback, setFeedback] = useState("");

  const [feedbackType, setFeedbackType] = useState<"error" | "success">(
    "error",
  );

  const [buttonHovered, setButtonHovered] = useState(false);

  function updateColor(key: keyof FormTheme, value: string) {
    setTheme((current) => ({ ...current, [key]: value }));
  }

  function resetEditor() {
    setTheme({ ...DEFAULT_THEME });

    setHeading("Welcome back");

    setSubtitle("Sign in to continue to your account.");

    setEmail("");

    setPassword("");

    setFeedback("");

    setButtonHovered(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setFeedbackType("error");

      setFeedback("Enter an email address and password to try the demo.");

      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedbackType("error");

      setFeedback("Enter a valid email address.");

      return;
    }

    setFeedbackType("success");

    setFeedback(
      "Demo successful! No account was created and no credentials were sent.",
    );
  }

  return (
    <section
      id="components"
      aria-labelledby="featured-components-title"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[4.4%]">
        {/* Section heading */}

        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
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
            className="inline-flex w-fit items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-[#A5AF39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
          >
            Explore all components
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Unified product + editor + preview */}

        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)\_minmax(0,1.05fr)]">
            {/* LEFT: Product details and editor */}

            <div className="min-w-0 p-5 sm:p-7 lg:p-8">
              {/* Product details */}

              <div className="border-b border-white/10 pb-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7C8615]/30 bg-[#7C8615]/10 text-[#A5AF39]">
                    <Code2 size={16} aria-hidden="true" />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A5AF39]">
                    Authentication UI
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Email + Password Form
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                  Customize your form, preview its appearance and follow the
                  setup guide to connect your own authentication backend.
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Custom colors & gradients",

                    "Integration guide",

                    "Downloadable ZIP",

                    "Live form preview",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-white/65"
                    >
                      <Check size={14} className="shrink-0 text-[#A5AF39]" />

                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
                      Starting price
                    </p>

                    <p className="mt-1 text-3xl font-semibold tracking-tight">
                      ₹49
                    </p>
                  </div>

                  <Link
                    href="/components/email-password-form"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#7C8615] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#929C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    View component
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                <p className="mt-3 text-[10px] leading-5 text-white/35">
                  Purchase and downloads are not available yet.
                </p>
              </div>

              {/* Content customization */}

              <div className="border-b border-white/10 py-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Type size={15} className="text-[#A5AF39]" />

                    <h4 className="text-sm font-semibold">Form content</h4>
                  </div>

                  <button
                    type="button"
                    onClick={resetEditor}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-xs text-white/65 transition hover:border-[#7C8615] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
                  >
                    <RotateCcw size={12} />
                    Reset
                  </button>
                </div>

                <label className="block text-xs text-white/65">
                  Heading
                  <input
                    type="text"
                    value={heading}
                    maxLength={70}
                    onChange={(event) => setHeading(event.target.value)}
                    placeholder="Enter heading"
                    className={editorInput}
                  />
                </label>

                <label className="mt-3 block text-xs text-white/65">
                  Subtitle
                  <textarea
                    rows={2}
                    value={subtitle}
                    maxLength={180}
                    onChange={(event) => setSubtitle(event.target.value)}
                    placeholder="Enter subtitle"
                    className={`${editorInput} resize-y`}
                  />
                </label>
              </div>

              {/* Theme presets */}

              <div className="border-b border-white/10 py-5">
                <div className="mb-3 flex items-center gap-2">
                  <Palette size={15} className="text-[#A5AF39]" />

                  <h4 className="text-sm font-semibold">Choose a theme</h4>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {PRESETS.map((preset) => {
                    const selected =
                      JSON.stringify(theme) === JSON.stringify(preset.theme);

                    return (
                      <button
                        key={preset.name}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setTheme({ ...preset.theme })}
                        className={`rounded-lg border p-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] ${
                          selected
                            ? "border-[#929C22] bg-[#7C8615]/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span
                          className="mb-2 flex h-6 items-center gap-1 rounded p-1"
                          style={{
                            backgroundColor: preset.theme.background,
                          }}
                        >
                          <span
                            className="h-3.5 w-3.5 rounded-full"
                            style={{
                              backgroundColor: preset.theme.buttonBackground,
                            }}
                          />

                          <span
                            className="h-1 flex-1 rounded-full"
                            style={{
                              backgroundColor: preset.theme.heading,
                            }}
                          />
                        </span>

                        <span className="text-[11px] text-white/80">
                          {preset.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom color controls */}

              <div className="border-b border-white/10 py-5">
                <h4 className="mb-4 text-sm font-semibold">Custom colors</h4>

                <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                  {COLOR_OPTIONS.map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex min-w-0 items-center justify-between gap-2"
                    >
                      <span className="text-[11px] text-white/65">{label}</span>

                      <span className="flex shrink-0 items-center gap-2">
                        <span className="font-mono text-[10px] uppercase text-white/40">
                          {theme[key]}
                        </span>

                        <input
                          type="color"
                          aria-label={label}
                          value={theme[key]}
                          onChange={(event) =>
                            updateColor(key, event.target.value)
                          }
                          className="h-7 w-8 cursor-pointer rounded border border-white/15 bg-transparent p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
                        />
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Setup instructions */}

              <div className="pt-5">
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen size={15} className="text-[#A5AF39]" />

                  <h4 className="text-sm font-semibold">Setup guide</h4>
                </div>

                <ol className="space-y-4">
                  {SETUP_STEPS.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <li key={step.title} className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#7C8615]/25 bg-[#7C8615]/10 text-[#A5AF39]">
                          <Icon size={15} aria-hidden="true" />
                        </span>

                        <div>
                          <p className="text-xs font-medium text-white/85">
                            <span className="mr-2 font-mono text-[#929C22]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {step.title}
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-white/45">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-5 rounded-xl border border-[#7C8615]/20 bg-[#7C8615]/[0.06] p-3">
                  <p className="text-xs font-medium text-[#B1BD52]">
                    Beginner-friendly integration
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    The preview is interactive, but real authentication requires
                    a secure backend integration.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Preview and guidance */}

            <div className="relative flex min-w-0 flex-col border-t border-white/10 bg-[#0D0D0B] lg:border-l lg:border-t-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,134,21,0.09),transparent_70%)]"
              />

              <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <Eye size={15} className="text-[#A5AF39]" />
                  <h4 className="text-xs font-medium text-white/80">
                    Live preview
                  </h4>
                </div>
                <span className="rounded-full border border-[#7C8615]/30 bg-[#7C8615]/10 px-2.5 py-1 text-[10px] text-[#B8C56A]">
                  Interactive demo
                </span>
              </div>

              {/* Demo guidance */}
              <div className="relative border-b border-white/10 px-5 py-6 sm:px-7">
                <div className="mb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A5AF39]">
                    Try it yourself
                  </p>
                  <h5 className="mt-2 text-base font-semibold text-white">
                    Your form, your rules.
                  </h5>
                  <p className="mt-2 max-w-lg text-xs leading-6 text-white/45">
                    Experiment with the form before integrating it into your own
                    project. Your changes update the preview instantly.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C8615]/10 text-[#A5AF39]">
                      <Type size={15} />
                    </span>
                    <p className="mt-3 text-xs font-medium text-white/85">
                      Edit content
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/40">
                      Change the heading and subtitle on the left.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C8615]/10 text-[#A5AF39]">
                      <Palette size={15} />
                    </span>
                    <p className="mt-3 text-xs font-medium text-white/85">
                      Style the form
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/40">
                      Try theme presets and individual color controls.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C8615]/10 text-[#A5AF39]">
                      <ShieldCheck size={15} />
                    </span>
                    <p className="mt-3 text-xs font-medium text-white/85">
                      Test validation
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/40">
                      Submit empty fields or an invalid email to see demo
                      feedback.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#7C8615]/20 bg-[#7C8615]/[0.06] p-4">
                  <BookOpen
                    size={17}
                    className="mt-0.5 shrink-0 text-[#A5AF39]"
                  />
                  <div>
                    <p className="text-xs font-medium text-white/85">
                      Before production
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-white/45">
                      Connect a secure backend, implement server-side validation
                      and password hashing, and configure session handling
                      before using this form for real users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center p-5 sm:p-8 lg:p-10">
                <div
                  className="w-full max-w-md rounded-2xl border p-6 shadow-2xl transition-colors duration-200 sm:p-8"
                  style={{
                    backgroundColor: theme.background,

                    borderColor: theme.border,
                  }}
                >
                  <div className="mb-7">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: theme.buttonBackground,

                        color: theme.buttonText,
                      }}
                    >
                      <Code2 size={20} />
                    </div>

                    <h5
                      className="break-words text-2xl font-semibold tracking-tight"
                      style={{ color: theme.heading }}
                    >
                      {heading || "Your heading"}
                    </h5>

                    <p
                      className="mt-3 whitespace-pre-wrap break-words text-sm leading-6"
                      style={{ color: theme.text }}
                    >
                      {subtitle || "Your subtitle"}
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="imx-demo-email"
                        className="mb-2 block text-xs font-medium"
                        style={{ color: theme.heading }}
                      >
                        Email address
                      </label>

                      <input
                        id="imx-demo-email"
                        type="email"
                        autoComplete="off"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);

                          setFeedback("");
                        }}
                        placeholder="you\@example.com"
                        className="w-full rounded-lg border px-3.5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#7C8615]/40"
                        style={{
                          backgroundColor: theme.inputBackground,

                          color: theme.inputText,

                          borderColor: theme.border,
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="imx-demo-password"
                        className="mb-2 block text-xs font-medium"
                        style={{ color: theme.heading }}
                      >
                        Password
                      </label>

                      <input
                        id="imx-demo-password"
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);

                          setFeedback("");
                        }}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border px-3.5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#7C8615]/40"
                        style={{
                          backgroundColor: theme.inputBackground,

                          color: theme.inputText,

                          borderColor: theme.border,
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      onMouseEnter={() => setButtonHovered(true)}
                      onMouseLeave={() => setButtonHovered(false)}
                      onFocus={() => setButtonHovered(true)}
                      onBlur={() => setButtonHovered(false)}
                      className="w-full rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
                      style={{
                        backgroundColor: buttonHovered
                          ? theme.buttonHover
                          : theme.buttonBackground,

                        color: theme.buttonText,
                      }}
                    >
                      Sign in
                    </button>

                    {feedback && (
                      <p
                        role="status"
                        aria-live="polite"
                        className={`rounded-lg border p-3 text-xs leading-5 ${
                          feedbackType === "error"
                            ? "border-red-500/30 bg-red-500/10 text-red-500"
                            : "border-green-500/30 bg-green-500/10 text-green-600"
                        }`}
                      >
                        {feedback}
                      </p>
                    )}
                  </form>

                  <p
                    className="mt-5 text-center text-[10px] leading-5"
                    style={{ color: theme.text }}
                  >
                    Demo only · Credentials are not sent or stored.
                  </p>
                </div>
              </div>

              <div className="relative border-t border-white/10 px-5 py-3 sm:px-7">
                <p className="text-[10px] leading-5 text-white/40">
                  Edit the content or colors on the left to update this form.
                </p>
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

          <Code2
            size={20}
            strokeWidth={1.5}
            className="shrink-0 text-[#7C8615]"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              name: "Password Reset Form",

              category: "Authentication",

              description:
                "A customizable password reset interface for your application.",
            },

            {
              name: "Contact Form",

              category: "Forms & Communication",

              description:
                "A flexible contact form designed for real project workflows.",
            },
          ].map((product, index) => (
            <article
              key={product.name}
              className="rounded-xl border border-white/10 bg-[#080808] p-5 transition-colors hover:border-[#7C8615]/40 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#929C22]">
                  <Code2 size={20} strokeWidth={1.6} />
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/45">
                  Coming soon
                </span>
              </div>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#929C22]">
                {product.category}
              </p>

              <h4 className="mt-2 text-lg font-semibold text-white">
                {product.name}
              </h4>

              <p className="mt-2 max-w-md text-xs leading-6 text-white/45">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="text-[10px] text-white/30">
                  Future release {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-white/40">Not available yet</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
