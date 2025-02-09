import React, { useState, useEffect } from 'react';
import { levels } from './levels';
import CodeEditor from './CodeEditor';
import Celebration from './Celebration';

const Missions = () => {
    const [currentMission, setCurrentMission] = useState(0);
    const [properties, setProperties] = useState({});
    const [showHint, setShowHint] = useState(false);
    const [hasWon, setHasWon] = useState(false);
  
    const handlePropertyChange = (property, value) => {
      setProperties(prev => ({
        ...prev,
        [property]: value
      }));
    };
  
    useEffect(() => {
      const solution = levels[currentMission].solution;
      const requiredProperties = Object.keys(solution);
      const allPropertiesCorrect = requiredProperties.every(
        prop => properties[prop] === solution[prop]
      );
      
      if (allPropertiesCorrect) {
        setTimeout(() => {
          setHasWon(true);
        }, 300);
      } else {
        setHasWon(false);
      }
    }, [properties, currentMission]);
  
    const handleNext = () => {
      if (currentMission < levels.length - 1) {
        setCurrentMission(currentMission + 1);
        setProperties({});
        setShowHint(false);
        setHasWon(false);
      }
    };
  
    const handlePrevious = () => {
      if (currentMission > 0) {
        setCurrentMission(currentMission - 1);
        setProperties({});
        setShowHint(false);
        setHasWon(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#03001C] via-[#301E67] to-[#03001C] text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentMission === 0}
                  className="px-4 py-2 rounded-lg bg-[#5B8FB9]/80 hover:bg-[#5B8FB9] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <span className="text-[#B6EADA] font-bold">
                  Level {levels[currentMission].level}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentMission === levels.length - 1}
                  className="px-4 py-2 rounded-lg bg-[#5B8FB9]/80 hover:bg-[#5B8FB9] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
              <div className="bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-[#B6EADA]">
                  {levels[currentMission].title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {levels[currentMission].story}
                </p>
              </div>
              <div className="space-y-4">
                <CodeEditor
                  propertiesToTry={Object.keys(levels[currentMission].validOptions)}
                  validOptions={levels[currentMission].validOptions}
                  onPropertyChange={handlePropertyChange}
                  currentValues={properties}
                />
                <div className="bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-4">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-[#5B8FB9] hover:text-[#B6EADA] transition-colors"
                  >
                    {showHint ? '🔍 Hide Hint' : '💡 Show Hint'}
                  </button>
                  {showHint && (
                    <p className="mt-2 text-gray-300">
                      Try using: {Object.keys(levels[currentMission].solution).join(', ')}
                    </p>
                  )}
                </div>
                {hasWon && (
                  <div className="bg-green-500/20 text-green-300 p-4 rounded-xl backdrop-blur-lg animate-fade-in">
                    🎉 Success! The alien has boarded their UFO! 
                    {currentMission < levels.length - 1 && (
                      <span> Ready for the next mission?</span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#301E67]/50 backdrop-blur-lg rounded-xl p-6">
              <div className="bg-[#03001C] rounded-lg overflow-hidden h-[500px] relative p-3">
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    display: 'flex',
                    ...levels[currentMission].solution
                  }}
                >
                  {!hasWon && (
                    <img
                      src="/ufo.png"
                      alt="UFO"
                      className="w-16 h-16 object-contain"
                    />
                  )}
                </div>
                <div className="absolute inset-0"
                  style={{
                    display: 'flex',
                    ...properties
                  }}
                >
                  {hasWon ? (
                    <img
                      src="/alien-ufo.png"
                      alt="Alien in UFO"
                      className="w-16 h-16 object-contain animate-bounce"
                    />
                  ) : (
                    <img
                      src="/alien.png"
                      alt="Alien"
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  {hasWon && <Celebration />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Missions;