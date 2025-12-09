
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Gallery from './components/Gallery';
import BasicMenu from './components/BasicMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-white bg-brand-black min-h-screen relative selection:bg-brand-orange selection:text-white">
      {/* Global Watermark */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img src="/img/logo-vector.png" alt="" className="w-[800px] max-w-[90vw] object-contain invert grayscale animate-pulse-slow" />
      </div>

      <Navbar />
      <Hero />
      <div className="relative z-10 bg-brand-black/90">
        <About />
        <Services />
        <Events />
        <Gallery />
        <BasicMenu />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
