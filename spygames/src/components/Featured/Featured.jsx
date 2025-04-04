import React from 'react';
import { motion } from 'framer-motion';
import Images from '../../assets/Images/dyinglight2.jpg';
import Images2 from '../../assets/Images/Racing5.jpg';
import Images3 from '../../assets/Images/finalfantasy.jpg';
import Images4 from '../../assets/Images/Adventure.jpg';

const featuredGames = [
  {
    id: 1,
    title: "Dying Light",
    spanText: "2",
    image: Images,
    icon: Images,
    platforms: "Playstation 5, Xbox"
  },
  {
    id: 2,
    title: "Need for",
    spanText: "Speed",
    image: Images2,
    icon: Images2,
    platforms: "Playstation 5, Xbox"
  },
  {
    id: 3,
    title: "Final",
    spanText: "Fantasy",
    image: Images3,
    icon: Images3,
    platforms: "Playstation 5, Xbox"
  },
  {
    id: 4,
    title: "Adventure",
    spanText: "Time",
    image: Images4,
    icon: Images4,
    platforms: "Playstation 5, Xbox"
  }
];

const Featured = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  
  const scrollbarWidth = `${(100 / featuredGames.length)}%`;

  return (
    <section className="py-16 bg-gray-900 text-white" id="featured" aria-label="featured game">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All Released <span className="text-yellow-400">Games</span>
        </motion.h2>

        <div className="relative">
       
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-yellow-600 rounded-full" 
              style={{ width: scrollbarWidth }}
              animate={{
                x: ['0%', '300%'], 
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <motion.ul 
            className="flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {featuredGames.map((game) => (
              <motion.li 
                key={game.id}
                className="flex-shrink-0 w-[300px] snap-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="relative rounded-xl overflow-hidden shadow-lg group h-[400px]"
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <figure className="relative h-full w-full">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </figure>

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-2xl font-bold">
                      <a href="#" className="hover:text-yellow-400 transition-colors">
                        {game.title} <span className="text-yellow-400">{game.spanText}</span>
                      </a>
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>{game.platforms}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={game.icon} 
                        alt="" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center">
                      <a href="#" className="hover:text-yellow-400 transition-colors">
                        {game.title} <span className="text-yellow-400">{game.spanText}</span>
                      </a>
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>{game.platforms}</span>
                    </div>
                    <button className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

  
      <style jsx global>{`
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        /* Custom scrollbar animation */
        @keyframes scrollIndicator {
          0% { transform: translateX(0%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default Featured;