import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Terms of Service - TREX Clipboard Manager | Usage Terms & Conditions",
  description: "Read TREX's terms of service. Understand your rights and responsibilities when using our free macOS clipboard manager application.",
  keywords: "TREX terms of service, clipboard manager terms, usage agreement, software license, macOS app terms",
  openGraph: {
    title: "Terms of Service - TREX Clipboard Manager | Usage Terms & Conditions",
    description: "Read TREX's terms of service. Understand your rights and responsibilities when using our free macOS clipboard manager application.",
    type: "website",
    url: '/terms',
  },
  twitter: {
    title: "Terms of Service - TREX Clipboard Manager | Usage Terms & Conditions",
    description: "Read TREX's terms of service. Understand your rights and responsibilities when using our free macOS clipboard manager application.",
  },
};

export default function TermsPage() {
  const lastUpdated = "January 2025";
  const effectiveDate = "January 2025";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 hover:scale-105 transition-transform">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                <Image
                  src="/trex-no-name-no-bg.png"
                  alt="TREX Logo"
                  width={40}
                  height={40}
                  className="drop-shadow-lg"
                />
              </div>
              <span className="text-2xl font-bold">TREX</span>
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-white via-[#5FB845] to-white bg-clip-text text-transparent px-2">
            Terms of Service
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            Clear and fair terms for using TREX clipboard manager. Your rights and our responsibilities.
          </p>
          
          <div className="text-white/70 text-sm md:text-base">
            Last updated: {lastUpdated} • Effective: {effectiveDate}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-[#5FB845]/10 to-[#023531]/10 rounded-2xl p-6 md:p-8 mb-8 border border-[#5FB845]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#023531] mb-4">Welcome to TREX</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms of service (&quot;Terms&quot;) govern your use of TREX Clipboard Manager (&quot;TREX&quot;, &quot;the App&quot;) 
                developed by Dean Stavenuiter (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading, installing, or using TREX, 
                you agree to these Terms.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Acceptance of Terms
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using TREX, you confirm that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>You have read and understood these Terms</li>
                  <li>You agree to be bound by these Terms</li>
                  <li>You are at least 13 years old (or have parental consent)</li>
                  <li>You have the authority to enter into this agreement</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you do not agree to these Terms, please do not use TREX.
                </p>
              </div>
            </div>

            {/* License and Usage */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                License and Permitted Use
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">✅ You May</h3>
                  <ul className="list-disc list-inside text-green-700 space-y-2">
                    <li>Use TREX for personal or commercial purposes</li>
                    <li>Install TREX on multiple Macs you own</li>
                    <li>Share the download link with others</li>
                    <li>Contribute to the open-source project</li>
                    <li>Create backups of your clipboard data</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">❌ You May Not</h3>
                  <ul className="list-disc list-inside text-red-700 space-y-2">
                    <li>Redistribute the app without permission</li>
                    <li>Reverse engineer or decompile TREX</li>
                    <li>Use TREX for illegal activities</li>
                    <li>Attempt to circumvent security features</li>
                    <li>Claim ownership of TREX or its code</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Open Source License</h3>
                <p className="text-gray-600 mb-3">
                  TREX is open source software. The source code is available on GitHub under the terms 
                  specified in the repository. This grants you additional rights to modify and distribute 
                  the software according to the open source license terms.
                </p>
                <p className="text-gray-600 text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <strong>Note:</strong> As an open-source application, TREX is not code-signed by Apple. 
                  You may need to allow the app to run in your macOS security settings when first launching.
                </p>
              </div>
            </div>

            {/* Free Software */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Free Software
              </h2>
              <div className="bg-[#5FB845]/10 rounded-xl p-6 border border-[#5FB845]/30">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TREX is provided free of charge. We believe in making productivity tools accessible to everyone.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>No subscription fees or hidden costs</li>
                  <li>No premium tiers or paid features</li>
                  <li>No advertisements or sponsored content</li>
                  <li>No requirement to provide payment information</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  While TREX is free, voluntary donations to support development are welcome but never required.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Your Responsibilities
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Management</h3>
                  <p className="text-gray-600">
                    You are responsible for managing your clipboard data, including creating backups 
                    if needed. While TREX stores data locally for your privacy, you should backup 
                    important information separately.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Appropriate Use</h3>
                  <p className="text-gray-600">
                    Use TREX responsibly and in compliance with all applicable laws. Do not use 
                    the app to store or manage illegal content or for any unlawful purposes.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">System Security</h3>
                  <p className="text-gray-600">
                    Keep your Mac and TREX updated to the latest versions. Follow good security 
                    practices to protect your device and data.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Privacy and Your Data
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-blue-700 leading-relaxed mb-4">
                  Your privacy is paramount to us:
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>All clipboard data is stored locally on your device</li>
                  <li>We do not have access to your clipboard content</li>
                  <li>No cloud synchronization or data transmission</li>
                  <li>You maintain complete control over your data</li>
                </ul>
                <p className="text-blue-700 mt-4">
                  For complete details, please read our <Link href="/privacy" className="underline hover:text-blue-800">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Disclaimers and Limitations
              </h2>
              
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mb-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Important Notice</h3>
                <p className="text-yellow-700">
                  TREX is provided &quot;as is&quot; without warranties of any kind. While we strive for reliability, 
                  no software is perfect, and we cannot guarantee uninterrupted operation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Software Warranty</h3>
                  <p className="text-gray-600 text-sm">
                    We provide TREX without express or implied warranties. We do not warrant that 
                    the app will be error-free or meet your specific requirements.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitation of Liability</h3>
                  <p className="text-gray-600 text-sm">
                    To the maximum extent permitted by law, we shall not be liable for any indirect, 
                    incidental, special, or consequential damages arising from your use of TREX.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Loss</h3>
                  <p className="text-gray-600 text-sm">
                    While TREX is designed to preserve your clipboard history, we recommend regular 
                    backups of important data. We are not responsible for any data loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Updates and Changes */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Updates and Modifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">App Updates</h3>
                  <p className="text-green-700">
                    We may release updates to improve functionality, fix bugs, or enhance security. 
                    Updates are always free and optional.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Terms Changes</h3>
                  <p className="text-blue-700">
                    We may update these Terms occasionally. Significant changes will be announced 
                    on our website and in app notifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Termination
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may stop using TREX at any time by simply uninstalling the application. 
                  Upon termination:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Your license to use TREX ends</li>
                  <li>Local data remains on your device (you can delete it manually)</li>
                  <li>These Terms no longer apply to your use</li>
                  <li>You may reinstall and use TREX again in the future</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Governing Law and Disputes
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms are governed by the laws of the Netherlands, where the developer is based. 
                  For any disputes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We encourage contacting us directly to resolve issues</li>
                  <li>Most problems can be solved through friendly communication</li>
                  <li>Formal disputes will be handled under Dutch law</li>
                  <li>We&apos;re committed to fair and reasonable resolution</li>
                </ul>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#5FB845] pb-2">
                Severability and Entire Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If any part of these Terms is found to be unenforceable, the remaining parts will 
                continue to apply. These Terms, together with our Privacy Policy, represent the 
                complete agreement between you and us regarding TREX.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-[#023531] to-[#5FB845] rounded-2xl p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-white/90 mb-6">
                We believe in clear communication. If you have any questions about these Terms 
                or need clarification on anything, please don&apos;t hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#023531] px-6 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors text-center"
                >
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data */}
      <Script 
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - TREX Clipboard Manager",
            "description": "Terms of service for TREX clipboard manager outlining usage rights, responsibilities, and fair terms for our free macOS application.",
            "url": "https://trex.deanstavenuiter.nl/terms",
            "about": {
              "@type": "SoftwareApplication",
              "name": "TREX Clipboard Manager",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "macOS"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://trex.deanstavenuiter.nl/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Terms of Service",
                  "item": "https://trex.deanstavenuiter.nl/terms"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
