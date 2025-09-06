import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

export default function GlitchText({ 
  text, 
  className = '', 
  intensity = 'medium',
  animate = true 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, [animate]);

  const glitchIntensity = {
    low: { x: [-1, 1, -1], y: [0, 1, 0] },
    medium: { x: [-2, 2, -2], y: [-1, 1, -1] },
    high: { x: [-4, 4, -4], y: [-2, 2, -2] }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: glitchIntensity[intensity].x,
          y: glitchIntensity[intensity].y,
        } : {}}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 3 : 0,
        }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layer 1 */}
      <motion.span
        className="absolute top-0 left-0 text-electric-coral opacity-80"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
        animate={isGlitching ? {
          x: [-1, 1, 0],
          opacity: [0.8, 0.3, 0.8],
        } : {}}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 2 : 0,
        }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layer 2 */}
      <motion.span
        className="absolute top-0 left-0 text-holographic-blue opacity-80"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
        animate={isGlitching ? {
          x: [1, -1, 0],
          opacity: [0.8, 0.3, 0.8],
        } : {}}
        transition={{
          duration: 0.1,
          repeat: isGlitching ? 2 : 0,
        }}
      >
        {text}
      </motion.span>
      
      {/* Scanlines overlay */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              var(--color-soft-pearl) 2px,
              var(--color-soft-pearl) 4px
            )`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 0.15 }}
        />
      )}
    </div>
  );
}
