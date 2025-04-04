import React from 'react';
import Images from '../../assets/Images/tshirt.png';
import Images3 from '../../assets/Images/rtx.jpg';
import Images4 from '../../assets/Images/vr.jpg';
import Images2 from '../../assets/Images/xbox.png';

function Shop() {
  const products = [
    {
      id: 1,
      title: "Women black T-shirt",
      category: "t-Shirt",
      price: 32.00,
      image: Images
    },
    {
      id: 2,
      title: "Gamers 5 X-box Controller",
      category: "X-box",
      price: 20.00,
      image: Images2
    },
    {
      id: 3,
      title: "GeForce RTX 2070",
      category: "Graphics",
      price: 65.00,
      image:Images3
    },
    {
      id: 4,
      title: "Virtual Reality Smiled",
      category: "VR-Box",
      price: 50.00,
      image:Images4
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
      id="shop"
      aria-label="shop"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gaming product <span className="text-yellow-400">Corner</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Complete with 100 player on a remote island for winner takes showdown know issue where certain skin stratgic
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {products.map((product) => (
              <div 
                key={product.id}
                className="flex-shrink-0 w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <figure className="w-full h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>

                <div className="p-5">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-600 text-white rounded-full mb-2">
                    {product.category}
                  </span>
                  
                  <h3 className="text-xl font-bold mb-3">
                    <a href="#" className="hover:text-yellow-400 transition-colors">
                      {product.title}
                    </a>
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className="text-yellow-400 font-bold text-lg">${product.price.toFixed(2)}</p>
                    <button 
                      className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
                      aria-label={`Add ${product.title} to cart`}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shop;