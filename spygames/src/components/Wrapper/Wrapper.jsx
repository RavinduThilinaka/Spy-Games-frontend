import React from 'react';
import { motion } from 'framer-motion';
import { IoPlay, IoTimeOutline, IoCalendarOutline, IoCashOutline } from 'react-icons/io5';
import { FaTrophy, FaGamepad } from 'react-icons/fa';
import Images from '../../assets/Images/back2.jpg';
import Images2 from '../../assets/Images/bgLogo7.png';
import Images3 from '../../assets/Images/bgLogo8.png';
import Images4 from '../../assets/Images/battlefield2.jpg';
import Images5 from '../../assets/Images/battlefield.jpg';
import Images6 from '../../assets/Images/bgLogo5.png';
import Images7 from '../../assets/Images/bgLogo10.png';
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
      image: Images4
    },
    {
      id: 3,
      title: "Spacing Shooter",
      subtitle: "Daily",
      genre: "Action",
      price: "$45.00",
      image: Images5
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

  const upcomingMatches = [
    {
      id: 1,
      team1: "Tokyo Eagle",
      team2: "New York Hunter",
      time: "08:45",
      date: "Today",
      format: "Best of 3",
      prize: "$10,000",
      game: "Valorant",
      team1Logo: Images2,
      team2Logo: Images3
    },
    {
      id: 2,
      team1: "London Wolves",
      team2: "Paris Phoenix",
      time: "14:30",
      date: "Tomorrow",
      format: "Best of 5",
      prize: "$25,000",
      game: "CS:GO",
      team1Logo: Images6,
      team2Logo: Images7
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

      {/* Enhanced Live Match Section with Centered Icon */}
      <section className="py-16 px-4" id="live" aria-label="live-match">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-semibold mb-2 tracking-wider">Esports Action</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Live Matches</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Experience the thrill of competitive gaming with our live broadcasts and upcoming tournaments.
            </p>
          </div>

          {/* Featured Live Stream with Centered Play Icon */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 max-w-6xl mx-auto border-2 border-yellow-500/20"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative pb-[56.25%] bg-gray-700">
              <img 
                src={Banner}
                alt="Live match video" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Big Centered Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:shadow-2xl">
                    <IoPlay className="text-3xl md:text-4xl text-black ml-2" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-400 opacity-0 group-hover:opacity-100 animate-ping-slow transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Match Info at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-500 font-bold text-sm uppercase tracking-wider">Live Now</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Championship Finals</h3>
                    <p className="text-gray-300">Tokyo Eagle vs New York Hunter</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 flex items-center gap-2">
                      <IoTimeOutline className="text-yellow-400" />
                      <span>08:45 PM</span>
                    </p>
                    <p className="text-gray-300 flex items-center gap-2">
                      <FaTrophy className="text-yellow-400" />
                      <span>$10,000 Prize</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Matches Section (Preserved) */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Matches</span>
            </h3>
            <p className="text-gray-400 mt-2">Don't miss these exciting upcoming tournaments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  {/* Team 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 relative mb-3">
                      <img 
                        src={match.team1Logo}
                        alt={match.team1} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white">{match.team1}</h4>
                  </div>

                  {/* Match Info */}
                  <div className="flex flex-col items-center px-4">
                    <div className="text-center">
                      <time dateTime={match.time} className="text-xl font-bold text-white">
                        {match.time}
                      </time>
                      <p className="text-gray-400 text-sm">{match.date}</p>
                      <div className="bg-gray-900 border-2 border-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto my-2">
                        <span className="text-white font-bold">VS</span>
                      </div>
                      <span className="flex items-center justify-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-xs mt-2">
                        <FaGamepad className="text-yellow-400" /> {match.game}
                      </span>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 relative mb-3">
                      <img 
                        src={match.team2Logo}
                        alt={match.team2} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white">{match.team2}</h4>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <span className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
                    <FaTrophy className="text-yellow-400" /> {match.format}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
                    <IoCashOutline className="text-yellow-400" /> {match.prize}
                  </span>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <IoTimeOutline /> Set Reminder
                </button>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-4">
            <button className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
              View All Upcoming Matches
            </button>
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
        @keyframes ping-slow {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Wrapper;