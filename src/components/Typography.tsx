import { ReactNode } from 'react';

interface TypographyProps {
  variant: 'heading' | 'subheading' | 'body' | 'body-bold';
  emphasis?: 'high' | 'medium' | 'low';
  children: ReactNode;
  className?: string;
}

const Typography = ({ variant, emphasis = 'high', children, className = '' }: TypographyProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'heading':
        return 'text-4xl md:text-6xl font-bold';
      case 'subheading':
        return 'text-lg md:text-xl font-medium';
      case 'body':
        return 'text-base';
      case 'body-bold':
        return 'text-base font-medium';
      default:
        return 'text-base';
    }
  };

  const getEmphasisStyles = () => {
    switch (emphasis) {
      case 'high':
        return 'text-primary';
      case 'medium':
        return 'text-stone-700 dark:text-stone-300';
      case 'low':
        return 'text-stone-600 dark:text-stone-400';
      default:
        return 'text-primary';
    }
  };

  const Component = variant === 'heading' ? 'h1' : variant === 'subheading' ? 'h2' : 'p';

  return (
    <Component className={`${getVariantStyles()} ${getEmphasisStyles()} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography; 