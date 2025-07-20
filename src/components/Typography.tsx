import { ReactNode } from 'react';

interface TypographyProps {
  variant:
    | 'heading'
    | 'heading-2'
    | 'subheading'
    | 'body'
    | 'body-bold'
    | 'signature';
  emphasis?: 'high' | 'medium' | 'low';
  children: ReactNode;
  className?: string;
}

const Typography = ({
  variant,
  emphasis = 'high',
  children,
  className = '',
}: TypographyProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'heading':
        return 'text-4xl md:text-5xl font-bold';
      case 'heading-2':
        return 'text-3xl md:text-4xl font-bold';
      case 'subheading':
        return 'text-lg md:text-xl font-medium';
      case 'body':
        return 'text-base';
      case 'body-bold':
        return 'text-base font-medium';
      case 'signature':
        return 'text-xl md:text-2xl font-normal';
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

  const Component =
    variant === 'heading' || variant === 'heading-2'
      ? 'h1'
      : variant === 'subheading'
        ? 'h2'
        : 'p';

  const fontFamily = variant === 'signature' ? 'font-shrikhand' : '';

  return (
    <Component
      className={`${getVariantStyles()} ${getEmphasisStyles()} ${fontFamily} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
