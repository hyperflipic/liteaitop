export interface Item {
  name: string;
  url: string;
}

export interface Category {
  id: string;
  titleZh: string;
  titleEn: string;
  color: string;
  items: Item[];
  explanationZh: string;
  explanationEn: string;
}