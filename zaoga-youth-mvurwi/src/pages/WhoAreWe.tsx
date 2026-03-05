import { motion } from 'framer-motion';
import { Users, Shield, Crown, Star } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';

// --- LEADERSHIP DATA ---
const pastors = [
  { role: "District Pastors", name: "Pastor & Mrs. Muzereni", image: "/images/pastors.jpg", bio: "Spiritual parents overseeing the entire MICC District." }
];

const advisers = [
  { role: "Youth Advisers", name: "Mr. & Mrs. [Name]", image: "/images/advisers.jpg", bio: "Mentoring and guiding the youth board in executing the vision." }
];

const executiveBoard = [
  { role: "Chairman", name: "Brother Carlton", image: "/images/chairman.jpg" },
  { role: "Vice Chairman", name: "Brother [Name]", image: "/images/vice-chair.jpg" },
  { role: "Secretary", name: "Sister [Name]", image: "/images/secretary.jpg" }
];

const committee = [
  { role: "Committee Member", name: "Brother [Name]", image: "/images/committee1.jpg" },
  { role: "Committee Member", name: "Sister [Name]", image: "/images/committee2.jpg" },
  { role: "Committee Member", name: "Brother [Name]", image: "/images/committee3.jpg" }
];

const WhoWeAre = () => {
  return (
    <div className="bg-brand-white min-h-screen pt-36 pb-20 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full mb-4 text-brand-primary"
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
          className="text-lg text-gray-600 max-w-2xl mx-auto"
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
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-yellow-400 shadow-inner">
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900">{leader.name}</h3>
                    <p className="text-brand-primary font-bold text-sm mb-3">{leader.role}</p>
                    <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
            ))}
        </FadeIn>

        {/* Vertical Connector Line */}
        <div className="w-1 h-12 bg-gray-300 mx-auto opacity-50"></div>

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

        {/* Vertical Connector Line */}
        <div className="w-1 h-16 bg-brand-primary/20 mx-auto"></div>

        {/* 3. YOUTH BOARD (Executive & Committee boxed together) */}
        <FadeIn direction="up" delay={0.4} className="bg-brand-light/40 rounded-3xl p-8 md:p-12 border border-brand-primary/10 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                <Star size={16} className="text-yellow-400" /> Youth Leadership Board
            </div>

            {/* Executive Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-6">
                {executiveBoard.map((leader, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-primary text-center transform hover:-translate-y-1 transition-transform">
                        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden shadow-sm">
                            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{leader.name}</h4>
                        <p className="text-brand-primary font-semibold text-sm">{leader.role}</p>
                    </div>
                ))}
            </div>

            {/* Divider within the board */}
            <div className="w-full h-px bg-brand-primary/10 mb-10"></div>

            {/* Committee Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {committee.map((leader, idx) => (
                    <div key={idx} className="bg-white/60 p-5 rounded-2xl text-center border border-white hover:bg-white transition-colors shadow-sm">
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