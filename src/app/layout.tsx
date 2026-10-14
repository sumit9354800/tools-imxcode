import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tools.imxcode.in"),
  title: {
    default: "IMX Digital Tools — Ready-to-integrate developer components",
    template: "%s | IMX Digital Tools",
  },
  description:
    "Developer-focused components with clear setup instructions, customizable UI, and practical integrations.",
  applicationName: "IMX Digital Tools",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IMX Digital Tools",
    description:
      "Build faster with customizable components designed for developers.",
    url: "https://tools.imxcode.in",
    siteName: "IMX Digital Tools",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10110d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
