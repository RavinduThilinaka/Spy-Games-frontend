import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // You would typically send the email to your backend here
      console.log('Subscribed with:', email);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900"
      aria-label="newsletter"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our <span className="text-yellow-400">Newsletter</span>
            </motion.h2>

            <motion.p 
              className="text-gray-300 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Stay updated with the latest gaming news, releases, and exclusive offers!
            </motion.p>

            {isSubscribed ? (
              <motion.div
                className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
              >
                Thank you for subscribing! 🎮
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative flex-grow max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email_address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Subscribe</span>
                  <FiSend className="text-lg" />
                </motion.button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsLetter;