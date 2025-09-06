import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let particleId = 0;
    
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Create sparkle particles occasionally
      if (Math.random() > 0.95) {
        const newParticle = {
          id: particleId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
        };
        
        setParticles(prev => [...prev, newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1000);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check if element is hoverable
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.matches('a, button, [data-magnetic], .magnetic, input, textarea, select');
      setIsHovering(isHoverable);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 2 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-electric-coral rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 0.3,
            },
          }}
        />
        
        {/* Inner Dot */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-holographic-blue rounded-full"
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Holographic Trail */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-electric-coral), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Sparkle Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-40 w-1 h-1 bg-stardust-gold rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            y: particle.y - 20,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Click Ripple Effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        onClick={() => {
          // This won't actually trigger since it's pointer-events-none,
          // but we can use this pattern for click effects in the future
        }}
      >
        {/* Ripple rings that appear on click */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-electric-coral/30 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.5],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </>
  );
}
