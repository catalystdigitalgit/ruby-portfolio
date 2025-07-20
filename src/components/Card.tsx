import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

const Card = ({ children, className = '', interactive = false }: CardProps) => {
  const getInteractiveStyles = () => {
    if (!interactive) return '';
    return 'hover:shadow-lg hover:scale-105 hover:border-feature/30 hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 transition-all duration-300 cursor-pointer';
  };

  return (
    <div
      className={`rounded-lg p-3 bg-secondary/75 dark:bg-secondary shadow-sm border border-neutral/20 dark:border-neutral/30 ${getInteractiveStyles()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
