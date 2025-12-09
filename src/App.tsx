import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
