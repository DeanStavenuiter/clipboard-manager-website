import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
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
  title: "TREX - The Ultimate Clipboard Manager for macOS | Free Download",
  description: "Download TREX, the most powerful and intuitive clipboard manager for macOS. Store unlimited clipboard history, smart search, privacy-first design. Free download available - boost your productivity today!",
  keywords: "clipboard manager macOS, clipboard history mac, productivity tools, copy paste manager, mac utilities, clipboard organizer, macOS productivity, clipboard app, text manager, clipboard storage, mac software, productivity app, clipboard tool mac, free clipboard manager",
  authors: [{ name: "Dean Stavenuiter", url: "https://deanstavenuiter.nl" }],
  creator: "Dean Stavenuiter",
  publisher: "TREX",
  applicationName: "TREX Clipboard Manager",
  category: "Productivity",
  classification: "Utilities",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://trex.deanstavenuiter.nl'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'V-l_Yt_AfpfyLds07Mv3vMYzYIjKURMjruV7WapBnpk', 
  },
  openGraph: {
    title: "TREX - The Ultimate Clipboard Manager for macOS | Free Download",
    description: "Download TREX, the most powerful clipboard manager for macOS. Unlimited history, smart search, privacy-first. Boost your productivity today!",
    type: "website",
    locale: "en_US",
    siteName: "TREX Clipboard Manager",
    url: '/',
    images: [
      {
        url: '/trex-no-name-no-bg.png',
        width: 1200,
        height: 630,
        alt: 'TREX Clipboard Manager for macOS',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TREX - The Ultimate Clipboard Manager for macOS | Free Download",
    description: "Download TREX, the most powerful clipboard manager for macOS. Unlimited history, smart search, privacy-first. Boost your productivity today!",
    images: ['/trex-no-name-no-bg.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/trex-no-name-no-bg.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/trex-no-name-no-bg.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#023531" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <GoogleTagManager gtmId="GTM-MQCZVGFK" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
