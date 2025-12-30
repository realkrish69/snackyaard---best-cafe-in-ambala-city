
import React from 'react';
import { Link } from 'react-router-dom';
import { ChiliIcon } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a1f16] overflow-hidden relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-bold">
              <ChiliIcon />
              <span>Unique Culinary Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic leading-tight">
              The Philosophy of <br /><span className="text-gold">Snackyaard Cafe</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                In the heart of Ambala's culinary heritage lies a story of passion, tradition, and innovation. 
                Snackyaard is an aesthetic café in Ambala City serving delicious momos, Chinese food, and fast food 
                in a cozy, modern atmosphere.
              </p>
              <p>
                Every dish is crafted with quality ingredients and bold flavors. We source our ingredients from 
                the same local land that has nourished Ambala for centuries, bringing you flavors that are 
                both familiar and extraordinary.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/menu" className="inline-block pb-1 border-b-2 border-gold text-gold font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm">
                Explore Our Story
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[100px_100px_0_100px] overflow-hidden border-8 border-gold/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=1000" 
                alt="Snackyaard Cafe Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
