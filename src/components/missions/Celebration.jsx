import React from 'react'
import { PartyPopper } from 'lucide-react';

const Celebration = () => {
    return (
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative">
          {/* Top Left */}
          <PartyPopper 
            className="absolute -top-20 -left-20 text-yellow-400 animate-celebration-1" 
            size={32} 
          />
          {/* Top Right */}
          <PartyPopper 
            className="absolute -top-20 -right-20 text-green-400 animate-celebration-2" 
            size={32} 
          />
          {/* Bottom Left */}
          <PartyPopper 
            className="absolute -bottom-20 -left-20 text-pink-400 animate-celebration-3" 
            size={32} 
          />
          {/* Bottom Right */}
          <PartyPopper 
            className="absolute -bottom-20 -right-20 text-purple-400 animate-celebration-4" 
            size={32} 
          />
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center scale-up">
            <h2 className="text-3xl font-bold text-white mb-4 animate-success-text">
              🎉 Level Complete! 🎉
            </h2>
            <p className="text-gray-200 animate-success-text-delay">
              You've successfully helped the alien reach their UFO!
            </p>
          </div>
        </div>
        <style jsx global>{`
        @keyframes celebration-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { transform: translate(-20px, -20px) rotate(-45deg); opacity: 0.7; }
        }
        
        @keyframes celebration-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { transform: translate(20px, -20px) rotate(45deg); opacity: 0.7; }
        }
        
        @keyframes celebration-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { transform: translate(-20px, 20px) rotate(-45deg); opacity: 0.7; }
        }
        
        @keyframes celebration-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          50% { transform: translate(20px, 20px) rotate(45deg); opacity: 0.7; }
        }
        
        .animate-celebration-1 { animation: celebration-1 2s ease-in-out infinite; }
        .animate-celebration-2 { animation: celebration-2 2s ease-in-out infinite 0.5s; }
        .animate-celebration-3 { animation: celebration-3 2s ease-in-out infinite 1s; }
        .animate-celebration-4 { animation: celebration-4 2s ease-in-out infinite 1.5s; }
        
        .scale-up {
          animation: scaleUp 0.5s ease-out forwards;
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-success-text {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animate-success-text-delay {
          animation: slideUp 0.5s ease-out forwards 0.2s;
          opacity: 0;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      </div>
    );
  };

export default Celebration