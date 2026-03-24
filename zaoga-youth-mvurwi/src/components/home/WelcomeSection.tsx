import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
              
              {/* Image Grid Effect */}
              <div className="w-full md:w-1/2 relative">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  
                  <img 
                      src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2070&auto=format&fit=crop" 
                      alt="Youth Leaders" 
                      className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[400px]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 border-l-4 border-brand-primary">
                      <p className="font-serif italic text-gray-600">"Remember your Creator..."</p>
                      <p className="text-sm font-bold text-brand-primary">— Ecclesiastes 12:1</p>
                  </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                  <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-2">Who We Are</h2>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Letting Youth Lead</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      The ZAOGA FIFMI Youth Ministry at MICC, we walk in the visionary's footsteps, Ezekiel H. Guti.
                      We are dedicated to raising young people who are spiritually grounded, socially responsible, 
                      and economically empowered.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      We continue to practice the legacy. There is a seat for you here.
                  </p>
                  
                  <Link to="/about" className="text-brand-primary font-bold hover:text-brand-secondary inline-flex items-center">
                      Read Our Full Vision <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </div>
          </div>
      </div>
    </section>
  );
};

export default WelcomeSection;