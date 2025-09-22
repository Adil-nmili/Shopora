import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center bg-[url(/logo.png)] bg-no-repeat bg-cover bg-center justify-center ">
      <div className="text-center px-4  w-full min-h-screen flex items-center flex-col justify-center bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-400 mt-4">Page Not Found</h2>
          <p className="text-gray-100 mt-2 mb-8">Oops! The page you're looking for doesn't exist.</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-[#FF6F00] text-[#2D2D2D] px-6 py-3 rounded-lg font-medium hover:bg-[#FF6F30] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <div className="w-24 h-24 mx-auto border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 