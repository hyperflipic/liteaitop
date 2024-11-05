import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FeedbackFormProps {
  translate: (zh: string, en: string) => string;
}

export function FeedbackForm({ translate }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div className="mt-12 mb-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto transform hover:scale-[1.01] transition-transform duration-300">
        <div className="flex items-center bg-white/80 dark:bg-neutral-800/80 rounded-full 
                      shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.12)] 
                      backdrop-blur-sm overflow-hidden group">
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={translate("意见。或者聊天", "Feedback or chat")}
            className="flex-grow px-4 py-2 focus:outline-none text-xs sm:text-sm bg-transparent 
                     text-gray-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-500"
          />
          <button
            type="submit"
            className="text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 
                     p-2 transition-colors mr-1 group-hover:scale-105 duration-300"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}