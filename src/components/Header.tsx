import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#023531]/90 border-b border-white/10 text-white py-3 sm:py-4 px-4 sm:px-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-fit bg-white rounded-lg">
            <Image 
              src="/trex-no-name-no-bg.png" 
              alt="TREX Logo" 
              className="object-contain rounded-lg"
              width={50}
              height={50}
            />
          </div>
          {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#5FB845] bg-clip-text text-transparent uppercase">
            Trex
          </h1> */}
        </div>
        <div className="hidden sm:flex items-center space-x-6 sm:space-x-8">
          <a 
            href="#features" 
            className="relative py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="relative z-10">Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5FB845]/20 to-[#5FB845]/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#download" 
            className="relative py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="relative z-10">Download</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5FB845]/20 to-[#5FB845]/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </nav>
    </header>
  );
}
