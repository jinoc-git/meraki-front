import { format } from 'date-fns';
import { create } from 'zustand';

interface FilterList {
  headline: string;
  date: null | string;
  countryList: [];
}

type PageList = 'home' | 'scrap';

interface FilterStore {
  page: {
    home: FilterList;
    scrap: FilterList;
  };
  setHeadline: (page: PageList) => (value: string) => void;
  setDate: (page: PageList) => (value: Date | null) => void;
}

export const filterStore = create<FilterStore>((set, get) => ({
  page: {
    home: {
      headline: '',
      date: null,
      countryList: [],
    },
    scrap: {
      headline: '',
      date: null,
      countryList: [],
    },
  },
  setHeadline: (page: PageList) => (value: string) => {
    const currentData = get().page;
    currentData[page].headline = value;
    set({ page: currentData });
  },
  setDate: (page: PageList) => (value: Date | null) => {
    const currentData = get().page;
    const changedFormat = value !== null ? format(value, 'yyyyMMdd') : null;
    console.log(changedFormat);
    currentData[page].date = changedFormat;
  },
}));
