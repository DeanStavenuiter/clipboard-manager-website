import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact TREX - Get Support | Clipboard Manager for macOS",
  description: "Get in touch with the TREX team. Contact us for support, feature requests, bug reports, or general inquiries about our macOS clipboard manager.",
  keywords: "TREX contact, clipboard manager support, macOS help, contact form, technical support, feature requests",
  openGraph: {
    title: "Contact TREX - Get Support | Clipboard Manager for macOS",
    description: "Get in touch with the TREX team. Contact us for support, feature requests, bug reports, or general inquiries about our macOS clipboard manager.",
    type: "website",
    url: '/contact',
  },
  twitter: {
    title: "Contact TREX - Get Support | Clipboard Manager for macOS",
    description: "Get in touch with the TREX team. Contact us for support, feature requests, bug reports, or general inquiries about our macOS clipboard manager.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
