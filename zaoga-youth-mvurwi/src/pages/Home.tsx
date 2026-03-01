import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';
import WelcomeSection from '../components/home/WelcomeSection';
import WeeklyGatherings from '../components/home/WeeklyGatherings';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Pillars />
      <WelcomeSection />
      <WeeklyGatherings />
    </div>
  );
};

export default Home;