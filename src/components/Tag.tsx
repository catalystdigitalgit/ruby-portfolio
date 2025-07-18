import { ReactNode } from 'react';

interface TagProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  size?: 'sm' | 'default' | 'lg';
  children: ReactNode;
  className?: string;
}

const Tag = ({ 
  variant = 'neutral', 
  size = 'default', 
  children, 
  className = '' 
}: TagProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary/10 text-primary border border-primary/20';
      case 'secondary':
        return 'bg-secondary/50 text-primary border border-neutral/20';
      case 'accent':
        return 'bg-feature/10 text-feature border border-feature/20';
      case 'neutral':
        return 'bg-neutral/20 text-primary border border-neutral/30';
      default:
        return 'bg-neutral/20 text-primary border border-neutral/30';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'default':
        return 'px-2.5 py-1.5 text-sm';
      case 'lg':
        return 'px-3 py-2 text-base';
      default:
        return 'px-2.5 py-1.5 text-sm';
    }
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200';

  return (
    <span className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}>
      {children}
    </span>
  );
};

export default Tag; 