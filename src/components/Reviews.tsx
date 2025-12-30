
import React from 'react';
import { ChiliIcon, REVIEWS } from '../../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#050d0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-bold">
            <ChiliIcon />
            <span>Our Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic">What People Are Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-[#0a1f16] p-8 rounded-sm border border-white/5 hover:border-gold/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.author} className="w-14 h-14 rounded-full border-2 border-gold/20" />
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <div className="flex gap-1 text-gold">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <Quote size={40} className="ml-auto text-gold/10 group-hover:text-gold/20 transition-colors" />
              </div>
              <p className="text-gray-400 italic leading-relaxed">"{review.text}"</p>
              <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">{review.date} on Google</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/search/Snackyaard+Ambala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold border-b border-gold font-bold pb-1 hover:text-white hover:border-white transition-all uppercase tracking-[0.2em] text-sm"
          >
            Read All 200+ Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
