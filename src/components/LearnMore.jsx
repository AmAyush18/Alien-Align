import React from "react";
import { Star, Stars, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const StorySection = ({ children, isReverse = false }) => (
    <div
      className={`flex flex-col ${
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center py-16`}
    >
      {children}
    </div>
  );  

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <Star
                key={i}
                size={Math.random() * 4 + 1}
                className="absolute text-white animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>

          <div id="learn-more" className="relative max-w-7xl mx-auto px-4">
            {/* Introduction */}
            <div className="text-center py-16 space-y-6">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                The Cosmic Flex Crisis
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                In a galaxy not so far away, a peculiar situation has emerged.
                Aliens from the CSS-137 star system need our help, and it all
                comes down to mastering the art of flexbox.
              </p>
            </div>

            {/* Story Sections */}
            <div className="space-y-5">
              <StorySection>
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Stars className="animate-pulse" />
                    <h2 className="text-2xl font-bold">
                      The Great Misalignment
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    It all began when the CSS-137 system experienced a
                    mysterious phenomenon known as "The Great Misalignment."
                    Their advanced spacecraft landing systems, powered by
                    ancient CSS technology, suddenly lost their alignment
                    capabilities. As a result, thousands of aliens found
                    themselves unable to dock with their spaceships and return
                    home.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src="/about-1.png"
                    alt="Stranded Alien"
                    className="w-48 h-48 animate-float"
                  />
                </div>
              </StorySection>

              <StorySection isReverse>
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2 text-pink-400">
                    <Rocket className="animate-bounce" />
                    <h2 className="text-2xl font-bold">The Flexbox Solution</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Our team of Earth's top developers discovered that the alien
                    technology was based on an advanced version of CSS flexbox.
                    To help these stranded beings return home, we need to train
                    a new generation of flexbox masters. Each successful
                    alignment helps an alien reunite with their spacecraft and
                    journey back to CSS-137.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src="/about-2.png"
                    alt="Spaceship"
                    className="w-48 h-48"
                  />
                </div>
              </StorySection>

              <StorySection>
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Sparkles className="animate-spin-slow" />
                    <h2 className="text-2xl font-bold">Your Mission</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This is where you come in! By mastering flexbox properties
                    like justify-content, align-items, and flex-direction,
                    you'll help aliens navigate back to their ships. With each
                    completed level, you're not just learning CSS – you're
                    helping intergalactic travelers return home while becoming a
                    CSS flexbox master yourself.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src="/about-3.png"
                    alt="Mission Ready"
                    className="w-48 h-48 animate-float"
                  />
                </div>
              </StorySection>
            </div>

            {/* Call to Action */}
            <div className="text-center py-20 space-y-8">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl font-bold text-white">
                  Ready to Begin Your Mission?
                </h2>
                <p className="text-gray-300">
                  Join our cosmic academy and help restore balance to the
                  CSS-137 system while becoming a flexbox master.
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/missions"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105"
                >
                  Rescue Aliens
                </Link>
                <Link
                  to="/support"
                  className="px-8 py-3 rounded-full border border-purple-400 text-purple-400 text-lg font-medium hover:bg-purple-400/10 transition-all"
                >
                  Support the Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LearnMore;
