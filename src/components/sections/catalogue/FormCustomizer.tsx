
"use client";

import { useState } from "react";
import {
  Check,
  Eye,
  Palette,
  RotateCcw,
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

const COLOR_OPTIONS: {
  key: keyof FormTheme;
  label: string;
}[] = [
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

const inputClass =
  "mt-1.5 w-full rounded-lg border border-white/10 bg-black px-3 py-2.5 text-xs text-white placeholder:text-white/30 outline-none transition focus:border-[#7C8615] focus:ring-1 focus:ring-[#7C8615]";

type FormCustomizerProps = {
  productName?: string;
};

export default function FormCustomizer({
  productName = "Email + Password Form",
}: FormCustomizerProps) {
  const [theme, setTheme] = useState<FormTheme>({
    ...DEFAULT_THEME,
  });

  const [heading, setHeading] = useState("Welcome back");
  const [subtitle, setSubtitle] = useState(
    "Sign in to continue to your account.",
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<
    "success" | "error"
  >("error");
  const [hovered, setHovered] = useState(false);

  function updateColor(key: keyof FormTheme, value: string) {
    setTheme((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function resetEditor() {
    setTheme({ ...DEFAULT_THEME });
    setHeading("Welcome back");
    setSubtitle("Sign in to continue to your account.");
    setEmail("");
    setPassword("");
    setFeedback("");
    setHovered(false);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
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
      "Demo successful. No account was created and no credentials were sent.",
    );
  }

  return (
    <section
      aria-label={`${productName} customizer`}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
    >
      <div className="border-b border-white/10 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#929C22]">
              Interactive customizer
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Make it yours.
            </h2>
            <p className="mt-2 text-xs leading-6 text-white/45">
              Customize your form and see every change instantly.
            </p>
          </div>

          <button
            type="button"
            onClick={resetEditor}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2.5 text-xs text-white/65 transition hover:border-[#7C8615] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Editor */}

        <div className="min-w-0 border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2">
            <Type size={15} className="text-[#A5AF39]" />
            <h3 className="text-sm font-semibold text-white">
              Form content
            </h3>
          </div>

          <label className="mt-5 block text-xs text-white/65">
            Heading
            <input
              value={heading}
              maxLength={70}
              onChange={(event) => setHeading(event.target.value)}
              className={inputClass}
              placeholder="Enter form heading"
            />
          </label>

          <label className="mt-4 block text-xs text-white/65">
            Subtitle
            <textarea
              value={subtitle}
              maxLength={180}
              rows={3}
              onChange={(event) => setSubtitle(event.target.value)}
              className={`${inputClass} resize-y`}
              placeholder="Enter form subtitle"
            />
          </label>

          <div className="mt-7 border-t border-white/10 pt-5">
            <div className="flex items-center gap-2">
              <Palette size={15} className="text-[#A5AF39]" />
              <h3 className="text-sm font-semibold text-white">
                Theme presets
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {PRESETS.map((preset) => {
                const selected =
                  JSON.stringify(theme) === JSON.stringify(preset.theme);

                return (
                  <button
                    key={preset.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setTheme({ ...preset.theme })}
                    className={`rounded-xl border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22] ${
                      selected
                        ? "border-[#929C22] bg-[#7C8615]/10"
                        : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span
                      className="flex h-7 items-center gap-2 rounded-md p-1.5"
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

                    <span className="mt-2 block text-xs text-white/75">
                      {preset.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
            <h3 className="text-sm font-semibold text-white">
              Custom colors
            </h3>

            <div className="mt-4 space-y-3">
              {COLOR_OPTIONS.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-xs text-white/60">{label}</span>

                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-white/40">
                      {theme[key]}
                    </span>

                    <input
                      type="color"
                      value={theme[key]}
                      aria-label={label}
                      onChange={(event) =>
                        updateColor(key, event.target.value)
                      }
                      className="h-8 w-9 cursor-pointer rounded border border-white/15 bg-transparent p-0.5"
                    />
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Live preview */}

        <div className="min-w-0 bg-[#0D0D0B]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2">
              <Eye size={15} className="text-[#A5AF39]" />
              <h3 className="text-xs font-medium text-white/80">
                Live preview
              </h3>
            </div>

            <span className="rounded-full border border-[#7C8615]/30 bg-[#7C8615]/10 px-2.5 py-1 text-[10px] text-[#B8C56A]">
              Interactive
            </span>
          </div>

          <div className="flex min-h-full items-center justify-center p-5 sm:p-8">
            <div
              className="w-full max-w-md rounded-2xl border p-6 shadow-2xl transition-colors sm:p-8"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.border,
              }}
            >
              <div className="mb-7">
                <span
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: theme.buttonBackground,
                    color: theme.buttonText,
                  }}
                >
                  <Check size={20} />
                </span>

                <h4
                  className="break-words text-2xl font-semibold tracking-tight"
                  style={{ color: theme.heading }}
                >
                  {heading || "Your heading"}
                </h4>

                <p
                  className="mt-3 whitespace-pre-wrap break-words text-sm leading-6"
                  style={{ color: theme.text }}
                >
                  {subtitle || "Your subtitle"}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <label className="block text-xs font-medium" style={{ color: theme.heading }}>
                  Email address
                  <input
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setFeedback("");
                    }}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border px-3.5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#7C8615]/40"
                    style={{
                      backgroundColor: theme.inputBackground,
                      color: theme.inputText,
                      borderColor: theme.border,
                    }}
                  />
                </label>

                <label className="block text-xs font-medium" style={{ color: theme.heading }}>
                  Password
                  <input
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setFeedback("");
                    }}
                    placeholder="Enter your password"
                    className="mt-2 w-full rounded-lg border px-3.5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#7C8615]/40"
                    style={{
                      backgroundColor: theme.inputBackground,
                      color: theme.inputText,
                      borderColor: theme.border,
                    }}
                  />
                </label>

                <button
                  type="submit"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="w-full rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
                  style={{
                    backgroundColor: hovered
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
        </div>
      </div>
    </section>
  );
}
