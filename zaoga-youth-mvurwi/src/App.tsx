import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer';
import Home from './pages/Home';
// Import other pages as you create them...

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add placeholders for now */}
            <Route path="/about" element={<div className="p-10">About Page</div>} />
            <Route path="/programs" element={<div className="p-10">Programs Page</div>} />
            <Route path="/events" element={<div className="p-10">Events Page</div>} />
            <Route path="/gallery" element={<div className="p-10">Gallery Page</div>} />
            <Route path="/contact" element={<div className="p-10">Contact Page</div>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;