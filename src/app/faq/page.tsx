import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "TREX FAQ - Frequently Asked Questions | Clipboard Manager for macOS",
  description: "Find answers to common questions about TREX clipboard manager: features, installation, privacy, system requirements, and troubleshooting. Get help with your macOS clipboard app.",
  keywords: "TREX FAQ, clipboard manager questions, macOS clipboard help, TREX support, clipboard app troubleshooting, macOS productivity FAQ",
  openGraph: {
    title: "TREX FAQ - Frequently Asked Questions | Clipboard Manager for macOS",
    description: "Find answers to common questions about TREX clipboard manager: features, installation, privacy, system requirements, and troubleshooting.",
    type: "website",
    url: '/faq',
  },
  twitter: {
    title: "TREX FAQ - Frequently Asked Questions | Clipboard Manager for macOS",
    description: "Find answers to common questions about TREX clipboard manager: features, installation, privacy, system requirements, and troubleshooting.",
  },
};

export default function FAQPage() {
  const faqSections = [
    {
      title: "General Information",
      faqs: [
        {
          question: "What is TREX Clipboard Manager?",
          answer: "TREX is a powerful clipboard manager for macOS that stores unlimited clipboard history, provides smart search functionality, and offers privacy-first local storage with seamless macOS integration. It's designed to boost your productivity by never letting you lose copied content again."
        },
        {
          question: "Is TREX free to use?",
          answer: "Yes, TREX is completely free to download and use. There are no hidden costs, subscription fees, or premium tiers. We believe in providing powerful productivity tools without barriers."
        },
        {
          question: "What makes TREX different from other clipboard managers?",
          answer: "TREX stands out with its privacy-first approach (100% local storage), native macOS performance, unlimited clipboard history, smart search capabilities, and seamless integration with macOS. It's specifically built for Mac users who value both functionality and privacy."
        }
      ]
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "How many clipboard items can TREX store?",
          answer: "TREX can store unlimited clipboard entries with intelligent categorization. The only limit is your available disk space. All clipboard data is stored locally on your Mac for maximum privacy and performance."
        },
        {
          question: "What types of content does TREX support?",
          answer: "TREX supports a wide range of content types including plain text, rich text, images, file paths, and formatted content. It preserves formatting when possible and provides quick preview capabilities for different content types."
        },
        {
          question: "How does the smart search feature work?",
          answer: "TREX offers full-text search across all your clipboard content. You can search by text content, filter by content type (text and images), use date-based filtering, and get instant results as you type. It makes finding any clipboard item lightning fast."
        },
        {
          question: "Can I organize my clipboard items?",
          answer: "Yes! TREX allows you to mark important items as favorites for quick access. The app automatically categorizes content by type and provides an organized view of your clipboard history with easy navigation."
        },
        {
          question: "What keyboard shortcuts are available?",
          answer: "TREX provides customizable keyboard shortcuts for quick access to your clipboard history. You can access the main interface, search through items, and paste previous clipboard entries without leaving your current workflow."
        }
      ]
    },
    {
      title: "Privacy & Security",
      faqs: [
        {
          question: "Is my clipboard data secure with TREX?",
          answer: "Yes, TREX follows a privacy-first approach. All your clipboard data stays locally on your Mac with no cloud sync, no tracking, and no analytics on your clipboard content. You have complete data ownership and control."
        },
        {
          question: "Does TREX require internet access?",
          answer: "No, TREX works completely offline. No internet connection is required for any of its core functionality. This ensures your clipboard data never leaves your Mac and maintains complete privacy."
        },
        {
          question: "Can other apps access my clipboard data through TREX?",
          answer: "TREX follows macOS security guidelines and only accesses clipboard data when you explicitly interact with the app. Other applications cannot access your TREX clipboard history - only the standard system clipboard content."
        },
        {
          question: "What happens to my data if I uninstall TREX?",
          answer: "Since all data is stored locally, your clipboard history will remain on your Mac even after uninstalling TREX. However, you won't be able to access it without the app. We recommend exporting important items before uninstalling if needed."
        }
      ]
    },
    {
      title: "Installation & System Requirements",
      faqs: [
        {
          question: "What are the system requirements for TREX?",
          answer: "TREX requires macOS 10.12 or later, supports both Apple Silicon and Intel Macs, and needs approximately 150MB of free disk space. It's optimized for native macOS performance across all supported systems."
        },
        {
          question: "Is TREX compatible with Apple Silicon Macs?",
          answer: "Yes, TREX is fully optimized for Apple Silicon Macs (M1, M1 Pro, M1 Max, M2, etc.) and also supports Intel-based Macs. It provides native performance on both architectures."
        },
        {
          question: "How do I install TREX?",
          answer: "Simply download the TREX.dmg file from our website, open it, and drag TREX to your Applications folder. The app is code-signed and notarized by Apple for security. No additional setup is required."
        },
        {
          question: "Does TREX work with all macOS versions?",
          answer: "TREX works with modern macOS versions starting from macOS 10.12 (Sierra) and is regularly tested with the latest macOS releases. It follows macOS design guidelines and integrates seamlessly with the system."
        }
      ]
    },
    {
      title: "Usage & Troubleshooting",
      faqs: [
        {
          question: "How do I access my clipboard history?",
          answer: "You can access your clipboard history through the menu bar icon, keyboard shortcuts, or by opening the main TREX application. The interface provides quick access to recent items and powerful search capabilities."
        },
        {
          question: "Why isn't TREX capturing my clipboard items?",
          answer: "Ensure TREX has the necessary permissions in System Preferences > Security & Privacy > Privacy > Accessibility. The app needs these permissions to monitor clipboard changes. You may need to restart TREX after granting permissions."
        },
        {
          question: "Can I export my clipboard history?",
          answer: "Yes, TREX allows you to export individual clipboard items or your entire history. This is useful for backing up important content or migrating to a new Mac."
        },
        {
          question: "Does TREX affect my Mac's performance?",
          answer: "TREX is designed to be lightweight and efficient. It uses minimal system resources and is optimized for macOS. The app runs quietly in the background without impacting your Mac's performance."
        },
        {
          question: "How do I update TREX?",
          answer: "TREX will notify you when updates are available. You can download the latest version from our website and install it over your existing installation. Your clipboard history and settings will be preserved."
        }
      ]
    },
    {
      title: "Support & Contact",
      faqs: [
        {
          question: "How can I get support for TREX?",
          answer: "You can get support through our contact page, GitHub repository for technical issues, or by checking this FAQ page for common questions. We're committed to helping users get the most out of TREX."
        },
        {
          question: "Can I request new features?",
          answer: "Absolutely! We welcome feature requests and feedback from our users. You can submit requests through our GitHub repository or contact us directly. User feedback helps shape TREX's development."
        },
        {
          question: "Is TREX open source?",
          answer: "Yes, TREX is open source and available on GitHub. You can view the source code, contribute to development, report issues, or even fork the project for your own needs."
        },
        {
          question: "Who develops TREX?",
          answer: "TREX is developed by Dean Stavenuiter, a passionate developer who believes in creating powerful, privacy-focused productivity tools for macOS users. The project is built by developers, for developers and power users."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-12 md:py-16 lg:py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#5FB845]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#5FB845]/40 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

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
            Frequently Asked Questions
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            Find answers to common questions about TREX clipboard manager. 
            Everything you need to know about features, installation, privacy, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/#download"
              className="bg-white text-[#023531] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Download TREX Free
            </Link>
            <Link
              href="/features"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors text-center"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#023531] to-[#5FB845] bg-clip-text text-transparent px-2">
              Everything You Need to Know
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Get answers to the most common questions about TREX clipboard manager.
              Can&apos;t find what you&apos;re looking for? Feel free to contact us.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-800 border-b border-gray-200 pb-3">
                  {section.title}
                </h3>
                
                <div className="space-y-6">
                  {section.faqs.map((faq, faqIndex) => (
                    <details 
                      key={faqIndex}
                      className="group bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100 hover:border-[#5FB845]/30 transition-colors"
                    >
                      <summary className="cursor-pointer list-none">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base md:text-lg font-semibold text-gray-800 pr-4">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0">
                            <svg 
                              className="w-5 h-5 text-[#5FB845] transition-transform group-open:rotate-180" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </summary>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#023531] to-[#5FB845] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/DeanStavenuiter/clipboard-manager"
                target="_blank"
                className="bg-white text-[#023531] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                GitHub Repository
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-colors text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data for FAQ Page */}
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "TREX FAQ - Frequently Asked Questions",
            "description": "Comprehensive FAQ about TREX clipboard manager for macOS covering features, installation, privacy, system requirements, and troubleshooting.",
            "url": "https://trex.deanstavenuiter.nl/faq",
            "mainEntity": faqSections.flatMap(section => 
              section.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            ),
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
                  "name": "FAQ",
                  "item": "https://trex.deanstavenuiter.nl/faq"
                }
              ]
            },
            "about": {
              "@type": "SoftwareApplication",
              "name": "TREX Clipboard Manager",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "macOS"
            }
          })
        }}
      />
    </div>
  );
}
