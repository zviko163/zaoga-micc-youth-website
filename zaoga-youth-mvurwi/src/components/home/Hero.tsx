import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn'; // <-- Import our new wrapper
import { motion } from 'framer-motion'; // <-- Import motion for the buttons

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* Background Image Setup (Keep your existing code for the background) */}
      <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" alt="Youth Worship" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        
        {/* Delay 0.1s */}
        <FadeIn delay={0.1} direction="down">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/50 text-sm font-semibold tracking-wider mb-4">
            WELCOME TO ZAOGA FIFMI MVURWI
          </span>
        </FadeIn>
        
        {/* Delay 0.3s */}
        <FadeIn delay={0.3} direction="up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Go Ye Therefore <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              (Matt 28:19)
            </span>
          </h1>
        </FadeIn>
        
        {/* Delay 0.5s */}
        <FadeIn delay={0.5} direction="up">
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            A generation of young people on fire for God, rooted in the Word, and ready to impact our community.
          </p>
        </FadeIn>
        
        {/* Buttons with Mobile Tap Animations */}
        <FadeIn delay={0.7} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Added motion.div with whileTap for perfect mobile feel */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-brand-primary font-bold rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center">
                  Join the Family <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link to="/programs" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 flex items-center justify-center">
                  Our Programs <PlayCircle className="ml-2 h-5 w-5" />
                </Link>
            </motion.div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;