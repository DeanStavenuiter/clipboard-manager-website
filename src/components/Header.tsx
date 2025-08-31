export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E3473]/90 border-b border-white/10 text-white py-4 px-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#0E3473]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            ClipboardMaster
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="relative py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="relative z-10">Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#download" 
            className="relative py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="relative z-10">Download</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#tip" 
            className="relative py-2 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Support
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </nav>
    </header>
  );
}
