import { create } from 'zustand';

export interface FilterList {
  headline: string;
  date: null | Date;
  countryList: string[];
}

export type PageList = 'home' | 'scrap';

interface FilterStore {
  page: {
    home: FilterList;
    scrap: FilterList;
  };
  setFilterValues: (page: PageList) => (values: FilterList) => void;
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
  setFilterValues: (page: PageList) => (values: FilterList) => {
    const { headline, date, countryList } = values;
    const currentData = get().page;

    currentData[page].headline = headline;
    currentData[page].date = date;
    currentData[page].countryList = countryList;

    set({ page: currentData });
  },
}));
