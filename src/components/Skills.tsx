import React from 'react';
import { Code, Palette, Zap, Globe, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Adobe XD", "Responsive Design", "Accessibility", "Design Systems"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "GraphQL", "REST APIs"],
      color: "green"
    },
    {
      icon: Zap,
      title: "Tools & Workflow",
      skills: ["Git", "Webpack", "Vite", "ESLint", "Prettier", "CI/CD"],
      color: "orange"
    },
    {
      icon: Database,
      title: "Backend & CMS",
      skills: ["Node.js", "Shopify Liquid", "Contentful", "Strapi", "MongoDB"],
      color: "slate"
    },
    {
      icon: Smartphone,
      title: "Mobile & Performance",
      skills: ["Progressive Web Apps", "Mobile-First Design", "Performance Optimization"],
      color: "pink"
    }
  ];

  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    slate: "bg-slate-100 text-slate-600",
    pink: "bg-pink-100 text-pink-600"
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[category.color as keyof typeof colorMap]}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Professional Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              
              {[
                { year: "2023-Present", role: "Senior Frontend Developer", company: "Tech Startup", description: "Leading frontend development for B2B SaaS platform" },
                { year: "2021-2023", role: "Frontend Developer", company: "Digital Agency", description: "Developed marketing sites and e-commerce solutions" },
                { year: "2020-2021", role: "Junior Developer", company: "E-commerce Company", description: "Specialized in Shopify theme development" },
                { year: "2019-2020", role: "UI/UX Designer", company: "Design Studio", description: "Created user interfaces and design systems" }
              ].map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  <div className="absolute left-2 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">{item.role}</h4>
                      <span className="text-sm font-medium text-blue-600">{item.year}</span>
                    </div>
                    <p className="text-slate-600 mb-2">{item.company}</p>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;