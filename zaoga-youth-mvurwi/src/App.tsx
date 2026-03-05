import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/layout/Footer';
import Gallery from './pages/Gallery';
import Programs from './pages/Programs';
import Events from './pages/Events';
import WhoWeAre from './pages/WhoAreWe';

function App() {
  return (
    <Router>
      {/* The main wrapper for the whole site */}
      <div className="flex flex-col min-h-screen bg-brand-white selection:bg-yellow-300 selection:text-brand-primary">
        
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* The <main> tag is where the pages swap out based on the URL */}
        <main className="flex-grow">
          <Routes>
            {/* The actual pages we have built */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/programs" element={<Programs />} />
            <Route 
              path="/events" 
              element={<Events />} 
            />
            <Route 
              path="/contact" 
              element={<div className="flex items-center justify-center h-screen text-2xl font-bold text-brand-primary">Contact Page Coming Soon...</div>} 
            />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;