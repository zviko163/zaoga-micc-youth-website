import { ArrowRight, Calendar, Heart, Users, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      {/* Uses a gradient overlay so text is always readable, regardless of the photo brightness */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-primary">
        
        {/* Background Image with Purple Overlay */}
        <div className="absolute inset-0 z-0">
            {/* Placeholder image - replace with a real photo of Mvurwi Youth worship/group later */}
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
              alt="Youth Worship" 
              className="w-full h-full object-cover opacity-40"
            />
            {/* Gradient ensures text pops */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/50 text-sm font-semibold tracking-wider mb-4 animate-pulse">
            WELCOME TO ZAOGA FIFMI MVURWI
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Bound by the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Spirit of God
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            A generation of young people on fire for God, rooted in the Word, and ready to impact our community.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-brand-primary font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30 flex items-center">
              Join the Family <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/programs" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 transition-all flex items-center">
              Our Programs <PlayCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS (Floating Cards) */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-brand-secondary hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Fellowship</h3>
                <p className="text-gray-600">
                    Join a community where you belong. We grow stronger when we stand together in faith and friendship.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-primary p-8 rounded-2xl shadow-xl border-b-4 border-yellow-400 hover:-translate-y-2 transition-transform duration-300 text-white transform md:scale-105">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-yellow-300">
                    <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Worship & Word</h3>
                <p className="text-gray-200">
                    Experience deep worship and biblical teaching that equips you for real-life challenges.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-brand-secondary hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                    <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Events</h3>
                <p className="text-gray-600">
                    From youth retreats to music concerts, stay updated with what's happening in Mvurwi.
                </p>
            </div>
        </div>
      </section>

      {/* 3. WELCOME / PASTOR'S CORNER */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                
                {/* Image Grid Effect */}
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    
                    {/* Placeholder for Pastor/Youth Leader Photo */}
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
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Building a Generation of Impact</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The ZAOGA FIFMI Youth Ministry in Mvurwi is more than just a meeting; it's a movement. 
                        We are dedicated to raising young people who are spiritually grounded, socially responsible, 
                        and economically empowered.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you are new to faith or looking for a place to grow, there is a seat for you here.
                    </p>
                    
                    <Link to="/about" className="text-brand-primary font-bold hover:text-brand-secondary inline-flex items-center">
                        Read Our Full Vision <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION STRIP */}
      <section className="py-16 bg-brand-primary text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to move Forward in Faith?</h2>
        <p className="text-brand-light mb-8 max-w-2xl mx-auto text-lg">
            Join our WhatsApp group to stay connected with daily devotionals, updates, and community chats.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors inline-flex items-center">
            Join WhatsApp Group
        </button>
      </section>

    </div>
  );
};

export default Home;