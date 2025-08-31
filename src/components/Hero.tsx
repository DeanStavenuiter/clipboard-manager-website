export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0E3473] via-[#1a4a8a] to-[#2563eb] text-white py-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            The Ultimate
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Clipboard Manager for <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent font-black">macOS</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
          Never lose your copied content again. ClipboardMaster stores, organizes, and manages your clipboard history with intelligent search and seamless integration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#download" 
            className="group relative bg-white text-[#0E3473] px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-6 h-6 relative z-10 transition-transform group-hover:translate-y-[-2px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            <span className="relative z-10">Download Free for macOS</span>
            <div className="absolute inset-0 ring-2 ring-white/20 rounded-2xl group-hover:ring-white/40 transition-all duration-300"></div>
          </a>
          
          <a 
            href="#tip" 
            className="group relative backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/20 hover:border-white/50 flex items-center gap-3 hover:scale-105"
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-3.84 3.11-4.09V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 4.15-3.12 4.16z"/>
            </svg>
            Support Development
          </a>
        </div>
        
        {/* Floating feature badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            ⚡ Native macOS Performance
          </div>
          <div className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            🔒 Privacy First
          </div>
          <div className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            🚀 Unlimited History
          </div>
        </div>
      </div>
    </section>
  );
}
