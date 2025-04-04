import React from 'react';
import Images from '../../assets/Images/battlefield.jpg';
import Images2 from '../../assets/Images/dyinglight2.jpg';
import Images3 from '../../assets/Images/finalfantasy.jpg';
import Images4 from '../../assets/Images/Adventure.jpg';

import { IoPersonOutline, IoCalendarOutline, IoCaretForward } from 'react-icons/io5';

function Blog() {
  const articles = [
    {
      id: 1,
      title: "Shooter Action Video",
      author: "Admin",
      date: "November 25, 2024",
      description: "Complete with 100 player on a remote island for winner takes showdown know issue where certain skin strategic",
      image: Images,
      alt: "Shooter action video"
    },
    {
      id: 2,
      title: "The Walking Dead",
      author: "Admin",
      date: "November 25, 2024",
      description: "Complete with 100 player on a remote island for winner takes showdown know issue where certain skin strategic",
      image: Images2,
      alt: "The walking dead"
    },
    {
      id: 3,
      title: "Defence of the Ancient",
      author: "Admin",
      date: "November 25, 2024",
      description: "Complete with 100 player on a remote island for winner takes showdown know issue where certain skin strategic",
      image: Images3,
      alt: "Defence of the Ancient"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" id="blog" aria-label="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest News & <span className="text-yellow-400">Articles</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Complete with 100 player on a remote island for winner takes showdown know issue where certain skin strategic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <figure className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="290"
                />
              </figure>

              <div className="p-6">
                <div className="flex gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <IoPersonOutline className="text-yellow-400" />
                    <a href="#" className="hover:text-yellow-400 transition-colors">{article.author}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className="text-yellow-400" />
                    <time dateTime="2024-11-25">{article.date}</time>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {article.title}
                  </a>
                </h3>

                <p className="text-gray-300 mb-4">
                  {article.description}
                </p>

                <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <span className="font-medium">Read More</span>
                  <IoCaretForward className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;