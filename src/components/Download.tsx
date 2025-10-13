"use client";

export default function Download() {
  const handleDownload = () => {
    window.location.href = 'https://trex-clipboard-manager.s3.eu-north-1.amazonaws.com/Trex-1.0.1-arm64.dmg';
  };

  return (
    <section id="download" className="relative py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white overflow-hidden min-h-screen md:h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#5FB845]/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-[#5FB845] to-[#5FB845]/80 bg-clip-text text-transparent">
            Ready to Supercharge Your Clipboard?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5FB845]/90 max-w-3xl mx-auto leading-relaxed">
            Download TREX for free and experience the difference. Join thousands of users already boosting their productivity.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#023531]/20 to-[#5FB845]/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white text-center">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              {/* Left side - Requirements */}
              <div className="text-left order-2 md:order-1">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-white">supports Mac OSX 10.12+</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-white">Apple Silicon & Intel support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-white">150MB free disk space</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Download button */}
              <div className="text-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="relative">
                  <button 
                    className="group relative bg-white from-white text-[#023531] px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl w-full flex items-center justify-center gap-3 md:gap-4 overflow-hidden"
                    onClick={handleDownload}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5FB845]/10 to-[#5FB845]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-8 h-8 relative z-10 transition-transform group-hover:translate-y-[-3px] group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    <span className="relative z-10">Download for Free</span>
                    <div className="absolute inset-0 ring-2 ring-white/30 rounded-2xl group-hover:ring-white/50 transition-all duration-300"></div>
                  </button>
                  
               
                </div>
              </div>
            </div>
            
            {/* Security badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span className="text-white">Virus Free</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span className="text-white">Code Signed</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,9H7V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7V9M18,9A2,2 0 0,1 20,11V21A2,2 0 0,1 18,23H6A2,2 0 0,1 4,21V11A2,2 0 0,1 6,9H18Z"/>
                </svg>
                <span className="text-white">Privacy Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
