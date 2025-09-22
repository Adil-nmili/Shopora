import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'

const slides = [
  {
    id: 1,
    title: "THE BEST COLLECTION",
    subtitle: "YAMAHA - HONDA - BMW",
    buttonText: "SHOP NOW",
    // Replace with your actual image path
    backgroundImage: "/slider/slide2.jpg" 
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    subtitle: "EXPLORE THE LATEST",
    buttonText: "VIEW PRODUCTS",
    // Replace with your actual image path
    backgroundImage: "/slider/slide6.jpg"
  },
  {
    id: 3,
    title: "PREMIUM MOTORCYCLES",
    subtitle: "LUXURY & PERFORMANCE",
    buttonText: "DISCOVER MORE",
    backgroundImage: "/slider/slide3.jpg"
  },
  {
    id: 4,
    title: "SPORT BIKES",
    subtitle: "SPEED & AGILITY",
    buttonText: "EXPLORE SPORT",
    backgroundImage: "/slider/slide1.jpg"
  },
  {
    id: 5,
    title: "ADVENTURE BIKES",
    subtitle: "EXPLORE THE WORLD",
    buttonText: "START ADVENTURE",
    backgroundImage: "/slider/slide5.jpg"
  },
  {
    id: 6,
    title: "CLASSIC MOTORCYCLES",
    subtitle: "TIMELESS ELEGANCE",
    buttonText: "VIEW CLASSICS",
    backgroundImage: "/slider/slide4.jpg"
  }
];

const CarouselHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-screen h-screen overflow-hidden hide-scrollbar">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3,,0.5,0.7, 1],
            
          }}
          transition={{ 
            duration: 3,
            // repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide.backgroundImage})` }}
        >
          <div className="absolute inset-0 flex flex-col bg-black/50  items-center justify-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-4 text-center"
            >
              {currentSlide.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl font-light text-center mb-8"
            >
              {currentSlide.subtitle}
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="px-8 py-3 bg-black border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              {currentSlide.buttonText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <Button
       variant='outline'
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full text-white hover:bg-opacity-40 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>
      <Button
      variant='outline'
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full text-white hover:bg-opacity-40 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
};

export default CarouselHomePage;