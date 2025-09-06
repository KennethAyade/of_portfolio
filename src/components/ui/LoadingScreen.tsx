import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Modern logo */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-3xl text-white">🌙</span>
        </motion.div>
        
        {/* Modern text */}
        <motion.h1
          className="text-3xl font-black text-gray-800 mb-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Aria <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Moonlight</span>
        </motion.h1>
        
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading your experience...
        </motion.p>
      </div>
    </motion.div>
  );
}