import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_DETAILS } from '../../constants';
import { ChevronRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax-like effect overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home.jpg"
          alt="Snackyaard Atmosphere"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050d0a]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm md:text-base font-semibold">
            "One Table, A Whole Journey"
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold italic drop-shadow-2xl">
            {RESTAURANT_DETAILS.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Experience the finest momos and authentic Chinese flavors in the heart of Ambala.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300 relative z-20">
          <Link
            to="/menu"
            className="group relative px-10 py-4 bg-gold text-[#050d0a] font-bold rounded-sm overflow-hidden flex items-center gap-2 hover:bg-white active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <span>VIEW MENU</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={RESTAURANT_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-gold text-gold font-bold rounded-sm flex items-center gap-2 hover:bg-gold/10 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <MapPin size={18} />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold"></div>
      </div>
    </section>
  );
};

export default Hero;
