import React, { useState, useEffect } from 'react';
import { Send, Moon, Sun, Languages, HelpCircle } from 'lucide-react';
import { Header } from './Header';
import { CategoryGrid } from './CategoryGrid';
import { FeedbackForm } from './FeedbackForm';
import { Footer } from './Footer';
import { categories } from '../data/categories';

export function AIToolsNavigation() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });
  const [language, setLanguage] = useState('zh');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const translate = (zh: string, en: string) => language === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 transition-colors duration-300">
      <Header 
        isScrolled={isScrolled}
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />

      <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-neutral-400 tracking-tight mb-3">
            Liteai.top
          </h1>
          <button
            onClick={() => setShowExplanations(!showExplanations)}
            className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <HelpCircle className="mr-1.5 h-4 w-4" />
            {translate('看不懂', 'Need help?')}
          </button>
        </div>

        <CategoryGrid 
          categories={categories}
          showExplanations={showExplanations}
          translate={translate}
        />

        <FeedbackForm translate={translate} />
        <Footer translate={translate} />
      </div>
    </div>
  );
}
