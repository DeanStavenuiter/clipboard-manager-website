import Link from "next/link";

export default function BuyMeACoffee() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://buymeacoffee.com/deanstavenuiter"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Buy me a coffee"
      >
        {/* Pulse ring animation */}
        <div className="absolute inset-0 w-16 h-16 bg-[#5FB845] rounded-full animate-ping opacity-20"></div>

        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#5FB845] to-[#4a9c3a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          {/* Coffee cup icon */}
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M441.33-241.33q-116.33 0-198.83-80.5Q160-402.33 160-518v-255.33q0-27.67 19.5-47.17t47.17-19.5H746q55.33 0 94.67 38.33Q880-763.33 880-708q0 59.33-38.33 103.67Q803.33-560 746-560h-23.33v42q0 115.67-82.5 196.17-82.5 80.5-198.84 80.5ZM226.67-626.67H656v-146.66H226.67v146.66ZM441.33-308q88.34 0 151.5-60.83Q656-429.67 656-518v-42H226.67v42q0 88.33 63.16 149.17Q353-308 441.33-308Zm281.34-318.67H746q30.33 0 48.83-24.83t18.5-56.5q0-27.67-19.83-46.5T746-773.33h-23.33v146.66ZM160-120v-66.67h640V-120H160Zm281.33-440Z"/></svg>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Buy me a coffee ☕️
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </Link>
    </div>
  );
}
