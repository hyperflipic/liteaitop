import React from 'react';
import { Moon, Sun, Languages } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  isDark: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export function Header({ isScrolled, isDark, toggleTheme, toggleLanguage }: HeaderProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="w-24"></div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-200 hover:scale-105"
          >
            <Languages size={18} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-200 hover:scale-105"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}