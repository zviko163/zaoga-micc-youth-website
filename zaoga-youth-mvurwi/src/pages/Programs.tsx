import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Mic2, Globe2, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Link } from 'react-router-dom';

// --- MAGIC AUTO-FETCHERS ---
// 1. Sports (soccer)
const soccerImageModules = import.meta.glob('/public/images/soccer*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true, as: 'url' });
const soccerImages = Object.values(soccerImageModules) as string[];

// 2. Praise & Worship
const praiseImageModules = import.meta.glob('/public/images/praise*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true, as: 'url' });
const praiseImages = Object.values(praiseImageModules) as string[];

// 3. Evangelism & Missions
const evangelismImageModules = import.meta.glob('/public/images/evangelism*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true, as: 'url' });
const evangelismImages = Object.values(evangelismImageModules) as string[];

// 4. Community & Fellowship
const fellowshipImageModules = import.meta.glob('/public/images/fellowship*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true, as: 'url' });
const fellowshipImages = Object.values(fellowshipImageModules) as string[];

// --- PROGRAM DATA ---
const programsData = [
  {
    id: 1,
    title: "Sports & Recreation",
    subtitle: "Sunday Matchdays",
    description: "Faith and fitness go hand in hand! After an explosive Sunday service, we hit the field. Join our MICC Youth football team as we clash in friendly, highly-spirited matches against local teams like Golly's and Megasave. It's all about teamwork, health, and representing Christ on the pitch.",
    icon: <Trophy size={28} />,
    image: "https://images.unsplash.com/photo-1518605368461-1ee711683b8b?q=80&w=2070&auto=format&fit=crop", 
    color: "text-blue-500",
    bgIcon: "bg-blue-100",
    sliderImages: soccerImages // Maps to the soccer folder
  },
  {
    id: 2,
    title: "Praise, Worship & Arts",
    subtitle: "Youth Choir & Contemporary Bands",
    description: "Ministering through music is at the heart of our youth. Whether you have a voice for the Youth Choir or play instruments for our contemporary bands, there is a place for your talent here. We lead explosive worship sessions and create an atmosphere for the Holy Spirit to move.",
    icon: <Mic2 size={28} />,
    image: "https://images.unsplash.com/photo-1516280440502-85f54316b1f4?q=80&w=2070&auto=format&fit=crop", 
    color: "text-yellow-500",
    bgIcon: "bg-yellow-100",
    sliderImages: praiseImages // Maps to the praise folder
  },
  {
    id: 3,
    title: "Evangelism & Missions",
    subtitle: "Crusades & District Outreaches",
    description: "Taking the Gospel outside the four walls of the church. We regularly organize youth crusades and embark on outreach missions to other districts. We believe in the great commission, preaching the unadulterated word, and experiencing powerful fellowship with other believers across the region.",
    icon: <Globe2 size={28} />,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    color: "text-brand-primary",
    bgIcon: "bg-brand-light",
    sliderImages: evangelismImages // Maps to the evangelism folder
  },
  {
    id: 4,
    title: "Community & Fellowship",
    subtitle: "Food, Fun & Faith",
    description: "We are a family. Beyond the spiritual teachings, we host local fellowship gatherings where we simply do life together. Expect great conversations, laughter, and of course, plenty of food and drinks! It's the perfect environment to build lasting, godly friendships.",
    icon: <UtensilsCrossed size={28} />,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    color: "text-green-500",
    bgIcon: "bg-green-100",
    sliderImages: fellowshipImages // Maps to the fellowship folder
  }
];

// --- CUSTOM CONTINUOUS SLIDESHOW COMPONENT ---
const ImageSlider = ({ images, fallback }: { images: string[], fallback: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; 
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    
    return () => clearInterval(timer);
  }, [images]);

  const displayImages = images.length > 0 ? images : [fallback];

  return (
    <div className="relative z-10 w-full h-[300px] md:h-[400px] rounded-3xl shadow-2xl border-4 border-white overflow-hidden bg-gray-200">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={displayImages[currentIndex]}
          alt="Ministry Activity"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const Programs = () => {
  return (
    <div className="bg-brand-white min-h-screen pt-36 pb-20 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full mb-4 text-brand-primary"
        >
            <Trophy size={24} className="mr-2" /> 
            <Mic2 size={24} className="mr-2" />
            <Globe2 size={24} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-6 tracking-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Ministries</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          From the football pitch to the altar, we believe in serving God with every talent He has given us. Discover where you belong in the MICC Youth family.
        </motion.p>
      </div>

      {/* --- ALTERNATING PROGRAMS LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {programsData.map((program, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={program.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
              
              {/* Image Side */}
              <FadeIn direction={isEven ? 'right' : 'left'} className="w-full md:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-yellow-400/20 rounded-3xl transform ${isEven ? 'rotate-3' : '-rotate-3'} group-hover:rotate-0 transition-transform duration-500`}></div>
                
                {/* Cleanly calls the ImageSlider and passes the specific array for this program */}
                <ImageSlider images={program.sliderImages} fallback={program.image} />
              </FadeIn>

              {/* Text Side */}
              <FadeIn direction={isEven ? 'left' : 'right'} className="w-full md:w-1/2 flex flex-col justify-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${program.bgIcon} ${program.color} shadow-sm`}>
                  {program.icon}
                </div>
                
                <h3 className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2">{program.subtitle}</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{program.title}</h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {program.description}
                </p>

                <button className="flex items-center text-brand-primary font-bold hover:text-yellow-500 transition-colors w-max group">
                  Join this department <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </FadeIn>

            </div>
          );
        })}
      </div>

      {/* --- BOTTOM CALL TO ACTION --- */}
      <div className="max-w-4xl mx-auto px-4 mt-32">
        <FadeIn direction="up" className="bg-brand-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-yellow-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Have a different talent?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                Whether you are into tech, media, ushering, or organizing events, there is room for your gift to make room for you. Let us know how you want to serve!
            </p>
            <Link to="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 text-brand-primary font-bold bg-yellow-500 hover:bg-yellow-400 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                Contact Us to Serve
            </Link>
        </FadeIn>
      </div>

    </div>
  );
};

export default Programs;