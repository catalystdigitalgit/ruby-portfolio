import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "Custom Dashboard",
      description: "A comprehensive analytics dashboard for Shopify store owners with real-time sales tracking, inventory management, and customer insights.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Shopify API", "Chart.js"],
      featured: true
    },
    {
      id: 2,
      title: "SaaS Marketing Site",
      category: "Marketing Site",
      description: "Modern marketing website for a productivity SaaS with conversion-focused design and smooth animations.",
      image: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      featured: true
    },
    {
      id: 3,
      title: "Fashion Brand Store",
      category: "Shopify Store",
      description: "Custom Shopify theme development for a luxury fashion brand with immersive product galleries and personalized shopping experience.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Shopify Liquid", "SCSS", "JavaScript", "Shopify Plus"],
      featured: false
    },
    {
      id: 4,
      title: "Portfolio CMS",
      category: "Custom Dashboard",
      description: "Content management system for creative professionals to showcase their work with drag-and-drop portfolio builder.",
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of projects spanning marketing sites, custom dashboards, and e-commerce solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-slate-900/70 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="group/btn flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View Case Study
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="group/btn flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Project
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;