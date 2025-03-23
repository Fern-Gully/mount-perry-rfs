import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DonationOptions from './components/DonationOptions';
import About from './components/About';
import Footer from './components/Footer';
import ThankYou from './pages/ThankYou';
import * as ThankYouModule from './pages/ThankYou';
console.log("🧠 ThankYou module:", ThankYouModule);
function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800 scroll-smooth">
        <Navbar />
        <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DonationOptions />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<ThankYou />} /> {/* ✅ Moved here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
