import { useState, useCallback } from 'react';

interface NotificationState {
  isVisible: boolean;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showNotification = useCallback(
    (
      title: string,
      message: string,
      type: 'success' | 'error' | 'info' = 'success'
    ) => {
      setNotification({
        isVisible: true,
        title,
        message,
        type,
      });
    },
    []
  );

  const hideNotification = useCallback(() => {
    setNotification(prev => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
