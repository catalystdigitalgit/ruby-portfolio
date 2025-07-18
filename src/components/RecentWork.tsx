import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from './Card';

const RecentWork: React.FC = () => {
  const projects = [
    {
      title: 'Data Visualization for Virtual-World Marketing',
      description: 'Developed data-rich tools for the virtual-world gaming space, collaborating closely with Backend, Product, and Design to align on data visualisation strategies, bridging technical feasibility, data integrity, and UX for accurate and digestible insights.',
      tech: ['Next.js', 'TypeScript', "Tailwind", 'Chart.js', 'Storybook'],
      images: ['img1', 'img2', 'img3'],
      link: '#',
      status: 'Live',
      links: [
        {
          title: 'GEEIQ',
          subtitle: 'Marketing Website',
          url: 'https://geeiq.com'
        },
      ]
    },
    {
      title: '3S Money Marketing Website',
      description: 'Led front-end development for high-performance, responsive website. Reduced marketing team dependency by 80% through creating buildable React components in CMS, and improved SEO score from 82 to 95.',
      tech: ['React', 'TypeScript', 'SEO Optimization', 'Storybook', 'Storyblok', 'GTM'],
      images: ['img1', 'img2', 'img3'],
      link: '#',
      status: 'Live',
      links: [
        {
          title: '3S Money Marketing Website',
          url: 'https://3s.money/'
        },
      ]
    },
    {
      title: 'E-Commerce & Digital Ventures',
      description: 'Built and managed multiple digital ventures combining front-end development, e-commerce, and marketing. Extended Shopify functionality and ran paid ad campaigns across Meta platforms.',
      tech: ['Shopify', 'Liquid', 'Meta Ads', 'E-commerce', 'Marketing Automation'],
      images: ['img1', 'img2', 'img3'],
      link: '#',
      status: 'Active',
      links: [
        {
          title: 'Catalyst Digital',
          url: 'https://catalystdigital.uk'
        },
        {
          title: 'Dazy Chain',
          url: 'https://dazychain.uk'
        },
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Projects I'm proud to have built
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} interactive className="group h-full">
              <div className="flex flex-col h-full space-y-3">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                    {project.title}
                  </h3>
                
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-3 py-1.5 rounded-full text-xs font-medium border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              
                <div className="flex flex-wrap gap-4 pt-3 border-t border-stone-200 dark:border-stone-700">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200 group/link"
                    > 
                      <span className="relative">
                        {link.title}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-stone-900 dark:bg-stone-100 transition-all duration-300 group-hover/link:w-full"></span>
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;