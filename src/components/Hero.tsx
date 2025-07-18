
import Typography from './Typography';
import Button from './Button';

const Hero = () => {

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-bottom bg-no-repeat transition-all duration-300 bg-[url('/images/desktop-bg-light.svg')] dark:bg-[url('/images/desktop-bg.svg')]"
    >
      <div className="max-w-4xl mx-auto px-4 text-center -mt-60">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-700/20 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-full text-sm font-medium">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for new opportunities
          </div>
          
          <Typography variant="heading" emphasis="high">
            <span className="inline-block animate-wave hover:animate-wave-hover origin-bottom-right cursor-pointer">👋🏻</span>&nbsp;
             Hi, I'm&nbsp;
              <span className="bg-gradient bg-clip-text text-transparent">Ruby</span>
          </Typography>
          
          <div className="space-y-3">
            <Typography variant="subheading" emphasis="medium">
              Frontend Developer & UI Enthusiast
            </Typography>
            
            <Typography variant="body" emphasis="low" className="max-w-xl mx-auto leading-relaxed">
              I craft beautiful, performant web experiences that users love. 
              Specializing in React, TypeScript, and modern frontend technologies.
            </Typography>
          </div>
          
          <div className="flex gap-3 justify-center flex-wrap">
            <Button 
              variant="primary" 
              icon="download"
            >
              Download CV
            </Button>
            <Button 
              variant="secondary" 
              icon="mail"
            >
              Let's Chat
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="accent" icon="github" />
            <Button variant="accent" icon="linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;