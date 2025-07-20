import React from 'react';
import { motion } from 'framer-motion';
import Typography from './Typography';
import Card from './Card';
import Icon, { IconName } from './Icon';

const ToolBelt: React.FC = () => {
  const tools = [
    {
      name: 'React',
      icon: 'react' as IconName,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'TypeScript',
      icon: 'typescript' as IconName,
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'JavaScript',
      icon: 'javascript' as IconName,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwindcss' as IconName,
      color: 'from-teal-400 to-cyan-500',
    },
    {
      name: 'Storybook',
      icon: 'storybook' as IconName,
      color: 'from-pink-400 to-pink-600',
    },
    {
      name: 'Figma',
      icon: 'figma' as IconName,
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Node.js',
      icon: 'nodejs' as IconName,
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Git',
      icon: 'git' as IconName,
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'Playwright',
      icon: 'playwright' as IconName,
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'GitHub',
      icon: 'github-si' as IconName,
      color: 'from-gray-600 to-gray-800',
    },
    {
      name: 'Bitbucket',
      icon: 'bitbucket' as IconName,
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Next.js',
      icon: 'nextjs' as IconName,
      color: 'from-stone-600 to-stone-800',
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-16 bg-stone-100/30 dark:bg-stone-800/30"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="heading-2" className="mb-3">
            My Toolkit
          </Typography>
          <Typography variant="body" emphasis="medium">
            Technologies and tools I work with daily.
          </Typography>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => {
            return (
              <div key={index} className="group relative">
                <Card interactive className="hover:-translate-y-1">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={tool.icon} size="sm" className="text-white" />
                  </div>
                  <div className="text-center">
                    <Typography
                      variant="body"
                      emphasis="medium"
                      className="text-xs font-medium"
                    >
                      {tool.name}
                    </Typography>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ToolBelt;
