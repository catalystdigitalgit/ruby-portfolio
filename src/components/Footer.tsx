import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Let's Create Something Amazing</h3>
            <p className="text-slate-400">
              Ready to bring your ideas to life? Let's start a conversation.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Get In Touch
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p className="mb-4 md:mb-0">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;