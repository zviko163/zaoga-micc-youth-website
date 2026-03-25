import { motion } from 'framer-motion';
import { Users, Shield, Crown, Star, MoveRight } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';

// --- LEADERSHIP DATA ---
const pastors = [
  { role: "District Pastors", name: "Pastor & Mrs. Muzereni", image: "/images/pastors.jpg", bio: "Spiritual parents overseeing the entire Mvurwi District." }
];

const advisers = [
  { role: "Youth Advisers", name: "Mr. & Mrs. Shikisha", image: "/images/advisers.jpeg", bio: "Mentoring and guiding the youth board in executing the vision." }
];

const executiveBoard = [
  { role: "Chairman", name: "Brother Carlton", image: "/images/board_checks.jpeg" },
  { role: "Vice Chairman", name: "Brother [Name]", image: "/images/vice-chair.jpeg" },
  { role: "Secretary", name: "Sister Getrude", image: "/images/board_getty.jpeg" }
];

const committee = [
  { role: "Committee Member", name: "Brother Sylvester", image: "/images/board_committee1.jpeg" },
  { role: "Committee Member", name: "Sister [Name]", image: "/images/board_committee2.jpeg" },
  { role: "Committee Member", name: "Brother [Name]", image: "/images/board_committee3.jpeg" }
];

const WhoWeAre = () => {
  return (
    <div className="bg-brand-white min-h-screen pt-36 pb-20 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full mb-4 text-brand-primary shadow-inner"
        >
            <Users size={28} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6"
        >
          Who We <span className="text-yellow-500">Are</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto px-4"
        >
          Meet the dedicated men and women appointed to lead, guide, and serve the MICC Youth Ministry in Mvurwi District.
        </motion.p>
      </div>

      {/* --- ORGANIZATIONAL HIERARCHY --- */}
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* 1. DISTRICT PASTORS */}
        <FadeIn direction="up" className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-brand-primary font-bold tracking-widest uppercase mb-4">
                <Crown size={18} className="text-yellow-500" /> District Oversight
            </div>
            {pastors.map((leader, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-2xl border-b-8 border-yellow-500 text-center max-w-sm w-full relative z-10 transform hover:-translate-y-2 transition-transform">
                    {/* Pulsing ring for the senior pastors */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-yellow-400 shadow-inner z-10">
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900">{leader.name}</h3>
                    <p className="text-brand-primary font-bold text-sm mb-3">{leader.role}</p>
                    <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
            ))}
        </FadeIn>

        {/* Stylized Vertical Connector */}
        <div className="w-1 h-12 border-l-4 border-dotted border-gray-300 mx-auto my-2"></div>

        {/* 2. YOUTH ADVISERS */}
        <FadeIn direction="up" delay={0.2} className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-gray-500 font-bold tracking-widest uppercase mb-4">
                <Shield size={18} /> Advisory Board
            </div>
            {advisers.map((leader, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl border-b-4 border-gray-400 text-center max-w-sm w-full relative z-10 transform hover:-translate-y-2 transition-transform">
                    <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-gray-200">
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-gray-600 font-bold text-sm mb-2">{leader.role}</p>
                    <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
            ))}
        </FadeIn>

        {/* Stylized Vertical Connector */}
        <div className="w-1 h-16 border-l-4 border-dotted border-brand-primary/30 mx-auto my-2"></div>

        {/* 3. YOUTH BOARD (Executive & Committee) */}
        <FadeIn direction="up" delay={0.4} className="bg-brand-light/40 rounded-3xl p-6 md:p-12 border border-brand-primary/10 relative mt-4">
            
            {/* FIX: Wrapped the texture in its own hidden container so it doesn't bleed out of the rounded corners */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
            </div>

            {/* The Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 w-max text-xs md:text-sm z-20">
                <Star size={16} className="text-yellow-400" /> Youth Leadership Board
            </div>

            {/* Mobile Swipe Indicator (Only shows on phones) */}
            {/* FIX: Added mt-8 to push this down away from the badge */}
            <div className="md:hidden flex items-center justify-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest mt-8 mb-2 opacity-70 animate-pulse relative z-10">
                Swipe to view team <MoveRight size={14} />
            </div>

            {/* Executive Team - MOBILE SNAP CAROUSEL */}
            {/* FIX: Added md:mt-8 to push the desktop grid down away from the badge */}
            <div className="flex overflow-x-auto pb-8 pt-4 -mx-6 px-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 md:mt-8 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {executiveBoard.map((leader, idx) => (
                    <div key={idx} className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0 mr-4 md:mr-0 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-primary text-center transform md:hover:-translate-y-1 transition-transform relative z-10">
                        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden shadow-sm">
                            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{leader.name}</h4>
                        <p className="text-brand-primary font-semibold text-sm">{leader.role}</p>
                    </div>
                ))}
            </div>

            {/* Divider within the board */}
            <div className="w-full h-px bg-brand-primary/10 mb-8 relative z-10"></div>

            {/* Committee Members - MOBILE SNAP CAROUSEL */}
            <div className="flex overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 md:m-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {committee.map((leader, idx) => (
                    <div key={idx} className="min-w-[70vw] sm:min-w-[200px] md:min-w-0 snap-center shrink-0 mr-4 md:mr-0 bg-white/60 p-5 rounded-2xl text-center border border-white hover:bg-white transition-colors shadow-sm relative z-10">
                        <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3 overflow-hidden">
                            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-gray-800">{leader.name}</h4>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1">{leader.role}</p>
                    </div>
                ))}
            </div>
            
        </FadeIn>

      </div>
    </div>
  );
};

export default WhoWeAre;