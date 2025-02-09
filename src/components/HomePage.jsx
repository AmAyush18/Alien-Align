import React from 'react';
import { Star, X } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">      
      {/* Hero Section */}
      <div className="relative pt-20">
        {/* Animated stars background */}
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
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                Master Flexbox with Alien Adventures
              </h1>
              <p className="text-xl text-gray-300">
                Join our intergalactic mission to learn CSS flexbox while helping aliens reach their spaceships. An out-of-this-world learning experience!
              </p>
              <div className="flex space-x-4">
                <Link to="/play" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105">
                  Start Mission
                </Link>
                <Link to="/about" className="px-8 py-3 rounded-full border border-purple-400 text-purple-400 text-lg font-medium hover:bg-purple-400/10 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex justify-center">
                <img src="/lets-go-ufo.png" alt="Alien Let's Go" className="w-96 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all">
            <img src="/alien.png" alt="Learn" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
            <p className="text-gray-400">Master flexbox concepts through hands-on alien rescue missions.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all">
            <img src="/ufo.png" alt="Progress" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-gray-400">Watch your skills grow as you help more aliens reach their ships.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all">
            <img src="/alien-ufo.png" alt="Achievement" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Earn Achievements</h3>
            <p className="text-gray-400">Collect badges and rewards as you complete missions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;