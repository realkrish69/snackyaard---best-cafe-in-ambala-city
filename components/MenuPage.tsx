
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MENU_ITEMS, RESTAURANT_DETAILS } from '../constants';
import { ArrowLeft, Search } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Momos', 'Chinese', 'Snacks', 'Beverages'];

  useEffect(() => {
    const categoryFromUrl = searchParams.get('cat');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-[#050d0a] pb-20 animate-fade-in relative z-[110]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a1f16]/95 backdrop-blur-md border-b border-gold/10 p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="text-gold p-2 hover:bg-gold/10 rounded-full transition-colors" aria-label="Go back">
            <ArrowLeft />
          </Link>
          <h1 className="text-xl font-serif italic font-bold text-gold">Snackyaard Menu</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search favorites..."
            className="w-full bg-[#050d0a] border border-gold/20 rounded-full py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold tracking-widest transition-all shadow-sm ${
                activeCategory === cat 
                  ? 'bg-gold text-[#050d0a]' 
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-gold/30'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-[#0a1f16] rounded-xl overflow-hidden shadow-xl border border-white/5 flex flex-col group h-full">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                  <span className="text-gold font-bold">₹{item.price}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{item.name}</h3>
                  <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded uppercase font-bold tracking-tighter">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No items found matching your selection.</p>
          </div>
        )}
      </div>

      {/* Footer Support Info */}
      <div className="mt-12 p-8 border-t border-gold/10 text-center">
        <p className="text-gold font-serif italic mb-2">Enjoying your time at Snackyaard?</p>
        <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">Prices inclusive of all taxes</p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-gold transition-colors flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
