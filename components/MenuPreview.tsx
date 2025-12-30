
import React from 'react';
import { Link } from 'react-router-dom';
import { ChiliIcon, MENU_ITEMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const MenuPreview: React.FC = () => {
  const categories = ['Momos', 'Chinese', 'Snacks'];
  
  return (
    <section id="menu-highlights" className="py-24 bg-[#050d0a] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-bold">
            <ChiliIcon />
            <span>Signature Delights</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic">Le Signature Menu</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const item = MENU_ITEMS.find(i => i.category === category);
            return (
              <Link 
                key={category} 
                to={`/menu?cat=${category}`}
                className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-2xl block"
              >
                <img 
                  src={item?.image || `https://picsum.photos/600/800?random=${idx + 30}`} 
                  alt={category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif font-bold mb-2">{category}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Hand-crafted {category.toLowerCase()} with premium ingredients.
                  </p>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm tracking-widest uppercase">
                    EXPLORE <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="px-12 py-5 bg-gold text-[#050d0a] font-bold inline-flex items-center gap-3 hover:bg-white active:scale-95 transition-all group shadow-xl">
            SEE THE FULL MENU
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
