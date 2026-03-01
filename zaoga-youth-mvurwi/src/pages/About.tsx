import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Flame, Globe, Sparkles } from 'lucide-react';

// --- CONTINUOUS AMBIENT COMPONENT 1: FLOATING ORBS ---
// These will slowly drift around the background infinitely
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{
        y: [0, -40, 0],
        x: [0, 30, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 45, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        y: [0, 50, 0],
        x: [0, -40, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-yellow-400/10 rounded-full blur-[120px]"
    />
  </div>
);

// --- CONTINUOUS AMBIENT COMPONENT 2: INFINITE MARQUEE ---
// A seamless scrolling text ribbon
const InfiniteMarquee = () => {
  const marqueeText = "FORWARD IN FAITH • PURITY • PURPOSE • POWER • HOLY SPIRIT • ";
  
  return (
    <div className="w-full bg-brand-primary border-y border-yellow-500/30 overflow-hidden py-3 relative z-20 flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex whitespace-nowrap"
      >
        {/* We duplicate the text multiple times so it loops seamlessly */}
        <span className="text-yellow-400 font-bold tracking-[0.2em] text-sm md:text-base pr-4">
            {marqueeText.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
};

const About = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="bg-brand-white min-h-screen relative">
      
      {/* Inject the living background */}
      <FloatingOrbs />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
            alt="Youth Group" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/80 to-brand-white"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center">
            {/* Continuous floating icon over the header */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 text-yellow-400 bg-white/10 p-3 rounded-full backdrop-blur-sm"
            >
                <Sparkles size={32} />
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl"
            >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Story</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 font-light"
            >
                Rooted in the vision of ZAOGA FIFMI, expanding the Kingdom in Mvurwi.
            </motion.p>
        </div>
      </section>

      {/* Inject the infinite scrolling ribbon */}
      <InfiniteMarquee />

      {/* --- MISSION & VISION --- */}
      <section className="relative z-20 pt-16 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission Card with Continuous Breathing Border Effect */}
          <motion.div variants={itemVariants} className="relative group rounded-3xl p-10 bg-white shadow-2xl z-10 overflow-hidden">
            {/* Continuous pulsing gradient in the background corner */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 -top-10 w-40 h-40 bg-brand-light rounded-full z-0"
            />
            
            <Target className="w-16 h-16 text-brand-primary mb-6 relative z-10" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              To preach the unadulterated Word of God to the youth of Mvurwi, winning souls for Jesus Christ, and nurturing them to be faithful disciples who live a holy, righteous, and purposeful life.
            </p>
          </motion.div>

          {/* Vision Card with Continuous Glow */}
          <motion.div variants={itemVariants} className="relative group rounded-3xl p-10 bg-brand-primary text-white shadow-2xl z-10 overflow-hidden border border-yellow-500/30">
            {/* Continuous spinning sunburst effect in the corner */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -left-20 -bottom-20 w-64 h-64 border-[40px] border-dashed border-white/5 rounded-full z-0"
            />
            
            <Flame className="w-16 h-16 text-yellow-400 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-200 text-lg leading-relaxed relative z-10">
              To raise a dynamic, Holy Spirit-filled generation that excels in all areas of life—spiritually, academically, and economically—becoming a beacon of hope and leaders in our community.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WORLDWIDE CONNECTION SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
            
            <motion.div className="w-full md:w-1/2 relative">
                {/* Continuous 3D levitation on the image */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                >
                    <img 
                        src="images/justicemic.jpg" 
                        alt="Global Connection" 
                        className="w-full h-auto"
                    />
                </motion.div>
            </motion.div>

            <motion.div 
                initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}
                className="w-full md:w-1/2"
            >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                    {/* Continuous slow rotation on the globe icon */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        <Globe className="text-yellow-500 w-8 h-8" />
                    </motion.div>
                    <h3 className="text-brand-primary font-bold uppercase tracking-widest">Part of Something Bigger</h3>
                </motion.div>
                
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    A Global Spiritual <br/> <span className="text-brand-primary">Heritage</span>
                </motion.h2>
                
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">
                    ZAOGA FIFMI (Forward in Faith Ministries International) is a global ministry founded by the late Apostle Professor Ezekiel H. Guti. What started under a gum tree in Bindura, Zimbabwe, has spread to over 160 nations worldwide.
                </motion.p>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;