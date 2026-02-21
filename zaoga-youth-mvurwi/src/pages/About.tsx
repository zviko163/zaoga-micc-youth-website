import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Flame, Globe } from 'lucide-react';

const About = () => {
  // 1. Parallax Scroll Setup
  const { scrollY } = useScroll();
  // As user scrolls from 0 to 500px, move the background image down by 150px
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  // Fade out the hero text as you scroll down
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 2. Staggered Animation Variants for the Cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child by 0.2s
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: 'spring', stiffness: 100, damping: 15 } 
    },
  };

  return (
    <div className="bg-brand-white min-h-screen overflow-hidden">
      
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
            alt="Youth Group" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-primary/90 to-brand-white"></div>
        </motion.div>

        {/* Animated Text */}
        <motion.div 
            style={{ opacity: textOpacity }}
            className="relative z-10 text-center px-4 max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl"
          >
            Our <span className="text-yellow-400">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-200 font-light"
          >
            Rooted in the vision of ZAOGA FIFMI, expanding the Kingdom in Mvurwi.
          </motion.p>
        </motion.div>
      </section>

      {/* --- MISSION & VISION (STAGGERED CARDS) --- */}
      <section className="relative z-20 -mt-20 px-4 pb-20 max-w-7xl mx-auto">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-brand-secondary relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-light rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            <Target className="w-16 h-16 text-brand-primary mb-6 relative z-10" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              To preach the unadulterated Word of God to the youth of Mvurwi, winning souls for Jesus Christ, and nurturing them to be faithful disciples who live a holy, righteous, and purposeful life.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-brand-primary rounded-3xl p-10 shadow-2xl border-t-4 border-yellow-400 relative overflow-hidden group text-white">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            <Flame className="w-16 h-16 text-yellow-400 mb-6 relative z-10" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-200 text-lg leading-relaxed relative z-10">
              To raise a dynamic, Holy Spirit-filled generation that excels in all areas of life—spiritually, academically, and economically—becoming a beacon of hope and leaders in our community.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WORLDWIDE CONNECTION SECTION --- */}
      <section className="py-24 bg-brand-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
            
            {/* Sliding Image */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.2, duration: 1.5 }}
                className="w-full md:w-1/2 relative"
            >
                {/* 3D-like floating image wrapper */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(91,44,132,0.3)] border-4 border-white"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1974&auto=format&fit=crop" 
                        alt="Global Connection" 
                        className="w-full h-auto"
                    />
                </motion.div>
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-light rounded-full mix-blend-multiply blur-3xl -z-10"></div>
            </motion.div>

            {/* Staggered Text Reveal */}
            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={containerVariants}
                className="w-full md:w-1/2"
            >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                    <Globe className="text-yellow-500 w-8 h-8" />
                    <h3 className="text-brand-primary font-bold uppercase tracking-widest">Part of Something Bigger</h3>
                </motion.div>
                
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    A Global Spiritual <br/> <span className="text-brand-primary">Heritage</span>
                </motion.h2>
                
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">
                    ZAOGA FIFMI (Forward in Faith Ministries International) is a global ministry founded by the late Apostle Professor Ezekiel H. Guti. What started under a gum tree in Bindura, Zimbabwe, has spread to over 160 nations worldwide.
                </motion.p>
                
                <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed border-l-4 border-yellow-500 pl-4 bg-brand-light/30 py-2">
                    As the youth of Mvurwi, we carry this same DNA. We are bound by the Spirit of God to continue this legacy, preaching the gospel of Jesus Christ with power and demonstration.
                </motion.p>
            </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;