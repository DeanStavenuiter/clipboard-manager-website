"use client";

export default function TipSection() {
  const tipOptions = [
    {
      emoji: "☕",
      amount: "$5",
      description: "Buy me a coffee",
      highlighted: false
    },
    {
      emoji: "🍕",
      amount: "$15",
      description: "Buy me lunch",
      highlighted: true
    },
    {
      emoji: "🎉",
      amount: "$25",
      description: "Support development",
      highlighted: false
    }
  ];

  const handleTip = (amount: string) => {
    // Replace with your actual tip/donation service
    // For example, you could integrate with:
    // - Buy Me a Coffee
    // - PayPal
    // - Stripe
    // - Ko-fi
    alert(`Thank you for considering a ${amount} tip! Integration with payment service would go here.`);
  };

  return (
    <section id="tip" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#023531] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#5FB845] rounded-full blur-2xl"></div>
      </div>

              <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#023531] to-[#5FB845] bg-clip-text text-transparent">
              Support Development
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              TREX is free to use and always will be. If you find it helpful, consider supporting its development with a tip. Every contribution helps keep the app free and constantly improving.
            </p>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm font-medium">No Subscription</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-sm font-medium">One-Time Tip</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {tipOptions.map((option, index) => (
            <button 
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 overflow-hidden ${
                option.highlighted 
                  ? 'bg-gradient-to-br from-[#023531] to-[#5FB845] text-white border-[#023531] shadow-2xl' 
                  : 'bg-white border-gray-200 text-[#023531] hover:border-[#023531] shadow-lg hover:shadow-2xl'
              }`}
              onClick={() => handleTip(option.amount)}
            >
                              {/* Background gradient effect for non-highlighted items */}
                {!option.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5FB845]/5 to-[#023531]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                
                {/* Glow effect for highlighted item */}
                {option.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5FB845] to-[#023531] rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              
              <div className="relative z-10">
                <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                  option.highlighted ? 'drop-shadow-lg' : ''
                }`}>
                  {option.emoji}
                </div>
                                  <div className={`text-3xl font-black mb-2 ${
                    option.highlighted ? 'text-white' : 'text-[#023531] group-hover:text-[#023531]'
                  }`}>
                    {option.amount}
                  </div>
                  <div className={`text-lg font-medium ${
                    option.highlighted ? 'text-[#5FB845]/90' : 'text-gray-600 group-hover:text-[#023531]'
                  }`}>
                    {option.description}
                  </div>
                
                {option.highlighted && (
                  <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    Most Popular
                  </div>
                )}
              </div>
              
              {/* Hover ring effect */}
              <div className={`absolute inset-0 rounded-3xl ring-2 transition-all duration-300 ${
                option.highlighted 
                  ? 'ring-white/30 group-hover:ring-white/50' 
                  : 'ring-transparent group-hover:ring-[#023531]/30'
              }`}></div>
            </button>
          ))}
        </div>
        
        {/* Bottom section with additional info */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 text-[#023531]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-lg font-semibold text-[#023531]">Your Support Makes a Difference</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              All tips go directly to development costs, server maintenance, and keeping TREX free for everyone. Thank you for supporting indie software development!
            </p>
          </div>
      </div>
    </section>
  );
}
