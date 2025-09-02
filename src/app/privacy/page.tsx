import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy - TREX Clipboard Manager | Data Protection & Privacy",
  description:
    "Read TREX's privacy policy. Learn how we protect your data with our privacy-first approach - 100% local storage, no cloud sync, no tracking. Complete transparency.",
  keywords:
    "TREX privacy policy, clipboard manager privacy, data protection, local storage, no tracking, macOS privacy",
  openGraph: {
    title:
      "Privacy Policy - TREX Clipboard Manager | Data Protection & Privacy",
    description:
      "Read TREX's privacy policy. Learn how we protect your data with our privacy-first approach - 100% local storage, no cloud sync, no tracking.",
    type: "website",
    url: "/privacy",
  },
  twitter: {
    title:
      "Privacy Policy - TREX Clipboard Manager | Data Protection & Privacy",
    description:
      "Read TREX's privacy policy. Learn how we protect your data with our privacy-first approach - 100% local storage, no cloud sync, no tracking.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "September 2025";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
          {/* App Name with Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20">
              <Image
                src="/trex-no-name-no-bg.png"
                alt="TREX"
                width={85}
                height={85}
                className="drop-shadow-lg w-16 h-16 md:w-[85px] md:h-[85px]"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-wider bg-gradient-to-r from-white via-[#5FB845] to-white bg-clip-text text-transparent drop-shadow-2xl">
                TREX
              </h1>
              <div className="h-0.5 md:h-1 bg-gradient-to-r from-transparent via-[#5FB845] to-transparent rounded-full mt-1 md:mt-2"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-white via-[#5FB845] to-white bg-clip-text text-transparent px-2">
            Privacy Policy
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            Your privacy is our priority. Learn how TREX protects your data with
            complete transparency.
          </p>

          <div className="text-white/70 text-sm md:text-base">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-[#5FB845]/10 to-[#023531]/10 rounded-2xl p-6 md:p-8 mb-8 border border-[#5FB845]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#023531] mb-4">
                Privacy-First by Design
              </h2>
              <p className="text-gray-700 leading-relaxed">
                TREX Clipboard Manager is built with privacy as a fundamental
                principle. Unlike many apps, we believe your clipboard data
                should stay on your device, under your control. This policy
                explains our privacy practices in clear, simple terms.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                What Data We Collect
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Your Clipboard Data
                  </h3>
                  <p className="text-green-700">
                    <strong>Stored 100% locally on your Mac.</strong> Your
                    clipboard history, favorites, and all content remain on your
                    device. We have no access to this data, and it never leaves
                    your computer.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">
                    Website Data Only
                  </h3>
                  <p className="text-orange-700">
                    Our website uses standard web analytics (Google Analytics)
                    to understand visitor patterns. This helps us improve our
                    website and documentation.{" "}
                    <strong>The application itself collects no data.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Data */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                How We Use Your Data
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Clipboard Data
                  </h3>
                  <p className="text-gray-600">
                    Used solely for the app&apos;s functionality on your device.
                    We never access, transmit, or analyze your clipboard
                    content.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Website Analytics
                  </h3>
                  <p className="text-gray-600">
                    Help us understand website usage to improve our
                    documentation and user experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Contact Forms
                  </h3>
                  <p className="text-gray-600">
                    Used only to respond to your inquiries and provide support.
                    Never shared with third parties.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    No App Tracking
                  </h3>
                  <p className="text-gray-600">
                    The TREX application itself collects no usage data, crash
                    reports, or analytics. Complete privacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Data Sharing & Third Parties
              </h2>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  What We DON&apos;T Do
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-2">
                  <li>Sell your data to anyone</li>
                  <li>Share clipboard content with third parties</li>
                  <li>Use your data for advertising</li>
                  <li>Store your clipboard data on our servers</li>
                  <li>Track your clipboard usage patterns</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Limited Sharing Scenarios
                </h3>
                <p className="text-gray-600 mb-3">
                  We may share minimal, non-personal data only in these
                  situations:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Website analytics with Google Analytics (website visitors
                    only, not app usage)
                  </li>
                  <li>
                    Legal compliance if required by law (though this has never
                    occurred)
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Data Security
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#023531] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Local File Storage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Data stored in standard JSON format in your Application
                    Support folder
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5FB845] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No Cloud Storage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Everything stays on your device, eliminating cloud security
                    risks
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  📁 Technical Details
                </h3>
                <p className="text-yellow-700 text-sm">
                  Your clipboard data is stored as a JSON file at:{" "}
                  <code className="bg-yellow-100 px-2 py-1 rounded">
                    /Library/Application Support/Trex/clipboardHistory.json
                  </code>
                  <br />
                  The data is stored in plain text format and protected by your
                  macOS user account permissions. As an open-source application,
                  TREX is not code-signed by Apple.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Your Privacy Rights (GDPR Compliance)
              </h2>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Under EU/Dutch Law (GDPR)
                </h3>
                <p className="text-blue-700 mb-4">
                  As a Netherlands-based service, we comply with GDPR. Because
                  your data stays on your device, you have complete control:
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>
                    <strong>Right to Access:</strong> All your data is
                    accessible through the app interface
                  </li>
                  <li>
                    <strong>Right to Portability:</strong> Export your clipboard
                    history at any time
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Clear individual items or
                    entire history instantly
                  </li>
                  <li>
                    <strong>Right to Object:</strong> No tracking or profiling
                    occurs
                  </li>
                  <li>
                    <strong>Data Minimization:</strong> Only necessary data is
                    collected
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🇳🇱 Netherlands Jurisdiction
                </h3>
                <p className="text-green-700 text-sm">
                  This service is operated from the Netherlands and complies
                  with Dutch and EU privacy laws. Since all clipboard data is
                  stored locally on your device, most data protection concerns
                  are inherently addressed by our architecture.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this privacy policy occasionally to reflect
                changes in our practices or for legal reasons. When we do:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  We&apos;ll update the &quot;Last updated&quot; date at the top
                </li>
                <li>Significant changes will be announced on our website</li>
                <li>
                  App updates will include policy change notifications if
                  relevant
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-[#023531] to-[#5FB845] rounded-2xl p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-white/90 mb-6">
                We&apos;re committed to transparency. If you have any questions
                about this policy or our privacy practices, we&apos;d be happy
                to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative bg-white text-[#023531] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl flex items-center gap-3 overflow-hidden w-full max-w-sm md:max-w-none justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5FB845]/10 to-[#5FB845]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-6 h-6 relative z-10 transition-transform group-hover:translate-y-[-2px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 ring-2 ring-white/20 rounded-2xl group-hover:ring-white/40 transition-all duration-300"></div>
                </Link>
                <Link
                  href="/faq"
                  className="group relative border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/10 hover:border-white/50 flex items-center gap-3 overflow-hidden w-full max-w-sm md:max-w-none justify-center hover:scale-105"
                >
                  <span className="relative z-10">Check FAQ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data */}
      <Script
        id="privacy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - TREX Clipboard Manager",
            description:
              "TREX privacy policy explaining our privacy-first approach with 100% local storage and no tracking.",
            url: "https://trex.deanstavenuiter.nl/privacy",
            about: {
              "@type": "SoftwareApplication",
              name: "TREX Clipboard Manager",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "macOS",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://trex.deanstavenuiter.nl/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Privacy Policy",
                  item: "https://trex.deanstavenuiter.nl/privacy",
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
