// Site configuration
export const SITE_CONFIG = {
  name: 'LUNA',
  tagline: 'Digital Dreamweaver',
  description: 'Welcome to my digital universe where creativity meets technology. A space where every pixel tells a story.',
  url: 'https://luna-portfolio.vercel.app',
  email: 'hello@luna-digital.com',
  social: {
    instagram: 'https://instagram.com/luna_digital',
    twitter: 'https://twitter.com/luna_digital',
    tiktok: 'https://tiktok.com/@luna_digital',
    discord: 'https://discord.gg/luna',
  },
} as const;

// Theme colors
export const COLORS = {
  'cosmic-purple': '#4A0E4E',
  'electric-coral': '#FF6B9D',
  'holographic-blue': '#00D9FF',
  'stardust-gold': '#FFD700',
  'dark-velvet': '#1A0B2E',
  'soft-pearl': '#F8F8FF',
  'midnight': '#2C003E',
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.8,
  page: 0.4,
} as const;

// Breakpoints (matches Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'About', path: '/about', icon: '✨' },
  { name: 'Gallery', path: '/gallery', icon: '🎨' },
  { name: 'Experience', path: '/experience', icon: '🎮' },
  { name: 'Connect', path: '/connect', icon: '🌟' },
] as const;

// Social platforms
export const SOCIAL_PLATFORMS = [
  {
    name: 'Instagram',
    icon: '📸',
    color: 'electric-coral',
    url: '#',
    followers: '125K',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    color: 'holographic-blue',
    url: '#',
    followers: '89K',
  },
  {
    name: 'TikTok',
    icon: '🎵',
    color: 'stardust-gold',
    url: '#',
    followers: '340K',
  },
  {
    name: 'OnlyFans',
    icon: '💋',
    color: 'cosmic-purple',
    url: '#',
    followers: '45K',
  },
] as const;

// Content categories
export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All', icon: '🌟' },
  { id: 'photography', name: 'Photography', icon: '📸' },
  { id: 'digital-art', name: 'Digital Art', icon: '🎨' },
  { id: 'portraits', name: 'Portraits', icon: '👑' },
  { id: 'abstract', name: 'Abstract', icon: '✨' },
  { id: 'fashion', name: 'Fashion', icon: '💫' },
] as const;

// Mood themes
export const MOOD_THEMES = [
  { id: 'cosmic', name: 'Cosmic', emoji: '✨', color: 'electric-coral' },
  { id: 'dreamy', name: 'Dreamy', emoji: '🌙', color: 'holographic-blue' },
  { id: 'energetic', name: 'Energetic', emoji: '⚡', color: 'stardust-gold' },
  { id: 'mystical', name: 'Mystical', emoji: '🔮', color: 'cosmic-purple' },
  { id: 'playful', name: 'Playful', emoji: '🦋', color: 'electric-coral' },
] as const;

// Fortune messages
export const FORTUNE_MESSAGES = [
  "Your creativity will unlock new dimensions today ✨",
  "A cosmic connection awaits you in the digital realm 🌟",
  "Trust in your artistic vision - it's your superpower 🎨",
  "The universe is conspiring to make your dreams reality 💫",
  "Today is perfect for breaking creative boundaries 🚀",
  "Your authentic self is your greatest masterpiece 👑",
  "Expect magical encounters in unexpected places 🔮",
  "Your energy today will inspire others to shine ✨",
] as const;

// Fun facts
export const FUN_FACTS = [
  'I can speak 3 languages fluently 🌍',
  'Coffee is my creative fuel ☕',
  'I collect vintage polaroid cameras 📸',
  'My pet cat is named Pixel 🐱',
  'I can solve a Rubiks cube in under 2 minutes 🧩',
  'I paint with both hands ambidextrously 🎨',
] as const;

// Stickers for collection
export const COLLECTIBLE_STICKERS = [
  { id: 1, emoji: '✨', name: 'Sparkle', rarity: 'common' as const },
  { id: 2, emoji: '🌟', name: 'Star', rarity: 'common' as const },
  { id: 3, emoji: '💫', name: 'Dizzy', rarity: 'rare' as const },
  { id: 4, emoji: '🔮', name: 'Crystal Ball', rarity: 'rare' as const },
  { id: 5, emoji: '🦋', name: 'Butterfly', rarity: 'common' as const },
  { id: 6, emoji: '🌙', name: 'Crescent Moon', rarity: 'rare' as const },
  { id: 7, emoji: '👑', name: 'Crown', rarity: 'legendary' as const },
  { id: 8, emoji: '💎', name: 'Diamond', rarity: 'legendary' as const },
] as const;

// Loading messages
export const LOADING_MESSAGES = [
  'Initializing cosmic protocols...',
  'Syncing with the digital universe...',
  'Loading holographic interface...',
  'Charging aurora systems...',
  'Almost ready to enter dreamscape...',
] as const;

// Error messages
export const ERROR_MESSAGES = {
  general: 'Oops! Something went wrong in the digital realm ✨',
  network: 'Connection lost to the cosmic network 🌌',
  notFound: 'This page got lost in the digital void 🕳️',
  loading: 'Having trouble loading the magic... ⚡',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  subscribe: 'Welcome to the cosmic community! ✨',
  contact: 'Message sent successfully! I\'ll get back to you soon 💌',
  like: 'Thanks for the cosmic love! 💜',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'luna-theme',
  mood: 'luna-mood',
  visited: 'luna-visited',
  stickers: 'luna-stickers',
  score: 'luna-score',
  settings: 'luna-settings',
} as const;

// API endpoints (when backend is implemented)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  subscribe: '/api/subscribe',
  analytics: '/api/analytics',
  feedback: '/api/feedback',
} as const;
