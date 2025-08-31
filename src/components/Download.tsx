"use client";

export default function Download() {
  const handleDownload = () => {
    // Replace this with your actual download link
    window.location.href = '/download/ClipboardMaster.dmg';
  };

  return (
    <section id="download" className="relative py-24 px-6 bg-gradient-to-br from-[#0E3473] via-[#1a4a8a] to-[#2563eb] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Ready to Supercharge Your Clipboard?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Download ClipboardMaster for free and experience the difference. Join thousands of users already boosting their productivity.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left side - Requirements */}
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-white">System Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-blue-100">macOS 11.0 or later</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-blue-100">Apple Silicon & Intel support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <span className="text-blue-100">50MB free disk space</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Download button */}
              <div className="text-center">
                <div className="relative">
                  <button 
                    className="group relative bg-gradient-to-r from-white to-blue-50 text-[#0E3473] px-12 py-6 rounded-2xl font-black text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl w-full flex items-center justify-center gap-4 overflow-hidden"
                    onClick={handleDownload}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-8 h-8 relative z-10 transition-transform group-hover:translate-y-[-3px] group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    <span className="relative z-10">Download Free</span>
                    <div className="absolute inset-0 ring-2 ring-white/30 rounded-2xl group-hover:ring-white/50 transition-all duration-300"></div>
                  </button>
                  
                  {/* Download stats */}
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-blue-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Version 1.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>15.2MB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Notarized by Apple</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span className="text-blue-100">Virus Free</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span className="text-blue-100">Code Signed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,9H7V7A5,5 0 0,1 12,2A5,5 0 0,1 17,7V9M18,9A2,2 0 0,1 20,11V21A2,2 0 0,1 18,23H6A2,2 0 0,1 4,21V11A2,2 0 0,1 6,9H18Z"/>
                </svg>
                <span className="text-blue-100">Privacy Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
