export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0E3473] via-[#1a4a8a] to-[#2563eb] text-white py-16 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0E3473]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ClipboardMaster
              </h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              The ultimate clipboard manager for macOS. Simple, powerful, and privacy-focused. 
              Built by developers, for developers and power users.
            </p>
            
            {/* Social links placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          <div>
            <h4 className="font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#features" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Features
              </a></li>
              <li><a href="#download" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Download
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Release Notes
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Roadmap
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Help Center
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Contact
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Bug Reports
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Feature Requests
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                Terms of Service
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                License
              </a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-200 text-sm">
              &copy; 2024 ClipboardMaster. All rights reserved. Made with ❤️ for macOS users.
            </div>
            <div className="flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="text-blue-300">v1.0.0</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
