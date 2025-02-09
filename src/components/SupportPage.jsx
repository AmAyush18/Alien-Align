import React from "react";
import { Heart, Coffee, Sparkles, Rocket, Stars } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03001C] via-[#301E67] to-[#03001C] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-2 w-2 bg-white rounded-full top-10 left-1/4 animate-pulse" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-20 left-1/2 animate-pulse delay-75" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-40 right-1/4 animate-pulse delay-150" />
        <div className="absolute h-3 w-3 bg-white rounded-full bottom-20 left-1/3 animate-pulse delay-300" />
        <div className="absolute h-2 w-2 bg-white rounded-full bottom-40 right-1/3 animate-pulse delay-500" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Rocket className="h-16 w-16 text-[#5B8FB9] animate-bounce" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#5B8FB9] via-[#B6EADA] to-[#5B8FB9] text-transparent bg-clip-text">
            Fuel Our Cosmic Mission
          </h1>
          <p className="text-xl text-[#B6EADA] leading-relaxed">
            Help keep Alien Align's intergalactic learning adventure soaring! Your support
            powers our mission to teach flexbox through cosmic adventures, helping more
            aliens find their way home using the power of CSS flexbox. 🌌
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* QR Code Card */}
          <div className="bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-8 border border-[#5B8FB9]/30 hover:border-[#5B8FB9]/60 transition-all">
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/bmc_qr.png"
                alt="Buy Me A Coffee QR Code"
                className="w-48 h-48 rounded-lg shadow-lg border-2 border-[#5B8FB9]/50 hover:border-[#5B8FB9] transition-all"
              />
              <p className="text-[#B6EADA] text-lg font-medium flex items-center gap-2">
                <Coffee className="text-[#5B8FB9]" /> Scan to Support
              </p>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-8 border border-[#5B8FB9]/30 hover:border-[#5B8FB9]/60 transition-all">
            <h3 className="text-2xl font-bold text-[#B6EADA] mb-6 flex items-center gap-2">
              <Sparkles /> Your Support Powers:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <img
                  src="/alien.png"
                  alt="Alien"
                  className="h-6 w-6 object-contain flex-shrink-0 mt-1"
                />
                <span className="text-[#B6EADA]">New alien characters and challenging missions</span>
              </li>
              <li className="flex items-start gap-3">
                <Stars className="h-6 w-6 text-[#5B8FB9] flex-shrink-0 mt-1" />
                <span className="text-[#B6EADA]">Enhanced cosmic animations and effects</span>
              </li>
              <li className="flex items-start gap-3">
                <Rocket className="h-6 w-6 text-[#5B8FB9] flex-shrink-0 mt-1" />
                <span className="text-[#B6EADA]">Advanced flexbox learning challenges</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-[#B6EADA] text-lg mb-8">
            Every contribution helps more aliens master flexbox and find their way home! 🛸
          </p>
          <a
            href="https://www.buymeacoffee.com/amayush18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-2 py-2 bg-[#5B8FB9] hover:bg-[#B6EADA] text-white hover:text-[#301E67] text-lg font-bold rounded-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-[#5B8FB9]/20"
          >
            <img
              src="/bmc_button.png"
              alt="Buy Me A Coffee Button"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;