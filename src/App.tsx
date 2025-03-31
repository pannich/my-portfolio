import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="min-h-screen bg-[#3d3131] text-[#4A5D63]">
      <Navbar />
      <Hero />
      <About id="about"/>
      <Work />
      <Contact id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
