import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Card from './Card';
import Tag from './Tag';
import Typography from './Typography';
import Button from './Button';
import Icon, { IconName } from './Icon';

const RecentWork: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      if (slidesPerView >= 3) {
        const currentIndex = emblaApi.selectedScrollSnap();
        const targetIndex = Math.max(0, currentIndex - slidesPerView);
        emblaApi.scrollTo(targetIndex);
      } else {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi, slidesPerView]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      if (slidesPerView >= 3) {
        const currentIndex = emblaApi.selectedScrollSnap();
        const targetIndex = currentIndex + slidesPerView;
        emblaApi.scrollTo(targetIndex);
      } else {
        emblaApi.scrollNext();
      }
    }
  }, [emblaApi, slidesPerView]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      updateCarouselState();
    };

    const onInit = () => {
      updateCarouselState();
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('init', onInit);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('init', onInit);
    };
  }, [emblaApi, updateCarouselState]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    const handleResize = () => {
      updateSlidesPerView();
      if (emblaApi) {
        emblaApi.reInit();
        updateCarouselState();
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi, updateCarouselState]);

  const projects = [
    {
      title: 'AI Chart Summaries',
      company: 'GEEIQ',
      description:
        'Pitched and prototyped AI-generated chart summaries to improve data accessibility, increase platform value and enable adoption for non-technical users.',
      tech: ['React', 'TypeScript', 'AI Integration'],
      icon: 'bar-chart' as IconName,
      link: 'https://geeiq.com',
    },
    {
      title: 'Design System Refactor',
      company: 'GEEIQ',
      description:
        'Led comprehensive Storybook refactor with new design system components, establishing consistent UI patterns across the platform.',
      tech: ['Storybook', 'React', 'Design Systems'],
      icon: 'palette' as IconName,
      link: 'https://geeiq.com',
    },
    {
      title: 'Chart.js Extension',
      company: 'GEEIQ',
      description:
        'Extended Chart.js UI capabilities for enhanced visualization of graphic-heavy data, creating custom interactive chart components.',
      tech: ['Chart.js', 'JavaScript', 'Data Visualization'],
      icon: 'bar-chart' as IconName,
      link: 'https://geeiq.com',
    },
    {
      title: 'Localization',
      company: '3S Money',
      description:
        'Built a bespoke localization system for a static site, enabling multi-market support',
      tech: ['React', 'i18n', 'TypeScript'],
      icon: 'globe' as IconName,
      link: 'https://3s.money/',
    },
    {
      title: 'Marketing Website',
      company: '3S Money',
      description:
        'Developed the complete marketing website from scratch with reusable React components, reducing marketing team dependency by 80%.',
      tech: ['React', 'TypeScript', 'Storyblok'],
      icon: 'rocket' as IconName,
      link: 'https://3s.money/',
    },
    {
      title: 'SEO Optimization',
      company: '3S Money',
      description:
        'Ran Lighthouse audits and implemented SEO best practices, boosting performance score from 82 to 95.',
      tech: ['SEO', 'Performance', 'GTM'],
      icon: 'zap' as IconName,
      link: 'https://3s.money/',
    },
    {
      title: 'E-commerce Plugins',
      company: 'Dazy Chain',
      description:
        'Extended Shopify store functionality with conversion-focused plugins to capture leads for email marketing pipelines.',
      tech: ['Shopify', 'Liquid', 'JavaScript'],
      icon: 'shopping-cart' as IconName,
      link: 'https://dazychain.uk',
    },
    // {
    //   title: 'Social Media Growth',
    //   company: 'Dazy Chain',
    //   description:
    //     'Grew brand organically on TikTok and Instagram through strategic content creation and community engagement.',
    //   tech: ['Social Media', 'Content Strategy', 'Growth'],
    //   icon: 'users' as IconName,
    //   link: 'https://dazychain.uk',
    // },
    {
      title: 'Meta Ad Campaigns',
      company: 'Dazy Chain',
      description:
        'Designed and executed ad campaigns across Meta platforms, managing targeting, creative, and budget to generate sales and build brand awareness.',
      tech: ['Meta Ads', 'Marketing', 'Analytics'],
      icon: 'bar-chart' as IconName,
      link: 'https://dazychain.uk',
    },
    {
      title: 'Client Website Development',
      company: 'Catalyst Digital',
      description:
        'Designed and developed client websites from initial pitch to final launch, delivering pixel-perfect, responsive experiences.',
      tech: ['React', 'Design', 'Development'],
      icon: 'code' as IconName,
      link: 'https://catalystdigital.uk',
    },
  ];

  const renderProjectCard = (project: (typeof projects)[0], index: number) => (
    <Card key={index} className="group h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-lg bg-feature/5 border border-feature/40 p-2">
            <Icon name={project.icon} size="sm" className="text-feature" />
          </div>
          <div className="flex-1">
            <Typography
              variant="subheading"
              emphasis="high"
              className="leading-tight mb-1"
            >
              {project.title}
            </Typography>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm flex items-center gap-1 text-primary/75"
            >
              <span className="relative">{project.company}</span>
              <Icon name="external-link" size="sm" />
            </a>
          </div>
        </div>

        <Typography
          variant="body"
          emphasis="low"
          className="leading-relaxed text-sm mb-6 flex-1"
        >
          {project.description}
        </Typography>

        <div className="border-t border-primary/20 pt-3">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <Tag key={techIndex} size="sm">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <motion.section
      id="work"
      className="py-20"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Typography variant="heading-2" emphasis="high" className="mb-4">
            Recent Projects
          </Typography>
          <Typography variant="body" emphasis="medium">
            Projects I'm proud to have worked on.
          </Typography>
        </div>

        <div className="flex items-center justify-end gap-4 mb-6">
          <Button
            variant="accent"
            icon="chevron-left"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          />

          <Button
            variant="accent"
            icon="chevron-right"
            onClick={scrollNext}
            disabled={!canScrollNext}
          />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                {renderProjectCard(project, index)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slidesPerView >= 3
            ? Array.from({
                length: Math.ceil(projects.length / slidesPerView),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(selectedIndex / slidesPerView) === index
                      ? 'bg-primary'
                      : 'bg-primary/30'
                  }`}
                  onClick={() => scrollTo(index * slidesPerView)}
                  aria-label={`Go to project group ${index + 1}`}
                />
              ))
            : projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    selectedIndex === index ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentWork;
