import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  return (
    <div className="min-h-screen bg-app-gradient dark:bg-app-gradient-dark transition-colors duration-300">
      <Header />
      <Hero />
      {/* <Skills />
      <About />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;