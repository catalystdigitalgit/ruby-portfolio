import React, { useEffect, useRef, useState } from 'react';
import Typography from './Typography';
import Card from './Card';

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const timelineItems = [
    {
      date: 'Jan 2024 - Present',
      title: 'Frontend Developer at GEEIQ',
      description: 'Leading frontend development for AI-powered analytics platform, implementing modern React patterns and optimizing performance.'
    },
    {
      date: 'Sep 2023',
      title: 'Launched Catalyst Digital',
      description: 'Founded digital agency specializing in modern web applications and user experience design for startups and enterprises.'
    },
    {
      date: 'Mar 2022 - Dec 2023',
      title: 'Frontend Developer at 3S Money',
      description: 'Developed secure fintech applications with React and TypeScript, focusing on payment processing and user authentication systems.'
    },
    {
      date: 'Nov 2021',
      title: 'Launched Dazy Chain',
      description: 'Created blockchain-based supply chain tracking platform with real-time analytics and smart contract integration.'
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const timelineElements = document.querySelectorAll('[data-timeline-item]');
    timelineElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        timelineElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

      return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="heading" className="mb-2">
            Career Timeline
          </Typography>
          <Typography variant="body" emphasis="medium">
            My professional journey and key milestones
          </Typography>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral/70 dark:bg-neutral/20"></div>
          
          <div className="-space-y-2">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                data-timeline-item
                data-index={index}
              >
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-feature rounded-full border-3 border-secondary z-10 transition-all duration-500 ${
                  visibleItems.has(index) ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`}></div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'} transition-all duration-700 ease-out ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  <Card interactive>
                    <Typography 
                      variant="body" 
                      emphasis="low" 
                      className={`text-xs font-medium text-feature mb-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      {item.date}
                    </Typography>
                    <Typography 
                      variant="body-bold" 
                      className={`text-sm mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body" 
                      emphasis="medium" 
                      className={`text-xs leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      {item.description}
                    </Typography>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;