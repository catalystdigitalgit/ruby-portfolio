import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary-light dark:bg-secondary-dark transition-colors duration-300">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;