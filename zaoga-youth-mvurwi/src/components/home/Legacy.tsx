import { ShieldCheck, Zap, Briefcase } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const Legacy = () => {
  return (
    <section className="py-24 bg-brand-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-2">Youth For The Nations</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Carrying the Vision Forward</h3>
          <p className="text-lg text-gray-600">
            Rooted in the teachings of our father, Archbishop Dr. Ezekiel H. Guti, we are a generation 
            that balances spiritual fire with practical excellence. "Failure to pray is failure in life."
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Purity */}
          <FadeIn delay={0.2} direction="up" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-400 transition-colors group">
            <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Purity & Holiness</h4>
            <p className="text-gray-600">
              We believe in living a sanctified life. In a world of compromises, we choose to stand out as 
              vessels of honor, keeping ourselves pure for God's use.
            </p>
          </FadeIn>

          {/* Pillar 2: Power */}
          <FadeIn delay={0.4} direction="up" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-400 transition-colors group">
            <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Power in Prayer</h4>
            <p className="text-gray-600">
              Prayer is our lifestyle. We are a Holy Spirit-filled youth that understands the importance 
              of intercession, fasting, and seeking the face of God daily.
            </p>
          </FadeIn>

          {/* Pillar 3: Purpose */}
          <FadeIn delay={0.6} direction="up" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-400 transition-colors group">
            <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <Briefcase size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Talents & Excellence</h4>
            <p className="text-gray-600">
              "Work with your hands." We empower young people to discover their God-given talents, 
              excel academically, and become leaders in the corporate world.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Legacy;