import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, CheckCircle2, Star } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';

// --- 2026 ZAOGA FIFMI YOUTH CALENDAR DATA ---
const upcomingEvents = [
  {
    id: 1,
    date: "April 2 - 5, 2026",
    title: "National Easter Conference",
    location: "MICC Main Church, Mvurwi",
    description: "The biggest local Youth gathering of the year. Join thousands of believers as we commemorate the death and resurrection of Jesus Christ with teachings, deliverance, and worship.",
    tag: "Major Conference",
    color: "bg-brand-primary"
  },
  {
    id: 2,
    date: "May 18 - 23, 2026",
    title: "National Youth Council & Advisors Seminar",
    location: "AMFCC, Harare",
    description: "A crucial time of equipping for all youth leaders, committee members, and advisors to catch the vision for the year and strategize for local district growth.",
    tag: "Leadership",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    date: "July - August, 2026",
    title: "Zonal Seminar (Zone 25)",
    location: "Zone 25, Venue TBA",
    description: "A time of catching up on the doctrine, practicing the legacy of preaching Jesus Christ. MICC, GLMC, Living Waters, Flying City, GJ and Shilo, Kaizen, Centenary, St Albert's, Mahuhwe, Mushumbi, MLMC",
    tag: "Major Conference",
    color: "bg-green-500"
  },
  {
    id: 4,
    date: "December 31, 2026",
    title: "Crossover Night Service",
    location: "MICC Main Church, Mvurwi",
    description: "We transition into the new year in the presence of God. Receive the 2027 theme and prophetic word to launch you into the next season.",
    tag: "Special Service",
    color: "bg-blue-500"
  },
    {
    id: 5,
    date: "TBD",
    title: "Get Togethers and Fellowships",
    location: "MICC Main Church, Mvurwi",
    description: "Throughout the year, we will have local district get-togethers to build fellowship and unity among the youth. Dates and locations will be announced as we approach each event.",
    tag: "Fellowship",
    color: "bg-purple-500"
  }
];

const completedEvents = [
  {
    id: 5,
    date: "January 1 - 10, 2026",
    title: "Ten Days of Prayer & Fasting",
    description: "We kicked off the year seeking God's face, laying a strong spiritual foundation for the year 2026."
  },
  {
    id: 6,
    date: "February 2026",
    title: "Field Trips & District Outreaches",
    description: "Taking the gospel to the streets and bonding as a youth ministry before the Easter rush."
  }
];

const Events = () => {
  return (
    <div className="bg-brand-white min-h-screen pt-36 pb-20 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-yellow-500/20 rounded-full mb-4 text-yellow-600"
        >
            <CalendarIcon size={32} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-6 tracking-tight"
        >
          Mark Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Calendars</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Let's keep you in the loop and updated with everything happening in our Youth Ministry this year.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- UPCOMING EVENTS TIMELINE --- */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
                <Star className="text-yellow-500 mr-3" /> Upcoming in 2026
            </h2>
            
            <div className="relative border-l-4 border-yellow-400/30 ml-4 md:ml-0 md:border-l-0">
                {/* Desktop Center Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400/30 -translate-x-1/2"></div>

                {upcomingEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                        <FadeIn key={event.id} direction="up" delay={index * 0.1} className="mb-12 relative w-full md:flex md:justify-between md:items-center">
                            
                            {/* Timeline Node (The dot on the line) */}
                            <div className="absolute -left-[22px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-brand-white border-4 border-yellow-500 flex items-center justify-center z-10 shadow-lg">
                                <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                            </div>

                            {/* Content Card */}
                            <div className={`ml-8 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:order-last md:text-left'}`}>
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-yellow-400 transition-all group relative overflow-hidden">
                                    {/* Hover Glow */}
                                    <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-2 h-full ${event.color} opacity-80`}></div>
                                    
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${event.color} text-white`}>
                                        {event.tag}
                                    </span>
                                    
                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">{event.title}</h3>
                                    <p className="text-yellow-600 font-semibold text-sm mb-4 flex items-center justify-start md:justify-normal">
                                        <CalendarIcon size={14} className="mr-2" /> {event.date}
                                    </p>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {event.description}
                                    </p>
                                    
                                    <div className={`flex items-center text-sm font-medium text-gray-500 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <MapPin size={16} className="mr-1 text-brand-primary" /> {event.location}
                                    </div>
                                </div>
                            </div>

                            {/* Empty spacer for the other side of the timeline on desktop */}
                            <div className="hidden md:block md:w-[45%]"></div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>

        {/* --- COMPLETED EVENTS SECTION --- */}
        <div>
            <h2 className="text-2xl font-bold text-gray-400 mb-8 flex items-center border-t border-gray-200 pt-10">
                <CheckCircle2 className="mr-3" /> Completed This Year
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedEvents.map((event, index) => (
                    <FadeIn key={event.id} direction="up" delay={index * 0.1} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
                        <p className="text-sm font-bold text-gray-400 mb-1">{event.date}</p>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">{event.title}</h3>
                        <p className="text-gray-500 text-sm">{event.description}</p>
                    </FadeIn>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Events;