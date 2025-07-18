import { ReactNode } from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const Button = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '', 
  onClick, 
  disabled = false, 
  icon, 
  iconPosition = 'left' 
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-stone-800 dark:bg-stone-100/75 text-stone-100 dark:text-stone-800 hover:shadow-lg';
      case 'secondary':
        return 'border border-neutral/50 text-stone-800 dark:text-stone-100 hover:border-stone-400 dark:hover:border-stone-400 hover:shadow-md';
      case 'accent':
        return 'bg-stone-100/40 dark:bg-stone-800 hover:bg-feature/15 text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100';
      default:
        return 'bg-stone-800 dark:bg-stone-100/75 text-stone-100 dark:text-stone-800 hover:shadow-lg';
    }
  };

  const getSizeStyles = () => {
    const isIconOnly = variant === 'accent' && !children;
    
    switch (size) {
      case 'sm':
        return isIconOnly ? 'p-2' : 'px-4 py-2 text-sm';
      case 'default':
        return isIconOnly ? 'p-2.5' : 'px-6 py-3 text-base';
      case 'lg':
        return isIconOnly ? 'p-3' : 'px-8 py-4 text-lg';
      default:
        return isIconOnly ? 'p-2.5' : 'px-6 py-3 text-base';
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    
    switch (icon) {
      case 'download':
        return <Download className={`${iconSize} group-hover:animate-bounce`} />;
      case 'mail':
        return <Mail className={`${iconSize} group-hover:animate-pulse`} />;
      case 'github':
        return <Github className={iconSize} />;
      case 'linkedin':
        return <Linkedin className={iconSize} />;
      default:
        return null;
    }
  };

  const baseStyles = variant === 'accent' && !children
    ? 'group rounded-lg transition-all duration-200 hover:scale-110 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
    : 'group rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const iconElement = renderIcon();

  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button; 