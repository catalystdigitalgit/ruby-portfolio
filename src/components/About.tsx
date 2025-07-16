import React from 'react';
import { Coffee, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
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
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Location</p>
                  <p className="text-sm text-text-secondary">Remote / Global</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-success" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Experience</p>
                  <p className="text-sm text-text-secondary">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                  <Coffee size={20} className="text-warning" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Approach</p>
                  <p className="text-sm text-text-secondary">User-Centered</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:text-center">
            <div className="relative inline-block">
              <div className="w-80 h-80 bg-gradient-to-br from-gradient-from to-gradient-to rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <div className="w-72 h-72 bg-surface-elevated rounded-2xl flex items-center justify-center">
                  <span className="text-text-muted text-lg font-medium">Your Photo Here</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-warning rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success rounded-full"></div>
            </div>
            
            <div className="mt-8 p-6 bg-surface-primary rounded-xl shadow-sm">
              <p className="text-text-secondary italic mb-4">
                "The best interface is the one that gets out of the way and lets 
                users accomplish their goals effortlessly."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-surface-elevated rounded-full"></div>
                <div>
                  <p className="font-medium text-text-primary">Your Name</p>
                  <p className="text-sm text-text-secondary">Front-end Developer</p>
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