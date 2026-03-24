// import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const WeeklyGatherings = () => {
  return (
    <section className="py-20 bg-brand-primary text-white relative">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Join Us This Week</h2>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">
            Don't walk this journey of faith alone. Become part of a vibrant family of believers in Mvurwi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Saturdays Service Card */}
          <FadeIn direction="right" className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-yellow-400">Youth Fellowship</h3>
              <span className="bg-yellow-500 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Saturdays</span>
            </div>
            <p className="text-gray-200 mb-6">
              Our main youth gathering. Expect explosive praise and worship, deeply relevant teachings, and time to connect with friends.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" /> 5:30 PM - 7:30 PM
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" /> ZAOGA FIFMI Mvurwi Center
              </div>
            </div>
          </FadeIn>

          {/* Sunday Service Card */}
          <FadeIn direction="left" delay={0.2} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-yellow-400">Big Sunday Service</h3>
              <span className="bg-yellow-500 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Sundays</span>
            </div>
            <p className="text-gray-200 mb-6">
              Join the entire church family for our main Sunday worship experience. A time of corporate anointing and encountering God.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" /> 9:00 AM - 1:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" /> ZAOGA FIFMI Mvurwi Center
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Find the ministry you wish to serve in */}
        <FadeIn direction="up" delay={0.4} className="mt-8 bg-black/20 rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden group">
            {/* Subtle background animated glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-secondary/30 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Text Side */}
                <div className="text-center lg:text-left max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Find Your Place to Serve</h3>
                    <p className="text-gray-300 text-lg">
                        God has given every young person a unique talent. Don't just be a spectator—discover your gifts, join a department, and make a Kingdom impact!
                    </p>
                </div>

                {/* Interactive Department Tags */}
                <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
                    <span className="px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-sm font-medium text-gray-200 hover:bg-yellow-500 hover:text-brand-primary hover:border-yellow-500 hover:scale-105 cursor-pointer transition-all shadow-sm">
                        🎤 Praise & Worship
                    </span>
                    <span className="px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-sm font-medium text-gray-200 hover:bg-yellow-500 hover:text-brand-primary hover:border-yellow-500 hover:scale-105 cursor-pointer transition-all shadow-sm">
                        💻 Media & Tech
                    </span>
                    <span className="px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-sm font-medium text-gray-200 hover:bg-yellow-500 hover:text-brand-primary hover:border-yellow-500 hover:scale-105 cursor-pointer transition-all shadow-sm">
                        🌍 Evangelism
                    </span>
                    <span className="px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-sm font-medium text-gray-200 hover:bg-yellow-500 hover:text-brand-primary hover:border-yellow-500 hover:scale-105 cursor-pointer transition-all shadow-sm">
                        🤝 Ushers & Hospitality
                    </span>
                </div>

            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default WeeklyGatherings;