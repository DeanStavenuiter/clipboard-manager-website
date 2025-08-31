import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Download from '@/components/Download';
import TipSection from '@/components/TipSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0E3473]">
      <SmoothScroll />
      <Header />
      <Hero />
      <Features />
      <Download />
      <TipSection />
      <Footer />

      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ClipboardMaster",
            "description": "The ultimate clipboard manager for macOS. Store, organize, and access your clipboard history with ease.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "macOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />
    </div>
  );
}
