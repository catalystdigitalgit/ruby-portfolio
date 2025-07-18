import React from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiStorybook, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit, 
  SiFigma, 
  SiNextdotjs,
  SiBitbucket,
  SiJavascript,
  SiGithub
} from 'react-icons/si';
import { MdPlayArrow } from 'react-icons/md';
import Typography from './Typography';
import Card from './Card';

const ToolBelt: React.FC = () => {
  const tools = [
    { name: 'React', icon: SiReact, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-400 to-cyan-500' },
    { name: 'Storybook', icon: SiStorybook, color: 'from-pink-400 to-pink-600' },
    { name: 'Figma', icon: SiFigma, color: 'from-purple-400 to-pink-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-400 to-green-600' },
    { name: 'Git', icon: SiGit, color: 'from-orange-400 to-red-500' },
    { name: 'Playwright', icon: MdPlayArrow, color: 'from-green-500 to-emerald-600' },
    { name: 'GitHub', icon: SiGithub, color: 'from-gray-600 to-gray-800' },
    { name: 'Bitbucket', icon: SiBitbucket, color: 'from-blue-600 to-blue-700' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-stone-600 to-stone-800' },
  ];

  return (
    <section className="py-16 bg-stone-100/50 dark:bg-stone-800/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="heading" className="mb-3">
            My Toolkit
          </Typography>
          <Typography variant="subheading" emphasis="medium">
            Technologies and tools I work with daily
          </Typography>
        </div>
        
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <Card interactive className="hover:-translate-y-1">
                  <div className={`w-8 h-8 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-center">
                    <Typography variant="body" emphasis="medium" className="text-xs font-medium">
                      {tool.name}
                    </Typography>
                  </div>
                </Card>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-secondary-dark/95 dark:bg-secondary/95 text-primary-dark dark:text-primary px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-10 border border-neutral/30 dark:border-neutral/20 shadow-sm">
                  {tool.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-secondary-dark/95 dark:border-t-secondary/95"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolBelt;