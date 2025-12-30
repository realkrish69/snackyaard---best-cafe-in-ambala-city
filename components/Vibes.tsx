
import React from 'react';
import { Link } from 'react-router-dom';
import { ChiliIcon } from '../constants';

const Vibes: React.FC = () => {
  return (
    <section id="vibes" className="py-24 bg-[#0a1f16] relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="https://picsum.photos/1920/1080?random=40" alt="Vibes Background" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
             <div className="w-full aspect-video rounded-3xl overflow-hidden border-4 border-gold/20 shadow-2xl">
               <img src="https://picsum.photos/1000/600?random=41" alt="Cafe Drinks" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -top-10 -left-10 w-48 h-48 border border-gold/20 rounded-full animate-pulse"></div>
          </div>

          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-bold">
              <ChiliIcon />
              <span>The Spirit of Ambala</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic leading-tight">
              Savor the Aesthetic <br /><span className="text-gold">Vibes & Mocktails</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Snackyaard isn't just about food; it's an experience. Our curated selection of mocktails and cafe favorites are designed to complement your favorite spicy momos and savory Chinese snacks.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-white">Coolers</p>
                <p className="text-gray-400 text-sm">Refreshing Mojitos & Iced Teas</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-white">Brewed</p>
                <p className="text-gray-400 text-sm">Premium Coffees & Hot Sips</p>
              </div>
            </div>
            <Link 
              to="/menu?cat=Beverages" 
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold text-gold px-8 py-3 font-bold hover:bg-gold hover:text-[#050d0a] active:scale-95 transition-all uppercase text-sm tracking-widest shadow-md"
            >
              View Beverage Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vibes;
