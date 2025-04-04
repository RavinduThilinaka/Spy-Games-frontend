import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoPinterest, logoLinkedin, cart, searchOutline, menuOutline, closeOutline } from "ionicons/icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringCart, setIsHoveringCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>
    
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 hidden md:block overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center overflow-hidden">
              <div className="whitespace-nowrap animate-marquee flex items-center">
                <span className="text-sm font-medium mr-4 text-white">
                  Exclusive Black Friday Offer! 
                </span>
                <span className="inline-flex items-center px-3 py-1 mx-1 bg-gradient-to-r from-green-500 to-green-600 skew-x-[-16deg] relative shadow-lg">
                  <span className="relative z-10 font-bold text-white">10 DAYS LEFT</span>
                  <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-600 rotate-45"></span>
                </span>
                <span className="text-sm font-medium ml-4 text-white">
                  Free shipping on orders over $50
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-light opacity-80 text-white">Follow us:</span>
              <div className="flex space-x-3">
                {[logoFacebook, logoTwitter, logoPinterest, logoLinkedin].map((icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <IonIcon icon={icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
     
          <a 
            href="#" 
            className="text-3xl md:text-4xl font-extrabold text-white font-oxanium tracking-tighter relative group"
          >
            <span className="relative z-10">
              Spy<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Games</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Live', 'Features', 'Shop', 'Blog', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className="relative text-white hover:text-yellow-400 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center">
                  {item}
                  {item === 'Shop' && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-500 rounded-full text-white animate-pulse">HOT</span>
                  )}
                </span>
                {/* Blue underline (always visible) */}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 bg-opacity-20"></span>
                {/* Yellow hover effect (fills the blue) */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              className="text-white hover:text-yellow-400 transition-all duration-300 p-2 group relative"
              onClick={() => setIsSearchOpen(true)}
            >
              <IonIcon icon={searchOutline} className="text-xl group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
            </button>
            
            <button 
              className="relative text-white hover:text-yellow-400 transition-all duration-300 p-2 group"
              onMouseEnter={() => setIsHoveringCart(true)}
              onMouseLeave={() => setIsHoveringCart(false)}
            >
              <IonIcon 
                icon={cart} 
                className={`text-xl transition-all duration-300 ${isHoveringCart ? 'scale-110 text-yellow-400' : ''}`} 
              />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md animate-bounce">
                3
              </span>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
            </button>
            
            <button 
              className="md:hidden text-white hover:text-yellow-400 transition-all duration-300 p-2 relative"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <IonIcon 
                icon={isNavOpen ? closeOutline : menuOutline} 
                className="text-2xl transform transition-transform duration-300 hover:rotate-90" 
              />
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4/5"></span>
            </button>
          </div>
        </div>

        <div className={`md:hidden bg-gradient-to-b from-gray-700 to-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${isNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-4 py-3">
            {['Home', 'Live', 'Features', 'Shop', 'Blog', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className="block py-3 px-4 text-white hover:bg-white bg-opacity-5 transition-all duration-300 rounded-lg group relative"
                onClick={() => setIsNavOpen(false)}
              >
                <div className="flex items-center">
                  <span className="relative">
                    {item}
                    {/* Blue underline (always visible) */}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 bg-opacity-20"></span>
                    {/* Yellow hover effect (fills the blue) */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  {item === 'Shop' && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 rounded-full text-white animate-pulse">HOT</span>
                  )}
                </div>
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-white border-opacity-10 flex justify-center space-x-6">
              {[logoFacebook, logoTwitter, logoPinterest, logoLinkedin].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <IonIcon icon={icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="relative w-full max-w-2xl px-4 animate-fadeIn">
            <input 
              type="search" 
              placeholder="Search games, features, news..." 
              className="w-full py-5 px-6 text-white text-xl bg-transparent border-b-2 border-white border-opacity-20 focus:border-yellow-400 outline-none transition-all duration-500 placeholder-white placeholder-opacity-50 focus:placeholder-transparent"
              autoFocus
            />
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 hover:text-white transition-all duration-300 transform hover:rotate-90"
              onClick={() => setIsSearchOpen(false)}
            >
              <IonIcon icon={closeOutline} className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;