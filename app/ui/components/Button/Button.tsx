'use client';
import { useTheme } from '@/app/ui/contexts/ThemeContext';
import React from 'react';

const Button: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="px-4 py-2 rounded bg-gray-800 text-white"
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default Button;