import { motion } from 'framer-motion';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function ConnectPage() {

  const platforms = [
    {
      name: 'OnlyFans',
      subtitle: 'Exclusive Content (18+)',
      icon: <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">OF</div>,
      color: 'from-pink-500 to-red-500',
      url: 'https://onlyfans.com/ariamoonlight',
      description: 'My most intimate and exclusive content',
      subscribers: '12K+'
    },
    {
      name: 'Instagram',
      subtitle: 'Daily Life & Behind the Scenes',
      icon: <FaInstagram className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
      url: 'https://instagram.com/ariamoonlight',
      description: 'Follow my daily adventures and creative process',
      subscribers: '85K+'
    },
    {
      name: 'Twitter/X',
      subtitle: 'Thoughts & Quick Updates',
      icon: <FaXTwitter className="text-3xl" />,
      color: 'from-blue-500 to-purple-500',
      url: 'https://twitter.com/ariamoonlight',
      description: 'Real-time thoughts and spontaneous moments',
      subscribers: '42K+'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 pt-20 lg:pt-12 lg:pl-32 px-4 md:px-8 pb-8 md:pb-12">
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose how you'd like to stay connected with me. Each platform offers a different side of my world.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-r ${platform.color} text-white shadow-2xl overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => window.open(platform.url, '_blank')}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center md:space-x-6">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-0">{platform.icon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{platform.name}</h3>
                    <p className="text-white/90 mb-2 text-sm md:text-base">{platform.subtitle}</p>
                    <p className="text-white/70 text-sm max-w-md">{platform.description}</p>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-xl md:text-2xl font-bold mb-2 md:mb-2">{platform.subscribers}</div>
                  <motion.button
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 mx-auto md:mx-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visit</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <div className="w-full h-full rounded-full border-4 border-white transform translate-x-1/3 -translate-y-1/3"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">Send Me a Message</h3>
          <p className="text-gray-600 text-center mb-8">
            Got something special to say? I love hearing from my community!
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:border-purple-400 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:border-purple-400 outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-purple-200 focus:border-purple-400 outline-none transition-colors resize-none"
            />
            <motion.button
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message ✨
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}