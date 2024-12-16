import React from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Notification({ message, isVisible, onClose }: NotificationProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-scaleIn">
      <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="text-white dark:text-gray-900 hover:opacity-75"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}