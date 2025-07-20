import { motion } from 'framer-motion';
import Typography from './Typography';
import Button from './Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center sm:bg-bottom bg-no-repeat transition-all duration-300 bg-[url('/images/desktop-bg-light.svg')] dark:bg-[url('/images/desktop-bg-dark.svg')]">
      <div className="max-w-3xl mx-auto px-4 text-center -mt-32 lg:-mt-60 space-y-6">
        <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-700/20 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          Available for new opportunities
        </div>

        <Typography variant="heading" emphasis="high">
          <motion.span
            className="inline-block origin-bottom-right cursor-pointer"
            animate={{ rotate: [0, 10, 0, 10, 0] }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
            whileHover={{
              rotate: [0, 10, 0, 10, 0],
              transition: {
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            👋🏻
          </motion.span>
          &nbsp; Hi, I'm&nbsp;
          <span className="bg-gradient bg-clip-text text-transparent">
            Ruby
          </span>
        </Typography>

        <div className="space-y-3">
          <Typography variant="subheading" emphasis="medium">
            Frontend Developer & UI Enthusiast
          </Typography>

          <Typography
            variant="body"
            emphasis="low"
            className="max-w-xl mx-auto leading-relaxed"
          >
            I craft beautiful, performant web experiences that users love.
            Specializing in React, TypeScript, and modern frontend technologies.
          </Typography>
        </div>

        <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
          <Button
            variant="primary"
            icon="download"
            href="/RubyDoyleCVJul2025.pdf"
            size="sm"
            className="sm:!px-6 sm:!py-3 sm:!text-base"
          >
            Download CV
          </Button>
          <Button
            variant="secondary"
            icon="mail"
            size="sm"
            className="sm:!px-6 sm:!py-3 sm:!text-base"
          >
            Let's Chat
          </Button>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4">
          <Button
            variant="accent"
            icon="github"
            href="https://github.com/rubyfrancesgit"
            size="sm"
            className="sm:!p-2.5"
          />
          <Button
            variant="accent"
            icon="linkedin"
            href="https://www.linkedin.com/in/ruby-doyle/"
            size="sm"
            className="sm:!p-2.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
