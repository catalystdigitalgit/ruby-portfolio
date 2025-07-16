import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="text-blue-600">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Front-end developer specializing in marketing sites, custom dashboards, 
              and Shopify stores. I blend technical expertise with storytelling to create 
              engaging user experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay">
            <button className="group bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-full font-medium hover:border-slate-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
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