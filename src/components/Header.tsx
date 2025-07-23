import { useState, useEffect } from 'react';
import Typography from './Typography';
import Icon from './Icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'backdrop-blur-md shadow-sm bg-secondary/75'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="transition-colors duration-200"
          >
            <Typography variant="subheading" emphasis="high">
              Ruby Doyle
            </Typography>
          </button>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              {['Timeline', 'Toolbelt', 'Work'].map(item => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === 'Timeline'
                        ? 'about'
                        : item === 'Toolbelt'
                          ? 'skills'
                          : 'work'
                    )
                  }
                  className="text-primary/70 hover:text-primary transition-colors duration-200"
                >
                  <Typography variant="body" emphasis="medium">
                    {item}
                  </Typography>
                </button>
              ))}
            </nav>

            <button
              onClick={toggleDarkMode}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 border border-neutral/50 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-indigo-900 to-purple-900'
                  : 'bg-gradient-to-r from-sky-300 to-blue-400'
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isDarkMode ? 'translate-x-8' : 'translate-x-1'
                }`}
              >
                {isDarkMode ? <span>🌝</span> : <span>🌞</span>}
              </div>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary/70 hover:text-primary transition-colors"
            >
              <Icon name={isMenuOpen ? 'x' : 'menu'} size="lg" />
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-neutral/20">
          <div className="flex flex-col space-y-3 py-4 px-6">
            {['Timeline', 'Toolbelt', 'Work'].map(item => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item === 'Timeline'
                      ? 'about'
                      : item === 'Toolbelt'
                        ? 'skills'
                        : 'work'
                  )
                }
                className="transition-all duration-200 text-left rounded-xl p-3 hover:bg-feature/5 active:bg-feature/15 hover:text-stone-900 dark:hover:text-stone-100 hover:scale-102"
              >
                <Typography variant="body" emphasis="high">
                  {item}
                </Typography>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
