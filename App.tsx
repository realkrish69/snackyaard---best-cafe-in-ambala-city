
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Vibes from './components/Vibes';
import Reviews from './components/Reviews';
import MenuPage from './components/MenuPage';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <MenuPreview />
      <Vibes />
      <Reviews />
      {/* Hidden Team Section Recreation */}
      <section id="team" className="py-24 bg-[#0a1f16] border-t border-gold/10 overflow-hidden relative z-10">
        <div className="container mx-auto px-6 text-center space-y-8">
           <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-bold italic animate-pulse">The Team Behind The Experience</h3>
           <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-white mb-12">Behind the Magic</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-[40px] overflow-hidden border-4 border-gold/20 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1577100078279-b3445dee627a?auto=format&fit=crop&w=800&q=80" alt="The Kitchen Team" className="w-full h-full object-cover" />
              </div>
              <div className="text-left space-y-6">
                 <h4 className="text-2xl font-serif text-gold italic">Precision & Passion</h4>
                 <p className="text-gray-400 leading-relaxed text-lg">
                   Our kitchen is a symphony of local talent and global standards. Each momo is hand-wrapped, each sauce is simmered for hours, and every plate is inspected for perfection before it reaches your table.
                 </p>
                 <div className="pt-4 border-t border-gold/10">
                   <p className="text-white font-bold tracking-widest uppercase">Visit us today in Model Town, Ambala.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

// Component to handle hash scrolling on the home page
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
