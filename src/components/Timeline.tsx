import React, { useEffect, useRef, useState } from 'react';
import Typography from './Typography';
import Card from './Card';
import Tag from './Tag';
import Icon from './Icon';

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const timelineItems = [
    {
      date: 'Jan 2024 - Present',
      title: 'Frontend Developer at GEEIQ',
      projectType: 'Full-time',
      description:
        'Leading frontend development for AI-powered analytics platform, implementing modern React patterns and optimizing performance.',
      link: 'https://geeiq.com',
      hasTooltip: true,
      tooltipText:
        "Leaving GEEIQ earlier than expected to find a fully remote role that allows me to work from New Zealand in order to support my mum as she navigates early-stage Alzheimer's.",
    },
    {
      date: 'Sep 2023',
      title: 'Launched Catalyst Digital',
      projectType: 'Personal Project',
      description:
        'Founded digital agency specializing in modern web applications and user experience design for startups and enterprises.',
      link: 'https://catalystdigital.uk',
    },
    {
      date: 'Mar 2022 - Dec 2023',
      title: 'Frontend Developer at 3S Money',
      projectType: 'Full-time',
      description:
        'Developed secure fintech applications with React and TypeScript, focusing on payment processing and user authentication systems.',
      link: 'https://3s.money/',
    },
    {
      date: 'Nov 2021',
      title: 'Launched Dazy Chain',
      projectType: 'Personal Project',
      description:
        'Created blockchain-based supply chain tracking platform with real-time analytics and smart contract integration.',
      link: 'https://dazychain.uk',
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements = document.querySelectorAll('[data-timeline-item]');
    timelineElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        timelineElements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const renderTooltip = (item: (typeof timelineItems)[0]) => (
    <div className="absolute z-50 w-64 p-3 bg-secondary border border-neutral/20 rounded-lg shadow-lg left-6 top-1/2 transform -translate-y-1/2">
      <Typography variant="body" className="text-xs text-left">
        {item.tooltipText}
      </Typography>
      <div className="absolute left-0 top-1/2 w-2 h-2 bg-secondary border-l border-b border-neutral/20 transform rotate-45 -translate-x-1 -translate-y-1/2"></div>
    </div>
  );

  return (
    <section id="about" className="pb-16 pt-28">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="heading-2" className="mb-2">
            Career Timeline
          </Typography>
          <Typography variant="body" emphasis="medium">
            My professional journey and key milestones.
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
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-feature rounded-full border-3 border-secondary z-10 transition-all duration-500 ${
                    visibleItems.has(index)
                      ? 'scale-100 opacity-100'
                      : 'scale-50 opacity-0'
                  }`}
                ></div>

                <div
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'} transition-all duration-700 ease-out ${
                    visibleItems.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Card interactive>
                    <div
                      className={`flex items-center gap-1 mb-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                    >
                      <Typography
                        variant="body"
                        emphasis="low"
                        className="text-xs font-medium text-feature"
                      >
                        {item.date}
                      </Typography>
                      {item.hasTooltip && (
                        <div className="relative">
                          <button
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                          >
                            <Icon name="info" size="xs" />
                          </button>
                          {tooltipVisible && renderTooltip(item)}
                        </div>
                      )}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline text-sm mb-2 flex items-center gap-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                    >
                      <Typography variant="body-bold" className="text-sm">
                        {item.title}
                      </Typography>
                      <Icon name="external-link" size="sm" />
                    </a>
                    <div
                      className={`mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                      <Tag size="sm">{item.projectType}</Tag>
                    </div>
                    <Typography
                      variant="body"
                      emphasis="medium"
                      className={`text-xs ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
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
