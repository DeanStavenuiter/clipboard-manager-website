import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0E3473]">
      <SmoothScroll />
      {/* <Header /> */}
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <Footer />

      {/* Enhanced Structured Data for SEO */}
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Software Application Schema
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "TREX Clipboard Manager",
              "alternateName": "TREX",
              "description": "The ultimate clipboard manager for macOS. Store unlimited clipboard history, smart search, privacy-first design with seamless macOS integration.",
              "applicationCategory": "UtilitiesApplication",
              "applicationSubCategory": "Productivity",
              "operatingSystem": ["macOS", "Mac OS X"],
              "softwareVersion": "1.0",
              "datePublished": "2025",
              "creator": {
                "@type": "Person",
                "name": "Dean Stavenuiter",
                "url": "https://deanstavenuiter.nl"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "Dean Stavenuiter"
              },
              "url": "https://trex.deanstavenuiter.nl",
              "downloadUrl": "https://trex.deanstavenuiter.nl/download/Trex.dmg",
              "screenshot": "https://trex.deanstavenuiter.nl/trex-no-name-no-bg.png",
              "featureList": [
                "Unlimited clipboard history",
                "Smart search functionality", 
                "Privacy-first local storage",
                "Rich content support",
                "Keyboard shortcuts",
                "Menu bar integration",
                "Favorites and tags"
              ],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "category": "Free"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            // Organization Schema
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TREX",
              "url": "https://trex-clipboard.com",
              "logo": "https://trex-clipboard.com/trex-no-name-no-bg.png",
              "founder": {
                "@type": "Person",
                "name": "Dean Stavenuiter"
              },
              "sameAs": [
                "https://deanstavenuiter.nl"
              ]
            },
            // Website Schema
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TREX Clipboard Manager",
              "url": "https://trex-clipboard.com",
              "description": "Download TREX, the ultimate clipboard manager for macOS with unlimited history and smart search.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://trex-clipboard.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            // FAQ Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is TREX Clipboard Manager?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TREX is a powerful clipboard manager for macOS that stores unlimited clipboard history, provides smart search functionality, and offers privacy-first local storage with seamless macOS integration."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Is TREX free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, TREX is completely free to download and use. There are no hidden costs or subscription fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does TREX work with all macOS versions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TREX is built specifically for macOS and works with modern Mac systems. It's optimized for native performance and seamless integration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is my clipboard data secure with TREX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, TREX follows a privacy-first approach. All your clipboard data stays locally on your Mac with no cloud sync or tracking."
                  }
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
