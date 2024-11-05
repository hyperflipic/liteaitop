import React from 'react';

interface FooterProps {
  translate: (zh: string, en: string) => string;
}

export function Footer({ translate }: FooterProps) {
  return (
    <div className="mt-6 mb-4 text-center">
      <div className="inline-flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
        <a href="#" className="hover:text-gray-900 dark:hover:text-neutral-100 transition-colors">
          {translate('教程', 'Tutorials')}
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-900 dark:hover:text-neutral-100 transition-colors">
          {translate('社区', 'Community')}
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-900 dark:hover:text-neutral-100 transition-colors">
          {translate('常见问题', 'FAQ')}
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-900 dark:hover:text-neutral-100 transition-colors">
          {translate('模型对比', 'Model Comparison')}
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-900 dark:hover:text-neutral-100 transition-colors">
          {translate('api性价比', 'API Value')}
        </a>
      </div>
    </div>
  );
}