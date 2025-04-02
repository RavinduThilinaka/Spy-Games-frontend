import React from 'react';
import { motion } from 'framer-motion';
import { IoPlay } from 'react-icons/io5';
import Images from '../../assets/Images/back2.jpg';
import Images2 from '../../assets/Images/bgLogo2.png';
import Images3 from '../../assets/Images/bgLogo3.png';
import Images4 from '../../assets/Images/bgLogo4.png';
import Banner from '../../assets/Images/banner.jpg';

const Wrapper = () => {
  const latestGames = [
    {
      id: 1,
      title: "White Walker",
      subtitle: "Daily",
      genre: "Shooting(Z)",
      price: "Free",
      image: Images
    },
    {
      id: 2,
      title: "Sniper Ghost",
      subtitle: "IT",
      genre: "Adventure",
      price: "$55.00",
      image: Images
    },
    {
      id: 3,
      title: "Spacing Shooter",
      subtitle: "Daily",
      genre: "Action",
      price: "$45.00",
      image: Images
    },
    {
      id: 4,
      title: "Most Wanted",
      subtitle: "Daily",
      genre: "Racing",
      price: "Free",
      image: Images
    }
  ];

  return (
    <div className="section-wrapper bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Latest Games Section */}
      <section className="py-20 px-4" aria-label="latest game">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-semibold mb-2 tracking-wider">Latest Releases</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Create & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Manage</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            
            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
              {latestGames.map((game) => (
                <motion.div 
                  key={game.id}
                  className="flex-shrink-0 w-72"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-64">
                      <img 
                        src={game.image} 
                        alt={game.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold px-3 py-1 text-xs rounded-md skew-x-[-12deg] inline-block">
                          {game.genre}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {game.title} <span className="text-yellow-400">{game.subtitle}</span>
                      </h3>
                      <p className="text-gray-400">
                        Entry Fee: <span className="text-yellow-400 font-medium">{game.price}</span>
                      </p>
                      <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                        Play Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Match Section */}
      <section className="py-16 px-4" id="live" aria-label="live-match">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Watch Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Match</span>
          </h2>

            <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <div className="relative pb-[56.25%] bg-gray-700"> {/* 16:9 aspect ratio */}
                    <img 
                    src={Banner}
                    alt="Live match video" 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    />
                    <button 
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="play video"
                    >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <IoPlay className="text-xl md:text-2xl text-black ml-1" />
                    </div>
                    </button>
                </div>
            </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex-1 flex justify-center mb-6 md:mb-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <img 
                  src="./Image/bgLogo7.png" 
                  alt="Tokyo Eagle" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="flex-1 text-center py-4">
              <time dateTime="08:45" className="text-3xl font-bold text-yellow-400 block mb-2">08:45</time>
              <p className="text-gray-400 uppercase tracking-wider text-sm">Upcoming live matches</p>
              <div className="mt-4 flex justify-center space-x-4">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Best of 3</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Prize $10,000</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center mt-6 md:mt-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <img 
                  src="./Image/bgLogo8.png" 
                  alt="New York Hunter" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Wrapper;