import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClipboardMaster - The Ultimate Clipboard Manager for macOS",
  description: "Download ClipboardMaster, the most powerful and intuitive clipboard manager for macOS. Store, organize, and access your clipboard history with ease. Free download available.",
  keywords: "clipboard manager, macOS, clipboard history, productivity, copy paste, clipboard tool, mac app",
  authors: [{ name: "ClipboardMaster" }],
  creator: "ClipboardMaster",
  publisher: "ClipboardMaster",
  robots: "index, follow",
  openGraph: {
    title: "ClipboardMaster - The Ultimate Clipboard Manager for macOS",
    description: "Download ClipboardMaster, the most powerful and intuitive clipboard manager for macOS. Store, organize, and access your clipboard history with ease.",
    type: "website",
    locale: "en_US",
    siteName: "ClipboardMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipboardMaster - The Ultimate Clipboard Manager for macOS",
    description: "Download ClipboardMaster, the most powerful and intuitive clipboard manager for macOS. Store, organize, and access your clipboard history with ease.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
