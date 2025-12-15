import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative group block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium text-lg transition-all duration-300 rounded-lg overflow-hidden"
      >
        {/* Animated background */}
        <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-lg"></span>
        
        {/* Text content */}
        <span className="relative z-10">{title}</span>
        
        {/* Bottom border animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </motion.div>
  );
};

export default NavLink;
