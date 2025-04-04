import React from 'react';
import { motion } from 'framer-motion';
import brand1 from '../../assets/Images/bgLogo.png';
import brand2 from '../../assets/Images/bgLogo2.png';
import brand3 from '../../assets/Images/bgLogo3.png';
import brand4 from '../../assets/Images/bgLogo4.png';
import brand5 from '../../assets/Images/bgLogo5.png';
import brand6 from '../../assets/Images/bgLogo6.png';

const Brand = () => {
  const brands = [
    { id: 1, src: brand1, alt: 'Brand Logo 1' },
    { id: 2, src: brand2, alt: 'Brand Logo 2' },
    { id: 3, src: brand3, alt: 'Brand Logo 3' },
    { id: 4, src: brand4, alt: 'Brand Logo 4' },
    { id: 5, src: brand5, alt: 'Brand Logo 5' },
    { id: 6, src: brand6, alt: 'Brand Logo 6' },
  ];

  // Create an array with enough duplicates to prevent half-box display
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="section brand py-16 bg-gradient-to-b from-gray-900 to-gray-800" aria-label="brand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Partners</span>
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          {/* Brand carousel */}
          <motion.ul 
            className="flex space-x-8 py-4"
            initial={{ x: 0 }}
            animate={{ 
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.li 
                key={`${brand.id}-${index}`}
                className="brand-item flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img 
                      src={brand.src} 
                      width={90} 
                      height={90} 
                      loading="lazy" 
                      alt={brand.alt}
                      className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br  rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 cursor-pointer"></div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Brand;