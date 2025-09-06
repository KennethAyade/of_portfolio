import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function GalleryPage() {
  const navigate = useNavigate();

  const contentTiers = [
    { id: 1, title: 'Daily Moments', price: 'Free', emoji: '📱', description: 'Behind-the-scenes glimpses into my creative life', color: 'from-blue-400 to-purple-400' },
    { id: 2, title: 'Creative Sessions', price: '$9.99', emoji: '🎨', description: 'Artistic photoshoots and exclusive creative content', color: 'from-purple-400 to-pink-400' },
    { id: 3, title: 'Premium Collection', price: '$19.99', emoji: '💎', description: 'My most intimate and exclusive content just for you', color: 'from-pink-400 to-red-400' },
  ];

  const recentPosts = [
    { id: 1, type: 'photo', blur: true, likes: 245 },
    { id: 2, type: 'video', blur: true, likes: 892 },
    { id: 3, type: 'photo', blur: true, likes: 156 },
    { id: 4, type: 'photo', blur: true, likes: 734 },
    { id: 5, type: 'video', blur: true, likes: 445 },
    { id: 6, type: 'photo', blur: true, likes: 623 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 pt-20 lg:pt-12 lg:pl-32 px-4 md:px-8 pb-8 md:pb-12">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Content</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Discover different sides of me through exclusive content created just for my amazing community.
          </p>
        </motion.div>

        {/* Content Tiers */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center lg:text-left">Choose Your Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contentTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-br ${tier.color} text-white shadow-xl overflow-hidden group cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => navigate('/connect')}
              >
                <div className="relative z-10 text-center md:text-left">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{tier.emoji}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.title}</h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">{tier.description}</p>
                  <div className="text-2xl md:text-3xl font-black mb-4">{tier.price}</div>
                  <motion.button
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Access
                  </motion.button>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-16 h-16 border border-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `scale(${Math.random() * 0.5 + 0.5})`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts Preview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Creations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/connect')}
              >
                {/* Blurred preview */}
                <div className={`w-full h-full bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-purple-400 to-pink-400' : 
                  index % 3 === 1 ? 'from-blue-400 to-purple-400' : 
                  'from-pink-400 to-red-400'
                } flex items-center justify-center relative`}>
                  <span className="text-white text-3xl opacity-50">
                    {post.type === 'video' ? '🎥' : '📸'}
                  </span>
                  
                  {/* Blur overlay */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
                  
                  {/* Lock icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3">
                      <span className="text-white text-2xl">🔒</span>
                    </div>
                  </div>
                  
                  {/* Likes counter */}
                  <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-full">
                    <span className="text-white text-xs">❤️ {post.likes}</span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">Unlock to View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to See More?</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of others who get exclusive access to my most personal and creative content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/connect')}
            >
              Get Full Access Now
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white/80 text-gray-800 rounded-2xl font-semibold text-lg shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/')}
            >
              Learn More About Me
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
