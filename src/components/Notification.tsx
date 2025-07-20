import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon, { IconName } from './Icon';
import Typography from './Typography';

interface NotificationProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  isVisible,
  onClose,
  title,
  message,
  type = 'success',
  duration = 5000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200 dark:border-green-800',
          icon: 'check-circle',
          iconColor: 'text-green-600 dark:text-green-400',
        };
      case 'error':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          border: 'border-red-200 dark:border-red-800',
          icon: 'x-circle',
          iconColor: 'text-red-600 dark:text-red-400',
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          icon: 'info',
          iconColor: 'text-blue-600 dark:text-blue-400',
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 right-4 z-50 max-w-sm w-full"
        >
          <div
            className={`
              ${styles.bg} ${styles.border}
              border rounded-lg shadow-lg backdrop-blur-sm
              p-4 relative overflow-hidden
            `}
          >
            <div className="flex items-start gap-3">
              <div className={`${styles.iconColor} flex-shrink-0 mt-0.5`}>
                <Icon name={styles.icon as IconName} size="md" />
              </div>

              <div className="flex-1 min-w-0">
                <Typography variant="body-bold" className="text-sm mb-1">
                  {title}
                </Typography>
                <Typography variant="body" className="text-sm text-muted">
                  {message}
                </Typography>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 text-muted hover:text-foreground transition-colors"
              >
                <Icon name="x" size="sm" />
              </button>
            </div>

            {duration > 0 && (
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
                className={`
                  absolute bottom-0 left-0 h-1 
                  ${
                    type === 'success'
                      ? 'bg-green-500'
                      : type === 'error'
                        ? 'bg-red-500'
                        : 'bg-blue-500'
                  }
                `}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
