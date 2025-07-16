import React from 'react';
import { Coffee, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a front-end developer who believes that great design and clean code 
                go hand in hand. With a background in both visual design and technical 
                development, I bridge the gap between beautiful interfaces and seamless 
                user experiences.
              </p>
              <p>
                My journey started with a fascination for how websites could tell stories 
                and create emotional connections. This led me to specialize in marketing 
                sites where conversion meets creativity, custom dashboards that make 
                complex data accessible, and Shopify stores that turn browsers into buyers.
              </p>
              <p>
                When I'm not coding, you'll find me exploring design trends, contributing 
                to open-source projects, or mentoring junior developers. I believe in the 
                power of continuous learning and the importance of building inclusive, 
                accessible web experiences.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-sm text-slate-600">Remote / Global</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Experience</p>
                  <p className="text-sm text-slate-600">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Coffee size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Approach</p>
                  <p className="text-sm text-slate-600">User-Centered</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:text-center">
            <div className="relative inline-block">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <div className="w-72 h-72 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-400 text-lg font-medium">Your Photo Here</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"></div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <p className="text-slate-600 italic mb-4">
                "The best interface is the one that gets out of the way and lets 
                users accomplish their goals effortlessly."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-medium text-slate-900">Your Name</p>
                  <p className="text-sm text-slate-600">Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;