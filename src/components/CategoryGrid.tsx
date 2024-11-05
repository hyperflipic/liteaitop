import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
  showExplanations: boolean;
  translate: (zh: string, en: string) => string;
}

export function CategoryGrid({ categories, showExplanations, translate }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {categories.map((category) => (
        <div key={category.id} 
             className={`${category.id === 'chat' && showExplanations ? 'col-span-2 sm:col-span-3 lg:col-span-4' : ''} 
                         group transition-all duration-300 flex items-stretch`}>
          <div className={`bg-white/50 dark:bg-neutral-800/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm 
                           shadow-[0_4px_15px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_15px_rgb(0,0,0,0.08)]
                           hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_4px_20px_rgb(0,0,0,0.16)]
                           transition-all duration-300 flex flex-col justify-between flex-1
                           ${category.id === 'chat' && showExplanations 
                             ? 'transform scale-102 border border-blue-500 dark:border-blue-400' 
                             : ''}
                           ${(category.id === 'image' || category.id === 'audio') ? 'justify-center' : ''}`}>
            <div>
              <h2 className={`text-base sm:text-lg font-semibold ${category.color} text-center mb-2
                              ${category.id === 'chat' && showExplanations ? 'text-xl' : ''}`}>
                {translate(category.titleZh, category.titleEn)}
              </h2>
              <div className={`${(category.id === 'image' || category.id === 'audio') ? 'flex flex-col items-center' : ''}`}>
                {showExplanations && (
                  <p className={`text-gray-600 dark:text-neutral-400 mb-3 text-xs sm:text-sm
                                 ${category.id === 'chat' ? 'sm:text-base leading-relaxed' : ''}`}>
                    {translate(category.explanationZh, category.explanationEn)}
                  </p>
                )}
                <ul className={`space-y-1 ${category.id === 'chat' && showExplanations ? 'columns-2 sm:columns-3 gap-4' : ''}`}>
                  {category.items.map((item) => (
                    <li key={item.name} className="text-center break-inside-avoid">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-neutral-100 
                                    transition-all duration-200 hover:scale-105 text-xs sm:text-sm
                                    ${category.id === 'chat' && showExplanations ? 'sm:text-base font-medium' : ''}`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}