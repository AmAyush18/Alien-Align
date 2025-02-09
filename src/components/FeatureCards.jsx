import React from 'react';

const features = [
  {
    id: 1,
    title: "Interactive Learning",
    description: "Master flexbox concepts through fun and engaging alien rescue missions in space.",
    imageSrc: "/alien.png"
  },
  {
    id: 2,
    title: "Story-Driven Challenges",
    description: "Learn CSS flexbox properties while helping adorable aliens navigate through cosmic puzzles.",
    imageSrc: "/ufo.png"
  },
  {
    id: 3,
    title: "Progressive Difficulty",
    description: "Start with simple missions and advance to more challenging cosmic adventures as you learn.",
    imageSrc: "/alien-ufo.png"
  }
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-12 h-12 mb-4 group-hover:animate-pulse"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-400 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;