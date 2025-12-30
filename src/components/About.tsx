import React from "react";
import { Link } from "react-router-dom";
import { ChiliIcon } from "../../constants";
import aboutImage from "../assets/images/about-cafe.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0a1f16] overflow-hidden relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT SIDE – IMAGE */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[100px_100px_0_100px] overflow-hidden border-8 border-gold/10 shadow-2xl">
              <img
                src={aboutImage}
                alt="Snackyaard Cafe Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0"></div>
          </div>

          {/* RIGHT SIDE – TEXT */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-right text-left">

            <div className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-bold">
              <ChiliIcon />
              <span className="ml-2">THE PEOPLE BEHIND THE FLAVOURS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold italic leading-tight text-white">
              Behind the <span className="text-gold">Craft</span>
            </h2>

            <h3 className="text-gold text-xl italic">
              Where Art Meets Taste
            </h3>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Our kitchen is driven by skilled hands and creative minds. Every dish is thoughtfully prepared, every ingredient carefully chosen, and every recipe perfected with time and patience. From freshly wrapped momos to slow-cooked sauces, nothing leaves our kitchen until it meets our highest standards.

We believe great food is not just cooked it’s crafted, plated, and served with heart.
              </p>
            </div>

            <p className="uppercase tracking-widest text-white pt-4 border-t border-gray-600 text-sm">
              Visit us today in Model Town, Ambala.
            </p>

            <div className="pt-4">
              <Link
                to="/menu"
                className="inline-block pb-1 border-b-2 border-gold text-gold font-bold hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
              >
                Explore Our Story
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
