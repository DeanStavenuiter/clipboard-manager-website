import React from "react";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7v2H5V4h3.5l1-1h5l1 1H19z"/>
        </svg>
      ),
      title: "Unlimited History",
      description: "Store unlimited clipboard entries with intelligent categorization. Never lose important copied content again."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "Smart Search",
      description: "Find any clipboard item instantly with powerful search functionality. Search by text, date, or content type."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Favorites & Tags",
      description: "Mark important clips as favorites and organize them with custom tags for instant access."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ),
      title: "Privacy First",
      description: "Your clipboard data stays private on your Mac. No cloud sync, no tracking, just pure local storage."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      title: "Rich Content Support",
      description: "Handle text, images, files, and formatted content with full preview capabilities."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Quick Access",
      description: "Access your clipboard history with customizable keyboard shortcuts and menu bar integration."
    }
  ];

  return (
    <section id="features" className="py-8 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#023531] to-[#5FB845] bg-clip-text text-transparent">
            Why Choose TREX as Your macOS Clipboard Manager?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built specifically for macOS with native performance and seamless integration. 
            The most powerful clipboard manager app for Mac users who value productivity and privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#5FB845]/30 overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5FB845]/5 to-[#5FB845]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#023531] to-[#5FB845] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#023531] to-[#5FB845] rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(feature.icon, { 
                      className: "w-5 h-5 md:w-7 md:h-7 text-white" 
                    })}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-[#023531] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#023531] to-[#5FB845] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
                      ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023531] to-[#5FB845] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Features in Detail</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
