import { type Variants, type Transition } from 'framer-motion';

// Common animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -30,
  },
};

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 30,
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -30,
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 180,
  },
};

export const flipIn: Variants = {
  initial: {
    opacity: 0,
    rotateY: -90,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
  },
  exit: {
    opacity: 0,
    rotateY: 90,
  },
};

export const slideInFromBottom: Variants = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: '100%',
  },
};

export const slideInFromTop: Variants = {
  initial: {
    opacity: 0,
    y: '-100%',
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: '-100%',
  },
};

// Staggered container variants
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerFastContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

// Common transitions
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const easeTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};

export const slowTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.8,
};

export const fastTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.15,
};

// Hover animations
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: springTransition,
  },
};

export const hoverRotate: Variants = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 5,
    transition: springTransition,
  },
};

export const hoverGlow: Variants = {
  rest: { 
    boxShadow: '0 0 0px rgba(255, 107, 157, 0)',
  },
  hover: { 
    boxShadow: '0 0 20px rgba(255, 107, 157, 0.5)',
    transition: easeTransition,
  },
};

// Floating animations
export const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: 'linear',
  },
};

// Magnetic cursor effect
export const magneticHover = () => ({
  transition: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  },
  whileHover: {
    scale: 1.1,
  },
});

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Utility functions
export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return baseDelay * index;
};

export const createRandomFloat = (min: number = 0, max: number = 20) => {
  return Math.random() * (max - min) + min;
};

export const createRandomRotate = (min: number = -5, max: number = 5) => {
  return Math.random() * (max - min) + min;
};
