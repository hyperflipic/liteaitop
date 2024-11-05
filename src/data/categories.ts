import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'chat',
    titleZh: '对话',
    titleEn: 'Chat',
    color: 'text-blue-600 dark:text-blue-400',
    items: [
      { name: 'ChatGPT', url: 'https://chat.openai.com/' },
      { name: 'Claude', url: 'https://www.anthropic.com/' },
    ],
    explanationZh: '像微信一样的聊天框，回答你的问题跟你聊天。如果你首次听说或者使用ai，应当首先学着使用它，因为它可以教你使用其他的工具。',
    explanationEn: 'A chat interface like WeChat that answers your questions and chats with you. If you\'re new to AI, start with this as it can teach you how to use other tools.'
  },
  {
    id: 'image',
    titleZh: '图像',
    titleEn: 'Image',
    color: 'text-green-600 dark:text-green-400',
    items: [
      { name: 'Recraft', url: 'https://www.recraft.ai/' },
    ],
    explanationZh: '跟照片一样的画面，你用文字要求，而他将会给你画出来。',
    explanationEn: 'Creates images like photos based on your text descriptions.'
  },
  {
    id: 'audio',
    titleZh: '音乐',
    titleEn: 'Audio',
    color: 'text-yellow-600 dark:text-yellow-400',
    items: [
      { name: 'Suno', url: 'https://www.suno.ai/' },
    ],
    explanationZh: '为你写歌，或者伴奏，也可以你写词它为你谱曲。',
    explanationEn: 'Writes songs for you, provides accompaniment, or composes music for your lyrics.'
  },
  {
    id: 'video',
    titleZh: '视频',
    titleEn: 'Video',
    color: 'text-red-600 dark:text-red-400',
    items: [
      { name: 'Runway', url: 'https://runwayml.com/' },
      { name: '可灵', url: 'https://klingai.kuaishou.com/' },
    ],
    explanationZh: '跟抖音一样的会动的画面，不用拍摄，你可以用文字或者画面描述，他给你画出来。',
    explanationEn: 'Creates moving images like TikTok videos without filming. You describe it in words or images, and it generates the video.'
  },
  {
    id: 'development',
    titleZh: '开发',
    titleEn: 'Development',
    color: 'text-purple-600 dark:text-purple-400',
    items: [
      { name: 'v0', url: 'https://v0.dev/' },
      { name: 'Cursor', url: 'https://cursor.sh/' },
    ],
    explanationZh: '写代码也叫程序，做像抖音微信一样的app，或者网页，或者电脑上的软件。',
    explanationEn: 'Writes code or programs to create apps like TikTok or WeChat, websites, or computer software.'
  },
  {
    id: 'ppt',
    titleZh: 'PPT',
    titleEn: 'Presentation',
    color: 'text-orange-600 dark:text-orange-400',
    items: [
      { name: 'Gamma', url: 'https://gamma.app/' },
      { name: 'Inslide', url: 'https://www.inslide.com/' },
    ],
    explanationZh: '如果你不知道这个词是什么意思那你就不需要它。',
    explanationEn: 'If you don\'t know what this term means, you probably don\'t need it.'
  },
];