import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Adventure2 from '../../assets/Images/cyberpunk.jpg';
import Back4 from '../../assets/Images/back4.jpg';
import Dynlight2 from '../../assets/Images/dyinglight2.jpg';
import Battlefield from '../../assets/Images/battlefield2.jpg';

function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [Adventure2, Back4, Dynlight2, Battlefield];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section 
      className="relative w-full overflow-hidden min-h-screen flex items-center justify-center"
      id="home" 
      aria-label="home"
    >
     
      <div className="absolute inset-0 w-full overflow-hidden">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: currentBg === index ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentBg === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 w-full bg-black bg-opacity-60"></div>
      </div>

      
      <div className="absolute inset-0 w-full overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const isCircle = Math.random() > 0.5;
          return (
            <motion.div
              key={i}
              className={`absolute ${isCircle ? 'rounded-full' : 'rounded-lg'} bg-yellow-400`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: Math.random() * 360,
                opacity: 0.3,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.4, 0.2],
                rotate: isCircle ? 0 : [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

   
      <div className="absolute inset-0 w-full overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -20, -40, -60],
              opacity: [0, 0.6, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
      
        <motion.div 
          className="hero-content lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="hero-subtitle text-yellow-400 text-lg font-semibold mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block mr-2 bg-co">🎮</span> World Gaming
          </motion.p>
          
          <motion.h1 
            className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x">Manage</span> <span className="block">Dominate</span>
          </motion.h1>
          
          <motion.p 
            className="hero-text text-gray-200 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Find technology or people for digital projects in public sector and beyond. Join the ultimate gaming experience where legends are born.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button 
              className="btn relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-yellow-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.button>

            <motion.button 
              className="btn relative overflow-hidden bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Watch Trailer</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.button>
          </div>
        </motion.div>

     
        <div className="relative lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
        
          <motion.div 
            className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-yellow-400/30 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Premium Features
            </h3>
            
            <ul className="space-y-3">
              {[
                "4K Ultra HD Streaming",
                "Exclusive Tournaments",
                "Customizable Profiles",
                "Real-time Stats Tracking",
                "Cross-platform Play",
                "Priority Support"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
            
           
            <motion.div 
              className="mt-6 pt-4 border-t border-yellow-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Live Tournament:</span>
                <span className="text-yellow-400 font-bold">Season 5 Finals</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-yellow-500 h-2.5 rounded-full animate-pulse" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>12,345 viewers</span>
                <span>3:45 remaining</span>
              </div>
            </motion.div>
          </motion.div>

        
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 z-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              filter: [
                "drop-shadow(0 0 3px #ff9900) drop-shadow(0 0 10px #ff990066)",
                "drop-shadow(0 0 3px #ffff00) drop-shadow(0 0 10px #ffff0066)",
                
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/686/686589.png" 
              alt="game controller" 
              className="w-full h-full object-contain"
              style={{
                filter: "brightness(0) saturate(100%)",
                mixBlendMode: "lighten"
              }}
            />
          </motion.div>

          <motion.div 
            className="absolute -top-10 -right-10 w-28 h-28 z-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2965/2965300.png" 
              alt="gaming laptop" 
              className="w-full h-full object-contain drop-shadow-lg"
              style={{ filter: 'hue-rotate(10deg) brightness(1.3) contrast(1.2) saturate(1.4)' }}
            />
          </motion.div>

       
          <motion.div 
            className="absolute -bottom-5 right-10 bg-black bg-opacity-60 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/30 shadow-lg w-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                <span className="text-xs font-bold">#1</span>
              </div>
              <span className="text-sm font-medium text-white">ProGamer92</span>
            </div>
            <div className="text-xs text-gray-300">Winning streak: 12</div>
          </motion.div>
        </div>
      </div>

     
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ y: 5 }}
      >
        <span className="text-gray-200 text-sm mb-2 tracking-wider">EXPLORE MORE</span>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;