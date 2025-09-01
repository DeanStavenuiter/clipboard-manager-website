"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [wiggleRotation, setWiggleRotation] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Trigger wiggle animation every 4 seconds
  React.useEffect(() => {
    const wiggleInterval = setInterval(() => {
      // Create wiggle sequence
      const rotations = [0, -3, 3, -2, 2, -1, 1, 0];
      rotations.forEach((rotation, index) => {
        setTimeout(() => {
          setWiggleRotation(rotation);
        }, index * 80);
      });
    }, 3500);

    return () => clearInterval(wiggleInterval);
  }, []);
  return (
    <section className="relative bg-gradient-to-br from-[#023531] via-[#034a3f] to-[#5FB845] text-white py-12 md:py-24 px-4 md:px-6 overflow-hidden min-h-screen md:h-screen flex items-center" role="banner" aria-label="TREX Clipboard Manager Introduction">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#5FB845]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#5FB845]/40 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <div className="mb-8 md:mb-12">
          {/* App Name with Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20">
               <Image
              src="/trex-no-name-no-bg.png"
              alt="TREX"
              width={85}
              height={85}
              className="drop-shadow-lg w-16 h-16 md:w-[85px] md:h-[85px]"
            />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-wider bg-gradient-to-r from-white via-[#5FB845] to-white bg-clip-text text-transparent drop-shadow-2xl">
                TREX
              </h1>
              <div className="h-0.5 md:h-1 bg-gradient-to-r from-transparent via-[#5FB845] to-transparent rounded-full mt-1 md:mt-2"></div>
            </div>
          </div>

          {/* Main Tagline */}
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-wide">
              The Ultimate
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-[#5FB845]/90 bg-clip-text text-transparent">
                Clipboard Manager
              </span>
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white/95 px-4">
              for{" "}
              <span className="bg-gradient-to-r from-[#5FB845] to-[#5FB845]/80 bg-clip-text text-transparent font-black italic inline-block pr-2">
                macOS
              </span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
          Never lose your copied content again.{" "}
          <strong className="text-[#5FB845] font-medium">TREX</strong> stores,
          organizes, and manages your clipboard history with intelligent search
          and seamless macOS integration. Boost your productivity with unlimited clipboard storage.
        </p>

        <div className="flex flex-col items-center">
          <div className="mb-6 md:mb-8">
            <Link
              href="#download"
              className="group relative bg-white text-[#023531] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl flex items-center gap-3 overflow-hidden w-full max-w-sm md:max-w-none"
              style={{
                transform: `rotate(${wiggleRotation}deg) ${
                  isHovered ? "scale(1.05)" : "scale(1)"
                }`,
                transition: isHovered
                  ? "transform 0.5s ease-in-out"
                  : "transform 0.08s ease-in-out",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5FB845]/10 to-[#5FB845]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className="w-6 h-6 relative z-10 transition-transform group-hover:translate-y-[-2px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span className="relative z-10">Download for Free</span>
              <div className="absolute inset-0 ring-2 ring-white/20 rounded-2xl group-hover:ring-white/40 transition-all duration-300"></div>
            </Link>
            
          </div>

          {/* Floating feature badges - now under button */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-md md:max-w-none">
            <div className="backdrop-blur-sm bg-white/10 px-3 md:px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              ⚡ Native macOS Performance
            </div>
            <div className="backdrop-blur-sm bg-white/10 px-3 md:px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              🔒 Privacy First
            </div>
            <div className="backdrop-blur-sm bg-white/10 px-3 md:px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              🚀 Unlimited History
            </div>
          </div>
        </div>

        {/* <a 
            href="#tip" 
            className="group relative backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-white/20 hover:border-white/50 flex items-center gap-3 hover:scale-105"
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-3.84 3.11-4.09V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 4.15-3.12 4.16z"/>
            </svg>
            Support Development
          </a> */}
      </div>
    </section>
  );
}
