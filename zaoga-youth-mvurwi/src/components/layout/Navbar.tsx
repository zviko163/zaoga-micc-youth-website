import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Instagram, Mail } from 'lucide-react';
import youthLogo from '../../assets/icons/youth_logo.jpeg';
import TikTokIcon from '../ui/Tiktok';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Effect: Detect scroll to shrink the navbar slightly
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/who-we-are' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300 font-sans">
       
       {/* 1. TOP UTILITY BAR (Disappears on scroll) */}
       {/* Adds that "elaborate" corporate/church feel */}
       <div className={`bg-brand-primary/95 text-white/70 py-1.5 px-4 text-xs font-medium border-b border-white/10 transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="hidden sm:inline tracking-wider">Forward In Faith Ministries International — Mvurwi</span>
            <div className="flex space-x-6 items-center ml-auto sm:ml-0">
              <a href="#" className="hover:text-yellow-400 flex items-center gap-1.5 transition-colors"><Phone size={12}/> 0784436503</a>
              <a href="#" className="hover:text-yellow-400 flex items-center gap-1.5 transition-colors"><Mail size={12}/> youth@zaogamvurwi.org</a>
              <div className="flex space-x-3 pl-4 border-l border-white/20">
                 <Facebook size={12} className="cursor-pointer hover:text-blue-400 transition-colors"/>
                 <Instagram size={12} className="cursor-pointer hover:text-pink-400 transition-colors"/>
                 <TikTokIcon size={12} className="cursor-pointer hover:text-black transition-colors"/>
              </div>
            </div>
          </div>
       </div>

       {/* 2. MAIN NAVIGATION */}
       <nav className={`
          w-full transition-all duration-300 border-b-4 border-yellow-500
          ${scrolled 
            ? 'bg-brand-primary shadow-2xl py-2' 
            : 'bg-brand-primary/90 backdrop-blur-md py-4' // Glass effect at top
          }
       `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO AREA - Elaborated with dual text */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={youthLogo} 
                  alt="ZAOGA Logo" 
                  className={`relative z-10 bg-white rounded-full p-0.5 object-cover shadow-lg transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-14 w-14'}`} 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white tracking-wide leading-none text-lg group-hover:text-yellow-400 transition-colors">ZAOGA YOUTH</span>
                <span className="text-[10px] text-yellow-500 font-extrabold tracking-[0.2em] uppercase mt-1">Mvurwi District</span>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200
                    ${location.pathname === link.path 
                        ? 'text-yellow-400 bg-white/10' 
                        : 'text-gray-100 hover:text-yellow-400 hover:bg-white/5'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* "CALL TO ACTION" BUTTON (Distinct from links) */}
              <div className="pl-4 ml-2 border-l border-white/10">
                <Link to="/contact" className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-brand-primary font-bold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2">
                   Get Involved
                </Link>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-yellow-400 transition-colors p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-brand-primary border-t border-white/10 shadow-inner px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-yellow-400 transition-colors border-l-4 border-transparent hover:border-yellow-500"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 text-center rounded-lg bg-yellow-500 text-brand-primary font-bold shadow-lg"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;