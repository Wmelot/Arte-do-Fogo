
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
    <div className="font-sans text-brand-white bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-brand-black">
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
