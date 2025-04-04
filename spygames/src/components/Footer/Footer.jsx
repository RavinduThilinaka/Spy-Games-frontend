import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaRocket } from 'react-icons/fa';
import { IoLocationSharp, IoHeadset, IoMailOpen, IoCaretUp, IoChatbubbleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={18} />, bgColor: 'bg-[#3b5998]', href: '#' },
    { icon: <FaTwitter size={18} />, bgColor: 'bg-[#55acee]', href: '#' },
    { icon: <FaPinterest size={18} />, bgColor: 'bg-[#d71e18]', href: '#' },
    { icon: <FaLinkedin size={18} />, bgColor: 'bg-[#1565c0]', href: '#' },
  ];

  const productLinks = [
    { name: 'Graphics(26)', href: '#' },
    { name: 'Background(11)', href: '#' },
    { name: 'Fonts(56)', href: '#' },
    { name: 'Music(36)', href: '#' },
    { name: 'Photography(22)', href: '#' },
  ];

  const helpLinks = [
    { name: 'Terms & Condition', href: '#' },
    { name: 'Privacy and Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Affiliate', href: '#' },
    { name: 'Use Cases', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Footer Top */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a href="#" className="text-3xl font-bold text-white hover:text-yellow-400 transition-colors">Gamics</a>
            <p className="text-gray-400">Gamics marketplace the release etras thats sheet continig passag</p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <IoLocationSharp className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <address className="text-gray-400 not-italic">Address: PD Box W75 Street lan west</address>
              </li>
              <li className="flex items-center gap-3">
                <IoHeadset className="text-yellow-500" size={18} />
                <a href="tel:+94234567891" className="text-gray-400 hover:text-yellow-400 transition-colors">Phone: +94 234567891</a>
              </li>
              <li className="flex items-center gap-3">
                <IoMailOpen className="text-yellow-500" size={18} />
                <a href="mailto:abcd@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">Email: abcd@gmail.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Product Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`${social.bgColor} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter Sign Up</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                />
                <button
                  type="submit"
                  aria-label="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center"
                >
                  <FaRocket />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400">
            &copy; 2024 Gamics. All Right Reserved by{' '}
            <a href="#" className="text-yellow-400 hover:underline">codewithravindu</a>
          </div>
          <img 
            src="./Image/bgLogo10.png" 
            alt="Gamics Logo" 
            width="340" 
            height="21" 
            loading="lazy" 
            className="h-5 w-auto opacity-80"
          />
        </motion.div>
      </div>

      {/* Back to Top Buttons */}
      <motion.a
        href="#top"
        aria-label="back to top"
        className="fixed bottom-6 right-6 bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IoCaretUp size={20} />
      </motion.a>

   
    </footer>
  );
};

export default Footer;