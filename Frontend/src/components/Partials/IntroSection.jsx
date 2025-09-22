import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <div id='intro' className="h-[70vh] w-full bg-[url(/assets/asset1.jpg)] bg-cover bg-no-repeat bg-start bg-fixed relative">
      <div className="absolute top-0 left-0 h-full w-full bg-black/50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Welcome to <span className="text-[#FF6F00]">Shopora</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              Your ultimate destination for premium motorcycles and accessories. 
              Discover the perfect ride that matches your style and passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}    
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#FF6F00] text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-[#FF6F00] rounded-full"
                />
                <span className="text-white">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-3 h-3 bg-[#FF6F00] rounded-full"
                />
                <span className="text-white">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-3 h-3 bg-[#FF6F00] rounded-full"
                />
                <span className="text-white">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;