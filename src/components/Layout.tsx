
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Navigation, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Philosophy', to: '/#about' },
    { name: 'Menu', to: '/menu' },
    { name: 'Vibes', to: '/#vibes' },
    { name: 'Reviews', to: '/#reviews' },
    { name: 'Contact', to: '/#contact' },
  ];

  const whatsappUrl = `https://wa.me/919350991531`;
  const telUrl = `tel:09350991531`;

  return (
    <div className="min-h-screen bg-[#050d0a] relative">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-[#050d0a]/95 backdrop-blur-md py-3 border-b border-gold/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="hidden lg:flex space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="text-sm tracking-widest uppercase hover:text-gold transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-gold italic z-[70]">
            {RESTAURANT_DETAILS.name}
          </Link>

          <div className="hidden lg:flex space-x-8">
            {navLinks.slice(3).map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="text-sm tracking-widest uppercase hover:text-gold transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white relative z-[70] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 bg-[#0a1f16] z-[65] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl uppercase tracking-widest hover:text-gold transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 pt-8">
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-green-600 rounded-full"><MessageCircle size={24} /></a>
               <a href={telUrl} className="p-4 bg-gold text-[#050d0a] rounded-full"><Phone size={24} /></a>
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer id="contact" className="bg-[#050d0a] pt-20 pb-10 border-t border-gold/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold italic text-gold">{RESTAURANT_DETAILS.name}</h2>
              <p className="text-gray-400 max-w-xs">{RESTAURANT_DETAILS.tagline}</p>
              <div className="flex space-x-4">
                <a href={RESTAURANT_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/20 rounded-full hover:bg-gold hover:text-[#050d0a] transition-all">
                  <Navigation size={20} />
                </a>
                <a href={telUrl} className="p-2 border border-gold/20 rounded-full hover:bg-gold hover:text-[#050d0a] transition-all">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif text-gold uppercase tracking-widest">Find Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <p className="text-gray-400">{RESTAURANT_DETAILS.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-gold" size={20} />
                  <p className="text-gray-400">{RESTAURANT_DETAILS.hours}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-gold" size={20} />
                  <p className="text-gray-400">{RESTAURANT_DETAILS.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-serif text-gold uppercase tracking-widest">Opening Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between"><span>Monday - Sunday</span> <span>11:00 AM - 12:00 AM</span></p>
                <div className="pt-4">
                  <p className="text-gold font-bold italic">Price Range</p>
                  <p>{RESTAURANT_DETAILS.priceRange}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {RESTAURANT_DETAILS.name}. Crafted for excellence in Ambala City.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col space-y-4">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-white"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href={telUrl} 
          className="bg-gold p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-[#050d0a]"
          title="Call Now"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
