import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-8 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5FB845]/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand section */}
          <div className=" lg:col-span-2">
            <div className="flex flex-row md:flex-row items-center md:items-start gap-4 md:gap-5 mb-6 md:mb-8 md:text-left">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
                <Image
                  src="/trex-no-name-no-bg.png"
                  alt="TREX Logo"
                  width={46}
                  height={46}
                  className="drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-white via-[#5FB845] to-white bg-clip-text text-transparent drop-shadow-lg">
                  TREX
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-[#5FB845] to-transparent rounded-full mt-1 w-16 md:w-auto mx-auto md:mx-0"></div>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-6 max-w-md mx-auto md:mx-0">
              <p className="text-base md:text-lg font-light text-white/90">
                The Ultimate
              </p>
              <p className="text-lg md:text-xl font-medium text-[#5FB845]">
                Clipboard Manager for macOS
              </p>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                Simple, powerful, and privacy-focused. Built by developers, for
                developers and power users who never want to lose their
                clipboard history again.
              </p>
            </div>

            {/* Social links placeholder */}
            <div className="flex gap-4 justify-start md:justify-start">
              <Link
                href="https://github.com/DeanStavenuiter/clipboard-manager"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links sections */}
          <div className=" md:text-left">
            <h4 className="font-bold mb-4 md:mb-6 text-white">Product</h4>
            <ul className="space-y-3 text-[#5FB845]/80">
              <li>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div className=" md:text-left">
            <h4 className="font-bold mb-4 md:mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-[#5FB845]/80">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className=" md:text-left">
            <h4 className="font-bold mb-4 md:mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-[#5FB845]/80">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-[#5FB845] rounded-full group-hover:bg-white transition-colors"></span>
                  License
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 text-center sm:text-left">
            <div className="text-white text-xs sm:text-sm flex items-center gap-1 order-2 sm:order-1">
              &copy; {new Date().getFullYear()} TREX. All rights reserved.
            </div>
            <div className="text-white text-xs sm:text-sm flex items-center justify-center gap-1 order-1 sm:order-2 flex-wrap">
              <span className="flex items-center gap-1">
                Made with{" "}
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-pulse-heart inline-block"
                >
                  <path
                    d="M10.1208 19.3216L8.65325 18.0059C6.94959 16.4709 5.54111 15.1468 4.42783 14.0335C3.31455 12.9202 2.42898 11.9208 1.77113 11.0352C1.11328 10.1497 0.653632 9.33578 0.392179 8.59359C0.130726 7.8514 0 7.09234 0 6.31642C0 4.73083 0.53134 3.4067 1.59402 2.34402C2.6567 1.28134 3.98083 0.75 5.56642 0.75C6.44355 0.75 7.27851 0.935547 8.0713 1.30664C8.86409 1.67774 9.54725 2.20064 10.1208 2.87536C10.6943 2.20064 11.3774 1.67774 12.1702 1.30664C12.963 0.935547 13.798 0.75 14.6751 0.75C16.2607 0.75 17.5848 1.28134 18.6475 2.34402C19.7102 3.4067 20.2415 4.73083 20.2415 6.31642C20.2415 7.09234 20.1108 7.8514 19.8493 8.59359C19.5879 9.33578 19.1282 10.1497 18.4704 11.0352C17.8125 11.9208 16.927 12.9202 15.8137 14.0335C14.7004 15.1468 13.2919 16.4709 11.5883 18.0059L10.1208 19.3216Z"
                    fill="#ef4444"
                  />
                </svg>
                by
              </span>
              <Link
                href="https://deanstavenuiter.nl"
                target="_blank"
                className="hover:text-[#5FB845] transition-colors underline decoration-dotted underline-offset-2"
              >
                Dean Stavenuiter
              </Link>
              <span>for macOS users.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
