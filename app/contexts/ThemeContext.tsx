'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Button from '../components/Button/Button';
import clsx from 'clsx';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({theme: 'dark',toggleTheme() {},});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  console.log(theme)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <html lang="en" >
        <body className={theme==="dark"?clsx(`bg-dark-bg-dark`):clsx(`bg-light-bg-light`)}><div>{children}<Button /></div></body>
        </html> 
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
 
  return context;
};