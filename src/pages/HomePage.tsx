import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

export default function HomePage() {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
    </motion.div>
  );
}
