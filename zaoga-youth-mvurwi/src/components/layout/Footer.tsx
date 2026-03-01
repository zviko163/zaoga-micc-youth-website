import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ChevronUp, Heart } from 'lucide-react';
import youthLogo from '../../assets/icons/youth_logo.jpeg';

const Footer = () => {
  // Function to scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-primary text-brand-light pt-20 pb-10 overflow-hidden mt-20">
      
      {/* DECORATION 1: SVG Wave Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(146%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-white"></path>
        </svg>
      </div>

      {/* DECORATION 2: Ambient Background Glows */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile-first Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link to="/" className="inline-block relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-30"></div>
              <img src={youthLogo} alt="ZAOGA Youth Logo" className="relative w-20 h-20 bg-white rounded-full p-1 shadow-xl border-2 border-yellow-500/50" />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Empowering the next generation in Mvurwi to live purposeful, Spirit-filled lives. Bound by the Spirit of God.
            </p>
            {/* Social Links with large touch targets for mobile */}
            <div className="flex space-x-4">
              <motion.a whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-brand-primary transition-colors border border-white/20 hover:border-transparent shadow-lg">
                <Facebook size={18} />
              </motion.a>
              <motion.a whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-brand-primary transition-colors border border-white/20 hover:border-transparent shadow-lg">
                <Instagram size={18} />
              </motion.a>
              <motion.a whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-brand-primary transition-colors border border-white/20 hover:border-transparent shadow-lg">
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-yellow-400 font-bold tracking-wider uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all block py-1">Our Story</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white hover:pl-2 transition-all block py-1">Ministries & Programs</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white hover:pl-2 transition-all block py-1">Upcoming Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white hover:pl-2 transition-all block py-1">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-yellow-400 font-bold tracking-wider uppercase mb-6 text-sm">Connect With Us</h3>
            <ul className="space-y-5 w-full max-w-xs">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">ZAOGA FIFMI Mvurwi Center,<br />Mashonaland Central, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-yellow-500 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">+263 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-yellow-500 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">youth@zaogamvurwi.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Call to Action */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h3 className="text-yellow-400 font-bold tracking-wider uppercase mb-6 text-sm">Stay Updated</h3>
             <p className="text-gray-300 text-sm mb-4">Get daily devotionals and event updates directly to your phone.</p>
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2"
             >
                <Phone size={18} /> Join WhatsApp Group
             </motion.button>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10 w-full mb-8"></div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          <p className="text-xs text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} ZAOGA FIFMI Mvurwi Youth Ministry. All rights reserved.
          </p>

          {/* Optional Freelance Credit */}
          <p className="text-xs text-gray-500 flex items-center gap-1">
             Built with <Heart size={10} className="text-red-500" /> by Mvurwi Media Team
          </p>

          {/* DECORATION 3: Scroll to Top Floating Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-16 right-0 md:relative md:top-0 bg-yellow-500 text-brand-primary p-3 rounded-full shadow-lg border-2 border-brand-primary flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} strokeWidth={3} />
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;