import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Flame, Globe, Sparkles, Music, Camera, HeartHandshake, ShieldCheck } from 'lucide-react';

// --- DATA: DEPARTMENTS ONLY ---
const departmentsData = [
  { name: "Praise & Worship", icon: <Music />, bio: "Leading the youth in explosive, Spirit-filled worship encounters.", image: "/images/worship-dept.jpg" },
  { name: "Bandsman", icon: <Sparkles />, bio: "The heartbeat of our services, playing with excellence and anointing.", image: "/images/bandsman-dept.jpg" },
  { name: "Media & Tech", icon: <Camera />, bio: "Capturing memories and broadcasting the gospel through the digital lens.", image: "/images/media-dept.jpg" },
  { name: "Hosting", icon: <HeartHandshake />, bio: "The first smiles you see. Creating a warm, welcoming environment for all visitors.", image: "/images/hosting-dept.jpg" },
  { name: "Ushering", icon: <ShieldCheck />, bio: "Maintaining order, serving the congregation, and ensuring services run smoothly.", image: "/images/ushering-dept.jpg" },
];

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1], rotate: [0, 45, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]" />
    <motion.div animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-yellow-400/10 rounded-full blur-[120px]" />
  </div>
);

const InfiniteMarquee = () => {
  const marqueeText = "FORWARD IN FAITH • PURITY • PURPOSE • POWER • HOLY SPIRIT • ";
  return (
    <div className="w-full bg-brand-primary border-y border-yellow-500/30 overflow-hidden py-3 relative z-20 flex">
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="flex whitespace-nowrap">
        <span className="text-yellow-400 font-bold tracking-[0.2em] text-sm md:text-base pr-4">{marqueeText.repeat(10)}</span>
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
    <div className="bg-brand-white min-h-screen relative pt-24 md:pt-0">
      <FloatingOrbs />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" alt="Youth Group" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/80 to-brand-white"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="mb-4 text-yellow-400 bg-white/10 p-3 rounded-full backdrop-blur-sm">
                <Sparkles size={32} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Story</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-200 font-light">
                Rooted in the vision of ZAOGA FIFMI, expanding the Kingdom in Mvurwi.
            </motion.p>
        </div>
      </section>

      <InfiniteMarquee />

      {/* --- MISSION & VISION --- */}
      <section className="relative z-20 pt-16 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="relative group rounded-3xl p-10 bg-white shadow-2xl z-10 overflow-hidden">
            <Target className="w-16 h-16 text-brand-primary mb-6 relative z-10" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">To preach the unadulterated Word of God to the youth of Mvurwi, winning souls for Jesus Christ, and nurturing them to be faithful disciples who live a holy, righteous, and purposeful life.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group rounded-3xl p-10 bg-brand-primary text-white shadow-2xl z-10 overflow-hidden border border-yellow-500/30">
            <Flame className="w-16 h-16 text-yellow-400 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
            <p className="text-gray-200 text-lg leading-relaxed relative z-10">To raise a dynamic, Holy Spirit-filled generation that excels in all areas of life—spiritually, academically, and economically—becoming a beacon of hope and leaders in our community.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WORLDWIDE CONNECTION SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <motion.div className="w-full md:w-1/2 relative">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1974&auto=format&fit=crop" alt="Global Connection" className="w-full h-auto" />
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }} className="w-full md:w-1/2">
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Globe className="text-yellow-500 w-8 h-8" /></motion.div>
                    <h3 className="text-brand-primary font-bold uppercase tracking-widest">Part of Something Bigger</h3>
                </motion.div>
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">A Global Spiritual <br/> <span className="text-brand-primary">Heritage</span></motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">ZAOGA FIFMI (Forward in Faith Ministries International) is a global ministry founded by the late Apostle Professor Ezekiel H. Guti. What started under a gum tree in Bindura, Zimbabwe, has spread to over 160 nations worldwide.</motion.p>
            </motion.div>
        </div>
      </section>

      {/* --- DEPARTMENTS SECTION --- */}
      <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-yellow-400 font-bold uppercase tracking-widest mb-2 flex items-center justify-center gap-2"><Target size={20} /> Where We Serve</h2>
            <h3 className="text-4xl font-extrabold text-white mb-4">Ministry Departments</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">It takes a village to run the vision. Meet the teams working behind the scenes and on the frontlines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentsData.map((dept, idx) => (
              <div key={idx} className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-colors h-72">
                <div className="absolute inset-0 z-0">
                  <img src={dept.image} alt={dept.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end transform group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="w-12 h-12 bg-yellow-500 text-brand-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    {dept.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{dept.name}</h4>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dept.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;