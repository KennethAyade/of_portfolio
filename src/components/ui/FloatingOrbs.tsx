import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    color: ['electric-coral', 'holographic-blue', 'stardust-gold', 'cosmic-purple'][Math.floor(Math.random() * 4)],
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-sm opacity-20`}
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, var(--color-${orb.color}), transparent 70%)`,
            left: orb.initialX,
            top: orb.initialY,
          }}
          animate={{
            x: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              0,
            ],
            y: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              0,
            ],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.2, 0.4, 0.1, 0.2],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Interactive Orbs that follow mouse */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`interactive-${i}`}
          className="absolute w-6 h-6 rounded-full opacity-30 pointer-events-auto cursor-pointer"
          style={{
            background: `radial-gradient(circle, var(--color-electric-coral), transparent 70%)`,
            left: '50%',
            top: '50%',
          }}
          whileHover={{
            scale: 2,
            opacity: 0.6,
          }}
          animate={{
            x: [0, 100 * (i + 1), -100 * (i + 1), 0],
            y: [0, -50 * (i + 1), 50 * (i + 1), 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          onClick={() => {
            // Create a burst effect
            const burst = document.createElement('div');
            burst.className = 'fixed w-20 h-20 rounded-full bg-gradient-to-r from-electric-coral to-holographic-blue pointer-events-none z-50';
            burst.style.left = '50%';
            burst.style.top = '50%';
            burst.style.transform = 'translate(-50%, -50%) scale(0)';
            burst.style.animation = 'burst 0.6s ease-out forwards';
            document.body.appendChild(burst);
            
            setTimeout(() => {
              document.body.removeChild(burst);
            }, 600);
          }}
        />
      ))}
    </div>
  );
}
