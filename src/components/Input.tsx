import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium mb-1">
          <div className="text-sm flex items-center gap-2">
            {icon}
            {label}
          </div>
        </label>
      )}
      <input
        {...props}
        className={`w-full px-3 py-2 border border-feature/15 rounded-lg focus:ring-1 focus:ring-feature/75 focus:border-transparent transition-all duration-200 text-primary placeholder-primary/50 ${className} bg-feature/5 text-sm`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium mb-1">
          <div className="text-sm flex items-center gap-2">
            {icon}
            {label}
          </div>
        </label>
      )}
      <textarea
        {...props}
        className={`w-full px-3 py-2 bg-feature/5 border border-feature/15 rounded-lg focus:ring-2 focus:ring-feature focus:border-transparent transition-all duration-200 text-primary placeholder-primary/50 resize-none text-sm ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const Input = Object.assign(InputComponent, {
  Textarea,
});

export default Input;
