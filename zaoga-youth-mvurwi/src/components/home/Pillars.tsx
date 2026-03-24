import { Calendar, Heart, Users } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const Pillars = () => {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <FadeIn delay={0.2} direction="up">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-brand-secondary h-full">
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Fellowship</h3>
                <p className="text-gray-600">In ZAOGA FIFMI at MICC, you belong. We grow stronger when we stand together in faith.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="bg-brand-primary p-8 rounded-2xl shadow-xl border-b-4 border-yellow-400 text-white transform md:scale-105 h-full">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-yellow-300">
                    <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Worship & Word</h3>
                <p className="text-gray-200">Experience deep worship and biblical teaching that equips you for real-life challenges.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-brand-secondary h-full">
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Events</h3>
                <p className="text-gray-600">Youth retreats, services, fellowships,stay updated with what's happening at MICC.</p>
            </div>
          </FadeIn>

      </div>
    </section>
  );
};

export default Pillars;