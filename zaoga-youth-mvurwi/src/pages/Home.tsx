import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';
import WelcomeSection from '../components/home/WelcomeSection';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Pillars />
      <WelcomeSection />
      <CallToAction />
    </div>
  );
};

export default Home;