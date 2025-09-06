/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-purple': '#8B5CF6',
        'vibrant-pink': '#F472B6',
        'electric-blue': '#3B82F6',
        'sunny-yellow': '#FBBF24',
        'soft-white': '#FFFFFF',
        'light-gray': '#F3F4F6',
        'warm-gray': '#6B7280',
      },
      fontFamily: {
        'display': ['Orbitron', 'Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
      },
      animation: {
        'aurora': 'aurora 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'holographic': 'holographic 3s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': {
            'background-position': '0% 50%',
            transform: 'scale(1)',
          },
          '50%': {
            'background-position': '100% 50%',
            transform: 'scale(1.1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 20px #FF6B9D' },
          'to': { 'box-shadow': '0 0 30px #FF6B9D, 0 0 40px #FF6B9D' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        holographic: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backdropBlur: {
        'glass': '16px',
      },
      backgroundImage: {
        'holographic': 'linear-gradient(45deg, #FF6B9D, #00D9FF, #FFD700, #4A0E4E)',
        'aurora': 'linear-gradient(45deg, #4A0E4E, #FF6B9D, #00D9FF, #FFD700)',
        'cosmic': 'radial-gradient(ellipse at center, #4A0E4E 0%, #1A0B2E 100%)',
      },
    },
  },
  plugins: [],
}