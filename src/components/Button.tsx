import { ReactNode } from 'react';
import Icon, { IconName } from './Icon';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left',
  href,
  type = 'button',
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-stone-800 dark:bg-stone-100/75 text-stone-100 dark:text-stone-800 hover:shadow-lg';
      case 'secondary':
        return 'border border-neutral/50 text-stone-800 dark:text-stone-100 hover:border-stone-400 dark:hover:border-stone-400 hover:shadow-md';
      case 'accent':
        return 'bg-feature/15 hover:bg-feature/20 text-primary';
      default:
        return 'bg-stone-800 dark:bg-stone-100/75 text-stone-100 dark:text-stone-800 hover:shadow-lg';
    }
  };

  const getSizeStyles = () => {
    const isIconOnly = variant === 'accent' && !children;

    switch (size) {
      case 'sm':
        return isIconOnly
          ? 'p-1.5 sm:p-2'
          : 'px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm';
      case 'default':
        return isIconOnly
          ? 'p-2 sm:p-2.5'
          : 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base';
      case 'lg':
        return isIconOnly
          ? 'p-2.5 sm:p-3'
          : 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg';
      default:
        return isIconOnly
          ? 'p-2 sm:p-2.5'
          : 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base';
    }
  };

  const renderIcon = () => {
    if (!icon) return null;

    const iconSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';
    const animationClass =
      icon === 'download'
        ? 'group-hover:animate-bounce'
        : icon === 'mail'
          ? 'group-hover:animate-pulse'
          : '';

    return <Icon name={icon} size={iconSize} className={animationClass} />;
  };

  const baseStyles =
    variant === 'accent' && !children
      ? 'group rounded-lg transition-all duration-200 hover:scale-110 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
      : 'group rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1.5 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const iconElement = renderIcon();

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    const isDownload = icon === 'download' || href.endsWith('.pdf');

    return (
      <a
        href={href}
        {...(isDownload
          ? { download: true }
          : { target: '_blank', rel: 'noopener noreferrer' })}
        className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
