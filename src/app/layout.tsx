import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";

const commitMono = localFont({
  src: "./fonts/Commit Mono.woff2",
  variable: "--font-commit-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "thinksmall.dev",
  description: "A showcase of does-one-thing-really-well websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={commitMono.variable}>{children}</body>
    </html>
  );
}
