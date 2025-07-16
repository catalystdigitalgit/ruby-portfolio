import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const backgroundImage = isDarkMode 
    ? 'url(/images/landing-dark-mode.svg)' 
    : 'url(/images/landing-light-mode.svg)';

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-bottom bg-no-repeat transition-all duration-300" 
      style={{backgroundImage}}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 -mt-48">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
            <span className="inline-block animate-wave hover:animate-wave-hover origin-bottom-right cursor-pointer">👋🏻</span>&nbsp;
             Hi, I'm&nbsp;
              <span className="bg-gradient-to-r from-gradient-from-light dark:from-gradient-from-dark via-gradient-via-light dark:via-gradient-via-dark to-gradient-to-light dark:to-gradient-to-dark bg-clip-text text-transparent">Ruby</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-3xl mx-auto">
            I'm a highly motivated frontend engineer with a strong product mindset and deep care for empathetic design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay">
            <button className="group bg-gradient-to-r from-accent-light dark:from-accent-dark to-accent-dark-light dark:to-accent-dark-dark text-white px-8 py-4 rounded-full font-medium hover:from-accent-dark-light dark:hover:from-accent-dark-dark hover:to-accent-light dark:hover:to-accent-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark px-8 py-4 rounded-full font-medium hover:border-accent-dark-light dark:hover:border-accent-dark-dark hover:text-accent-dark-light dark:hover:text-accent-dark-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;