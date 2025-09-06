import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import GlitchText from '../components/ui/GlitchText';
import HolographicButton from '../components/ui/HolographicButton';

interface FallingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
}

interface Sticker {
  id: number;
  emoji: string;
  name: string;
  collected: boolean;
  rarity: 'common' | 'rare' | 'legendary';
}

export default function ExperiencePage() {
  const [currentMood, setCurrentMood] = useState('cosmic');
  const [score, setScore] = useState(0);
  const [fallingHearts, setFallingHearts] = useState<FallingHeart[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [fortuneMessage, setFortuneMessage] = useState('');
  const [showFortune, setShowFortune] = useState(false);
  const [collectedStickers, setCollectedStickers] = useState<Set<number>>(new Set());
  const [guestbookEntries, setGuestbookEntries] = useState<Array<{id: number, emoji: string, message: string}>>([]);

  const moods = [
    { id: 'cosmic', name: 'Cosmic', emoji: '✨', color: 'electric-coral', bgGradient: 'from-electric-coral/20 to-cosmic-purple/20' },
    { id: 'dreamy', name: 'Dreamy', emoji: '🌙', color: 'holographic-blue', bgGradient: 'from-holographic-blue/20 to-stardust-gold/20' },
    { id: 'energetic', name: 'Energetic', emoji: '⚡', color: 'stardust-gold', bgGradient: 'from-stardust-gold/20 to-electric-coral/20' },
    { id: 'mystical', name: 'Mystical', emoji: '🔮', color: 'cosmic-purple', bgGradient: 'from-cosmic-purple/20 to-holographic-blue/20' },
    { id: 'playful', name: 'Playful', emoji: '🦋', color: 'electric-coral', bgGradient: 'from-electric-coral/20 to-stardust-gold/20' },
  ];

  const fortuneMessages = [
    "Your creativity will unlock new dimensions today ✨",
    "A cosmic connection awaits you in the digital realm 🌟",
    "Trust in your artistic vision - it's your superpower 🎨",
    "The universe is conspiring to make your dreams reality 💫",
    "Today is perfect for breaking creative boundaries 🚀",
    "Your authentic self is your greatest masterpiece 👑",
    "Expect magical encounters in unexpected places 🔮",
    "Your energy today will inspire others to shine ✨",
  ];

  const availableStickers: Sticker[] = [
    { id: 1, emoji: '✨', name: 'Sparkle', collected: false, rarity: 'common' },
    { id: 2, emoji: '🌟', name: 'Star', collected: false, rarity: 'common' },
    { id: 3, emoji: '💫', name: 'Dizzy', collected: false, rarity: 'rare' },
    { id: 4, emoji: '🔮', name: 'Crystal Ball', collected: false, rarity: 'rare' },
    { id: 5, emoji: '🦋', name: 'Butterfly', collected: false, rarity: 'common' },
    { id: 6, emoji: '🌙', name: 'Crescent Moon', collected: false, rarity: 'rare' },
    { id: 7, emoji: '👑', name: 'Crown', collected: false, rarity: 'legendary' },
    { id: 8, emoji: '💎', name: 'Diamond', collected: false, rarity: 'legendary' },
  ];

  const currentMoodData = moods.find(m => m.id === currentMood) || moods[0];

  // Heart catching game logic
  useEffect(() => {
    let interval: number;
    
    if (gameActive) {
      interval = setInterval(() => {
        const newHeart: FallingHeart = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: -50,
          size: Math.random() * 20 + 20,
          speed: Math.random() * 3 + 2,
          color: ['electric-coral', 'holographic-blue', 'stardust-gold', 'cosmic-purple'][Math.floor(Math.random() * 4)],
        };
        
        setFallingHearts(prev => [...prev, newHeart]);
      }, 800);
    }

    return () => clearInterval(interval);
  }, [gameActive]);

  // Animate falling hearts
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setFallingHearts(prev => prev
        .map(heart => ({ ...heart, y: heart.y + heart.speed }))
        .filter(heart => heart.y < window.innerHeight + 100)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [fallingHearts]);

  const catchHeart = useCallback((heartId: number) => {
    setFallingHearts(prev => prev.filter(heart => heart.id !== heartId));
    setScore(prev => prev + 10);
    
    // Chance to collect a random sticker
    if (Math.random() > 0.7) {
      const availableIds = availableStickers
        .filter(s => !collectedStickers.has(s.id))
        .map(s => s.id);
      
      if (availableIds.length > 0) {
        const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
        setCollectedStickers(prev => new Set([...prev, randomId]));
      }
    }
  }, [collectedStickers]);

  const openFortuneCookie = () => {
    const randomMessage = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    setFortuneMessage(randomMessage);
    setShowFortune(true);
    
    setTimeout(() => {
      setShowFortune(false);
    }, 5000);
  };

  const addGuestbookEntry = () => {
    const emojis = ['💜', '✨', '🌟', '💫', '🦋', '🌙', '💎', '👑'];
    const messages = [
      'Love your cosmic vibes!',
      'Your art is incredible!',
      'Such a magical space ✨',
      'Absolutely stunning work!',
      'You inspire me so much!',
      'This website is amazing!',
    ];
    
    const newEntry = {
      id: Date.now(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
    };
    
    setGuestbookEntries(prev => [newEntry, ...prev.slice(0, 9)]);
  };

  return (
    <motion.div
      className={`min-h-screen pt-24 pb-16 transition-all duration-1000 bg-gradient-to-br ${currentMoodData.bgGradient}`}
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
            <GlitchText text="Interactive Playground" className="holographic-text" />
          </h1>
          <p className="text-soft-pearl/80 text-xl max-w-2xl mx-auto">
            Step into a world of digital magic and playful experiences ✨
          </p>
        </motion.div>

        {/* Mood Selector */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-electric-coral mb-6 text-center">
            Choose Your Vibe
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => (
              <motion.button
                key={mood.id}
                onClick={() => setCurrentMood(mood.id)}
                className={`px-6 py-4 rounded-2xl glass transition-all duration-300 ${
                  currentMood === mood.id
                    ? `bg-${mood.color}/20 border-2 border-${mood.color}`
                    : 'hover:bg-soft-pearl/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={currentMood === mood.id ? {
                  boxShadow: [`0 0 0px var(--color-${mood.color})`, `0 0 20px var(--color-${mood.color})`, `0 0 0px var(--color-${mood.color})`],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-soft-pearl font-medium">{mood.name}</div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Heart Catching Game */}
          <motion.section
            className="glass p-6 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-electric-coral mb-4 text-center">
              Catch the Falling Hearts
            </h3>
            
            <div className="text-center mb-4">
              <div className="text-lg text-soft-pearl">Score: {score}</div>
            </div>
            
            <div className="relative h-64 bg-dark-velvet/30 rounded-lg overflow-hidden">
              {fallingHearts.map((heart) => (
                <motion.div
                  key={heart.id}
                  className={`absolute cursor-pointer text-${heart.color}`}
                  style={{
                    left: heart.x,
                    top: heart.y,
                    fontSize: heart.size,
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => catchHeart(heart.id)}
                >
                  💜
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <HolographicButton
                onClick={() => setGameActive(!gameActive)}
                variant={gameActive ? 'secondary' : 'primary'}
                size="sm"
              >
                {gameActive ? 'Stop Game' : 'Start Game'}
              </HolographicButton>
            </div>
          </motion.section>

          {/* Fortune Cookie */}
          <motion.section
            className="glass p-6 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-electric-coral mb-6 text-center">
              Cosmic Fortune Cookie
            </h3>
            
            <div className="text-center">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={openFortuneCookie}
              >
                <div className="w-full h-full bg-gradient-to-r from-stardust-gold to-electric-coral rounded-full flex items-center justify-center text-6xl shadow-lg">
                  🥠
                </div>
              </motion.div>
              
              <HolographicButton onClick={openFortuneCookie} size="sm">
                Open Fortune Cookie
              </HolographicButton>
            </div>
            
            <AnimatePresence>
              {showFortune && (
                <motion.div
                  className="mt-6 p-4 glass rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="text-soft-pearl italic">{fortuneMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>

        {/* Sticker Collection */}
        <motion.section
          className="glass p-6 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-electric-coral mb-6 text-center">
            Virtual Sticker Collection ({collectedStickers.size}/{availableStickers.length})
          </h3>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {availableStickers.map((sticker) => (
              <motion.div
                key={sticker.id}
                className={`aspect-square rounded-lg p-4 text-center ${
                  collectedStickers.has(sticker.id)
                    ? 'glass border-2 border-electric-coral'
                    : 'bg-dark-velvet/30 border-2 border-dashed border-soft-pearl/20'
                }`}
                whileHover={{ scale: 1.05 }}
                animate={collectedStickers.has(sticker.id) ? {
                  boxShadow: ['0 0 0px var(--color-electric-coral)', '0 0 15px var(--color-electric-coral)', '0 0 0px var(--color-electric-coral)'],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className={`text-2xl mb-1 ${collectedStickers.has(sticker.id) ? '' : 'opacity-30'}`}>
                  {collectedStickers.has(sticker.id) ? sticker.emoji : '?'}
                </div>
                <div className={`text-xs ${collectedStickers.has(sticker.id) ? 'text-soft-pearl' : 'text-soft-pearl/50'}`}>
                  {collectedStickers.has(sticker.id) ? sticker.name : '???'}
                </div>
                {collectedStickers.has(sticker.id) && (
                  <div className={`text-xs mt-1 ${
                    sticker.rarity === 'legendary' ? 'text-stardust-gold' :
                    sticker.rarity === 'rare' ? 'text-electric-coral' : 'text-holographic-blue'
                  }`}>
                    {sticker.rarity}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-4 text-soft-pearl/60 text-sm">
            Play the heart catching game to collect stickers!
          </div>
        </motion.section>

        {/* Guest Book */}
        <motion.section
          className="glass p-6 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-electric-coral mb-6 text-center">
            Virtual Guest Book
          </h3>
          
          <div className="text-center mb-6">
            <HolographicButton onClick={addGuestbookEntry} size="sm">
              Sign the Guest Book ✨
            </HolographicButton>
          </div>
          
          <div className="space-y-4 max-h-64 overflow-y-auto">
            <AnimatePresence>
              {guestbookEntries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  className="flex items-center space-x-3 p-3 bg-dark-velvet/20 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl">{entry.emoji}</span>
                  <span className="text-soft-pearl flex-1">{entry.message}</span>
                  <span className="text-soft-pearl/50 text-sm">Just now</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {guestbookEntries.length === 0 && (
            <div className="text-center text-soft-pearl/50 py-8">
              Be the first to sign the guest book! ✨
            </div>
          )}
        </motion.section>
      </div>

      {/* Mood-based background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {currentMoodData.emoji}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
