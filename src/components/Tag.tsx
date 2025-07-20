import { ReactNode } from 'react';

interface TagProps {
  size?: 'sm' | 'default' | 'lg';
  children: ReactNode;
  className?: string;
}

const Tag = ({ size = 'default', children, className = '' }: TagProps) => {
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

  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 bg-feature/5 border border-feature/40';

  return (
    <span className={`${baseStyles} ${getSizeStyles()} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
