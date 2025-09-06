import { motion } from 'framer-motion';
import { useState } from 'react';
import GlitchText from '../components/ui/GlitchText';
import HolographicButton from '../components/ui/HolographicButton';

export default function AboutPage() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const personalityPlanets = [
    {
      name: 'Creativity',
      color: 'electric-coral',
      description: 'Where imagination runs wild and artistic visions come to life',
      traits: ['Digital Art', 'Photography', 'Creative Writing', 'Fashion Design'],
    },
    {
      name: 'Adventure',
      color: 'holographic-blue',
      description: 'Always seeking new experiences and pushing boundaries',
      traits: ['Travel', 'Extreme Sports', 'New Cultures', 'Exploration'],
    },
    {
      name: 'Technology',
      color: 'stardust-gold',
      description: 'Passionate about the intersection of art and technology',
      traits: ['AI Art', 'VR/AR', 'Digital Innovation', 'Future Tech'],
    },
    {
      name: 'Empathy',
      color: 'cosmic-purple',
      description: 'Deep connection with others and understanding of emotions',
      traits: ['Active Listening', 'Emotional Support', 'Community', 'Kindness'],
    },
  ];

  const funFacts = [
    'I can speak 3 languages fluently 🌍',
    'Coffee is my creative fuel ☕',
    'I collect vintage polaroid cameras 📸',
    'My pet cat is named Pixel 🐱',
    'I can solve a Rubiks cube in under 2 minutes 🧩',
    'I paint with both hands ambidextrously 🎨',
  ];

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-black mb-4">
            <GlitchText text="Personal Universe" className="holographic-text" />
          </h1>
          <p className="text-soft-pearl/80 text-xl max-w-2xl mx-auto">
            Welcome to the constellation of my existence ✨
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-display text-3xl font-bold text-electric-coral mb-8 text-center">
            My Journey Through Time
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-coral to-holographic-blue"></div>
            
            {[
              { year: '2020', event: 'Started Digital Art Journey', icon: '🎨' },
              { year: '2021', event: 'First Viral Content Creation', icon: '🚀' },
              { year: '2022', event: 'Launched Personal Brand', icon: '✨' },
              { year: '2023', event: 'Expanded to Multiple Platforms', icon: '🌟' },
              { year: '2024', event: 'Built This Cosmic Website', icon: '🌌' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-1/2">
                  <div className={`glass p-6 rounded-lg ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-stardust-gold">{item.year}</span>
                    </div>
                    <p className="text-soft-pearl">{item.event}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <motion.div
                  className="w-4 h-4 bg-electric-coral rounded-full border-4 border-dark-velvet z-10"
                  whileHover={{ scale: 1.5 }}
                />
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personality Planet System */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-electric-coral mb-8 text-center">
            Explore My Personality Planets
          </h2>
          
          <div className="relative w-full h-96 mx-auto mb-8">
            {personalityPlanets.map((planet, index) => {
              const angle = (index / personalityPlanets.length) * 2 * Math.PI;
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={planet.name}
                  className="absolute cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedPlanet(selectedPlanet === planet.name ? null : planet.name)}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  <div className={`w-16 h-16 rounded-full bg-${planet.color} opacity-80 flex items-center justify-center text-dark-velvet font-bold text-sm shadow-lg`}>
                    {planet.name}
                  </div>
                  
                  {selectedPlanet === planet.name && (
                    <motion.div
                      className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 glass p-4 rounded-lg z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-bold text-electric-coral mb-2">{planet.name}</h3>
                      <p className="text-soft-pearl/80 text-sm mb-3">{planet.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {planet.traits.map((trait) => (
                          <span
                            key={trait}
                            className="px-2 py-1 bg-cosmic-purple/30 rounded-full text-xs"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
            
            {/* Central avatar */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-electric-coral to-holographic-blue flex items-center justify-center text-2xl">
                ✨
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Photo Collage */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-display text-3xl font-bold text-electric-coral mb-8 text-center">
            Polaroid Memories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ 
                  rotate: Math.random() * 10 - 5,
                  scale: 1.05,
                  zIndex: 10,
                }}
                initial={{ 
                  rotate: Math.random() * 20 - 10,
                  opacity: 0,
                }}
                animate={{ 
                  opacity: 1,
                }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-soft-pearl p-3 rounded-lg shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-electric-coral/20 to-holographic-blue/20 rounded mb-2 flex items-center justify-center text-4xl">
                    📸
                  </div>
                  <p className="text-dark-velvet text-center text-sm font-handwriting">
                    Memory #{index + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Now Playing Widget */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="max-w-md mx-auto glass p-6 rounded-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-coral to-holographic-blue rounded-lg flex items-center justify-center text-2xl">
                🎵
              </div>
              <div>
                <h3 className="font-bold text-electric-coral">Now Playing</h3>
                <p className="text-soft-pearl">Cosmic Vibes Playlist</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Synthwave Dreams</span>
                <span className="text-soft-pearl/60">3:24</span>
              </div>
              <div className="w-full h-1 bg-cosmic-purple/30 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-electric-coral to-holographic-blue rounded-full"
                  animate={{ width: ['20%', '60%', '20%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Fun Facts Flip Cards */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="font-display text-3xl font-bold text-electric-coral mb-8 text-center">
            Fun Facts About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="relative w-full h-32 cursor-pointer perspective-1000"
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-full h-full relative preserve-3d transition-transform duration-500"
                  animate={{
                    rotateY: flippedCards.has(index) ? 180 : 0,
                  }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden glass rounded-lg flex items-center justify-center p-4">
                    <span className="text-4xl">🎲</span>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-r from-electric-coral/20 to-holographic-blue/20 rounded-lg flex items-center justify-center p-4 rotate-y-180">
                    <p className="text-center text-soft-pearl text-sm">{fact}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="font-display text-3xl font-bold mb-6">
            <GlitchText text="Ready to Connect?" className="holographic-text" />
          </h2>
          <p className="text-soft-pearl/80 mb-8 max-w-2xl mx-auto">
            Thanks for exploring my universe! Let's create something amazing together.
          </p>
          <HolographicButton size="lg" className="mx-auto">
            Let's Chat ✨
          </HolographicButton>
        </motion.section>
      </div>
    </motion.div>
  );
}
