import { motion } from 'framer-motion';
import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface HolographicButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function HolographicButton({
  children,
  variant = 'primary',
  size = 'md',
  glowIntensity = 'medium',
  className = '',
  ...props
}: HolographicButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const glowClasses = {
    low: 'shadow-[0_0_10px_var(--color-electric-coral)]',
    medium: 'shadow-[0_0_20px_var(--color-electric-coral)]',
    high: 'shadow-[0_0_30px_var(--color-electric-coral)]',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-electric-coral to-holographic-blue text-dark-velvet font-semibold';
      case 'secondary':
        return 'glass border border-electric-coral text-soft-pearl';
      case 'ghost':
        return 'border-2 border-transparent bg-transparent text-soft-pearl';
      default:
        return 'bg-gradient-to-r from-electric-coral to-holographic-blue text-dark-velvet font-semibold';
    }
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg transition-all duration-300
        ${sizeClasses[size]}
        ${getVariantStyles()}
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(255, 107, 157, 0.6)',
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{
        boxShadow: '0 0 0px rgba(255, 107, 157, 0)',
      }}
      {...(props as any)}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{
          translateX: ['100%', '100%', '-100%', '-100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut',
        }}
      />
      
      {/* Holographic border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-coral via-holographic-blue to-stardust-gold p-[1px]">
        <div className="h-full w-full rounded-lg bg-dark-velvet/80" />
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-lg opacity-0 ${glowClasses[glowIntensity]}`}
        whileHover={{
          opacity: 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Liquid metal ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-coral/20 to-holographic-blue/20 opacity-0"
        whileTap={{
          opacity: [0, 1, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}
