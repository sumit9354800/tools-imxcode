
"use client";

import { useState } from "react";
import {
  Eye,
  Palette,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
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
  { key: "heading", label: "Heading" },
  { key: "text", label: "Subtitle text" },
  { key: "inputBackground", label: "Input background" },
  { key: "inputText", label: "Input text" },
  { key: "border", label: "Input border" },
  { key: "buttonBackground", label: "Button color" },
  { key: "buttonHover", label: "Button hover" },
  { key: "buttonText", label: "Button text" },
];

const EDITOR_INPUT =
  "mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#7C8615] focus:outline-none focus:ring-1 focus:ring-[#7C8615]";

export default function ComponentPreview() {
  const [theme, setTheme] = useState<FormTheme>(DEFAULT_THEME);

  const [formHeading, setFormHeading] = useState("Welcome back");
  const [formSubtitle, setFormSubtitle] = useState(
    "Sign in to continue to your account."
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  function updateColor(key: keyof FormTheme, value: string) {
    setTheme((current) => ({ ...current, [key]: value }));
  }

  function resetEditor() {
    setTheme({ ...DEFAULT_THEME });
    setFormHeading("Welcome back");
    setFormSubtitle("Sign in to continue to your account.");
    setEmail("");
    setPassword("");
    setFeedback(null);
    setButtonHovered(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    if (!email.trim() || !password) {
      setFeedback({
        type: "error",
        message: "Please enter both your email and password.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setFeedback({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message: "Demo completed! No account was created and no data was sent.",
    });
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] text-white shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(235px,0.85fr)_minmax(0,1.15fr)]">
        {/* LEFT: Editor */}
        <aside className="min-w-0 border-b border-white/10 md:border-b-0 md:border-r">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-2">
              <Palette size={18} className="shrink-0 text-[#A7B34A]" />
              <div>
                <h3 className="text-sm font-semibold">Theme Editor</h3>
                <p className="mt-1 text-[11px] text-white/45">
                  Customize your form
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetEditor}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-xs text-white/70 transition hover:border-[#7C8615] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>

          {/* Text customization */}
          <div className="border-b border-white/10 p-4">
            <div className="mb-4 flex items-center gap-2">
              <Type size={14} className="text-[#A7B34A]" />
              <h4 className="text-xs font-medium text-white/80">
                Form content
              </h4>
            </div>

            <label className="mb-3 block text-[11px] text-white/65">
              Heading
              <input
                type="text"
                maxLength={70}
                value={formHeading}
                onChange={(event) => setFormHeading(event.target.value)}
                placeholder="Enter form heading"
                className={EDITOR_INPUT}
              />
            </label>

            <label className="block text-[11px] text-white/65">
              Subtitle
              <textarea
                rows={3}
                maxLength={180}
                value={formSubtitle}
                onChange={(event) => setFormSubtitle(event.target.value)}
                placeholder="Enter form subtitle"
                className={`${EDITOR_INPUT} resize-y`}
              />
            </label>

            <p className="mt-2 text-[10px] text-white/35">
              Changes appear in the preview instantly.
            </p>
          </div>

          {/* Presets */}
          <div className="border-b border-white/10 p-4">
            <h4 className="mb-3 text-xs font-medium text-white/80">
              Quick themes
            </h4>

            <div className="grid grid-cols-2 gap-2">
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
                      style={{ backgroundColor: preset.theme.background }}
                    >
                      <span
                        className="h-3.5 w-3.5 rounded-full"
                        style={{
                          backgroundColor: preset.theme.buttonBackground,
                        }}
                      />
                      <span
                        className="h-1 flex-1 rounded-full"
                        style={{ backgroundColor: preset.theme.heading }}
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

          {/* Custom colors */}
          <div className="p-4">
            <h4 className="mb-4 text-xs font-medium text-white/80">
              Custom colors
            </h4>

            <div className="space-y-3">
              {COLOR_OPTIONS.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex min-w-0 items-center justify-between gap-2"
                >
                  <span className="text-[11px] leading-4 text-white/65">
                    {label}
                  </span>

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
        </aside>

        {/* RIGHT: Working interactive demo */}
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-2">
              <Eye size={15} className="text-[#A7B34A]" />
              <span className="text-xs font-medium text-white/80">
                Live preview
              </span>
            </div>

            <span className="rounded-full border border-[#7C8615]/30 bg-[#7C8615]/10 px-2.5 py-1 text-[10px] text-[#B8C56A]">
              Interactive demo
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center p-5 sm:p-8 lg:p-10">
            <div
              className="w-full max-w-md rounded-2xl border p-5 transition-colors duration-200 sm:p-7"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.border,
              }}
            >
              <div className="mb-6">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: theme.buttonBackground,
                    color: theme.buttonText,
                  }}
                >
                  <Palette size={19} />
                </div>

                <h4
                  className="break-words text-xl font-semibold tracking-tight"
                  style={{ color: theme.heading }}
                >
                  {formHeading || "Your heading"}
                </h4>

                <p
                  className="mt-2 whitespace-pre-wrap break-words text-sm leading-6"
                  style={{ color: theme.text }}
                >
                  {formSubtitle || "Your subtitle"}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="demo-email"
                    className="mb-2 block text-xs font-medium"
                    style={{ color: theme.heading }}
                  >
                    Email address
                  </label>

                  <input
                    id="demo-email"
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setFeedback(null);
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#7C8615]/40"
                    style={{
                      backgroundColor: theme.inputBackground,
                      color: theme.inputText,
                      borderColor: theme.border,
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-password"
                    className="mb-2 block text-xs font-medium"
                    style={{ color: theme.heading }}
                  >
                    Password
                  </label>

                  <input
                    id="demo-password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setFeedback(null);
                    }}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#7C8615]/40"
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
                  className="w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#929C22]"
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
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-2 rounded-lg border p-3 text-xs leading-5 ${
                      feedback.type === "error"
                        ? "border-red-500/30 bg-red-500/10 text-red-600"
                        : "border-green-500/30 bg-green-500/10 text-green-700"
                    }`}
                  >
                    {feedback.type === "error" ? (
                      <AlertCircle size={15} className="mt-0.5 shrink-0" />
                    ) : (
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                    )}
                    <span>{feedback.message}</span>
                  </div>
                )}
              </form>

              <p
                className="mt-4 text-center text-[10px] leading-5"
                style={{ color: theme.text }}
              >
                Demo only · Credentials are not sent or stored.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-4 py-3 sm:px-5">
            <p className="text-[10px] leading-5 text-white/40">
              Try changing the heading, subtitle, colors, and submitting the
              form to experience the demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
