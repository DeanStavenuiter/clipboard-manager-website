import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "TREX Features - Advanced Clipboard Manager for macOS | Complete Feature List",
  description: "Discover all TREX clipboard manager features: unlimited history, smart search, privacy-first design, rich content support, keyboard shortcuts, and seamless macOS integration.",
  keywords: "clipboard manager features, macOS clipboard app, clipboard history, smart search, privacy clipboard, mac productivity features, clipboard shortcuts, text management",
  openGraph: {
    title: "TREX Features - Advanced Clipboard Manager for macOS",
    description: "Discover all TREX clipboard manager features: unlimited history, smart search, privacy-first design, and seamless macOS integration.",
    type: "website",
    url: '/features',
  },
  twitter: {
    title: "TREX Features - Advanced Clipboard Manager for macOS",
    description: "Discover all TREX clipboard manager features: unlimited history, smart search, privacy-first design, and seamless macOS integration.",
  },
};

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7v2H5V4h3.5l1-1h5l1 1H19z"/>
        </svg>
      ),
      title: "Unlimited Clipboard History",
      description: "Store unlimited clipboard entries with intelligent categorization. Never lose important copied content again.",
      details: [
        "Store thousands of clipboard items without limits",
        "Automatic categorization by content type (text, images, files)",
        "Persistent storage across system restarts",
        "Quick access to recently used items",
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "Smart Search & Filtering",
      description: "Find any clipboard item instantly with powerful search functionality. Search by text, date, or content type.",
      details: [
        "Full-text search across all clipboard content",
        "Filter by content type (text, images, links, code)",
        "Date-based filtering and sorting",
        "Instant results as you type"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Favorites & Organization",
      description: "Mark important clips as favorites for quick access and better organization.",
      details: [
        "Star important items as favorites",
        "Quick access to favorite items",
        "Organized clipboard history view"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ),
      title: "Privacy-First Design",
      description: "Your clipboard data stays private on your Mac. No cloud sync, no tracking, just pure local storage.",
      details: [
        "100% local storage - no cloud synchronization",
        "No tracking or analytics on your clipboard data",
        "No internet connection required",
        "Complete data ownership and control"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      title: "Rich Content Support",
      description: "Handle different types of clipboard content with ease.",
      details: [
        "Support for text and rich text content",
        "Handle images and file paths",
        "Preserve formatting when possible",
        "Quick preview of clipboard items",
        "Copy and paste any content type"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Quick Access",
      description: "Access your clipboard history with keyboard shortcuts and menu bar integration.",
      details: [
        "Keyboard shortcuts for quick access",
        "Menu bar integration",
        "Quick clipboard history preview",
        "Easy navigation through history",
        "Fast copy and paste workflow"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Native macOS Integration",
      description: "Built specifically for macOS with native performance and seamless system integration.",
      details: [
        "Native macOS design and performance",
        "System-level clipboard monitoring",
        "Optimized for Apple Silicon",
        "Follows macOS design guidelines",
        "Lightweight and efficient"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Productivity Features",
      description: "Essential features to boost your daily workflow and productivity.",
      details: [
        "Persistent clipboard history across restarts",
        "Quick search through your clipboard",
        "Clean and intuitive interface",
        "Reliable clipboard monitoring",
        "Seamless workflow integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
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
            Complete Feature Overview
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            Discover why TREX is a powerful clipboard manager for macOS. 
            Features designed to boost your productivity and protect your privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/#download"
              className="bg-white text-[#023531] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Download Free
            </Link>
            <Link
              href="/"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#023531] to-[#5FB845] bg-clip-text text-transparent px-2">
              Everything You Need in One App
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              TREX combines essential clipboard functionality with elegant design, giving you a great clipboard management experience on macOS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#023531] to-[#5FB845] rounded-xl flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#5FB845] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-r from-[#023531] to-[#5FB845]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 px-2">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 text-white/90 px-4">
            Join Mac users who have discovered the power of TREX clipboard manager.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/#download"
              className="bg-white text-[#023531] px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Download TREX Free
            </Link>
            <Link
              href="/"
              className="border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
          
          <p className="mt-4 sm:mt-6 text-white/70 text-sm sm:text-base px-4">
            Free download • No subscription required • Privacy-first design
          </p>
        </div>
      </section>

      <Footer />

      {/* Structured Data for Features Page */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "TREX Features - Advanced Clipboard Manager for macOS",
            "description": "Complete feature overview of TREX clipboard manager: unlimited history, smart search, privacy-first design, rich content support, and seamless macOS integration.",
            "url": "https://trex.deanstavenuiter.nl/features",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "TREX Clipboard Manager",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "macOS",
              "featureList": [
                "Unlimited clipboard history storage",
                "Smart search through clipboard items", 
                "Privacy-first local storage design",
                "Rich content support for text and images",
                "Keyboard shortcuts for quick access",
                "Native macOS integration and performance",
                "Favorites for important clipboard items",
                "Clean and intuitive user interface"
              ]
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
                  "name": "Features",
                  "item": "https://trex.deanstavenuiter.nl/features"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
