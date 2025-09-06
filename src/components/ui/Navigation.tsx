import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: '🏠' },
    { name: 'CONTENT', path: '/gallery', icon: '✨' },  
    { name: 'CONNECT', path: '/connect', icon: '💕' },
  ];

  return (
    <>
      {/* Mobile/Tablet Horizontal Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-lg lg:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm">🌙</span>
              </div>
              <div className="text-gray-800 font-bold text-sm">ARIA</div>
            </motion.div>

            {/* Horizontal Navigation */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center space-x-1 w-12 sm:w-20 h-10 px-2 sm:px-3 py-2 rounded-xl transition-colors duration-200 group ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'text-gray-700 hover:bg-white/40 hover:text-purple-600'
                    }`}
                    style={{
                      boxShadow: location.pathname === item.path ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
                    }}
                  >
                    <span className="text-base flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-xs font-semibold hidden sm:block truncate">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Online indicator */}
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="text-xs text-gray-600 font-medium hidden sm:block">Online</div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Desktop Vertical Sidebar Navigation */}
      <motion.nav 
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30 shadow-2xl w-28">
          {/* Logo */}
          <motion.div
            className="text-center mb-6 pb-4 border-b border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
              <span className="text-white text-base">🌙</span>
            </div>
            <div className="text-gray-800 font-bold text-xs">ARIA</div>
          </motion.div>

          {/* Vertical Navigation */}
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`block w-full px-1 py-3 rounded-xl transition-all duration-300 group text-center ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/40 hover:text-purple-600'
                  }`}
                >
                  <div className="text-lg mb-1 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-xs font-semibold leading-tight whitespace-nowrap overflow-hidden">{item.name}</div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social indicator */}
          <div className="mt-6 pt-4 border-t border-white/20 text-center">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="text-xs text-gray-600 font-medium">Online</div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}