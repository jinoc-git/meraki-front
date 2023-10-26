import { create } from 'zustand';

import { type ArticleType } from '../types/articleType';

interface ScrapStore {
  scrapArticleList: ArticleType[];
  addScrap: (article: ArticleType) => void;
  removeScrap: (id: string) => void;
  checkScrap: (id: string) => boolean;
  toggleScrap: (article: ArticleType) => (isScrap: boolean) => void;
  setScrap: () => void;
}

export const scrapStore = create<ScrapStore>((set, get) => ({
  scrapArticleList: [],
  addScrap: (article: ArticleType) => {
    const originScrapList = get().scrapArticleList;
    originScrapList.push(article);
    localStorage.setItem('scrap', JSON.stringify(originScrapList));
    get().setScrap();
  },
  removeScrap: (id: string) => {
    const originScrapList = get().scrapArticleList;
    const newScrapList = originScrapList.filter(
      (article) => article._id !== id,
    );
    localStorage.setItem('scrap', JSON.stringify(newScrapList));
    get().setScrap();
  },
  checkScrap: (id: string) => {
    const originScrapList = get().scrapArticleList;
    const isScrap =
      originScrapList.find((article) => article._id === id) !== undefined;

    return isScrap;
  },
  toggleScrap: (article: ArticleType) => (isScrap: boolean) => {
    if (isScrap) get().removeScrap(article._id);
    else get().addScrap(article);
  },
  setScrap: () => {
    const itemList = localStorage.getItem('scrap');
    const scrapList: ArticleType[] =
      itemList !== null ? JSON.parse(itemList) : [];
    set({ scrapArticleList: scrapList });
  },
}));
