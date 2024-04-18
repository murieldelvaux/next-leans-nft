'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Montserrat } from 'next/font/google'
import clsx from 'clsx';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const montserrat = Montserrat({
  style: ['normal'],
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme() { }, });

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  console.log(theme)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en">
        <body className={theme === "dark" ? clsx(`bg-dark-bg-dark ${montserrat.className}`) : clsx(`bg-light-bg-light ${montserrat.className}`)}>
          <div>{children}</div>
        </body>
      </html>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  return context;
};