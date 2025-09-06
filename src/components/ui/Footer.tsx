import { FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-sm py-4 md:py-6 pb-12 md:pb-16 text-center text-gray-600 text-sm border-t border-white/20 lg:ml-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-3 md:space-y-4">
        {/* Copyright */}
        <div className="font-medium text-gray-800">
          © {new Date().getFullYear()} Aria Moonlight · Creative Digital Artist
        </div>
        
        {/* Social links with icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8">
          <a 
            href="https://instagram.com/ariamoonlight" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2 group"
          >
            <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
          <a 
            href="https://twitter.com/ariamoonlight" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2 group"
          >
            <FaXTwitter className="text-xl group-hover:scale-110 transition-transform" />
            <span>Twitter/X</span>
          </a>
          <a 
            href="https://onlyfans.com/ariamoonlight" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2 group"
          >
            <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:bg-purple-600 transition-colors">OF</div>
            <span>OnlyFans (18+)</span>
          </a>
        </div>

        {/* Additional info */}
        <div className="text-xs text-gray-500 pt-4 border-t border-white/10">
          <p>All content is original and created with love ✨</p>
          <p className="mt-1">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}