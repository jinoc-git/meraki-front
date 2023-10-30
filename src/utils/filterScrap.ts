import { type FilterList } from '../store/filterStore';
import { type Keyword, type ArticleType } from '../types/articleType';

const checkFilter = {
  headline: (origin: string) => (str: string) => {
    const includeHeadline = origin.toLowerCase().includes(str.toLowerCase());
    return includeHeadline;
  },
  date: (base: Date | null) => (date: Date) => {
    if (base === null) return true;
    const baseDate = new Date(base);
    const endDate = new Date(base);
    const pubDate = new Date(date);
    endDate.setDate(baseDate.getDate() + 1);

    const isInDateRange = baseDate < pubDate && pubDate < endDate;

    return isInDateRange;
  },
  glocation: (keywords: Keyword[]) => (countryList: string[]) => {
    if (countryList.length === 0) return true;

    let hasCountry = false;
    for (const { name, value } of keywords) {
      if (name === 'glocation') {
        for (const country of countryList) {
          if (value === country) hasCountry = true;
        }
      }
    }

    return hasCountry;
  },
};

export const filterScrap =
  (filterList: FilterList) => (article: ArticleType) => {
    const { headline, date, countryList } = filterList;
    const {
      headline: { main: originHeadline },
      keywords,
      pub_date: pubDate,
    } = article;

    const includeHeadline = checkFilter.headline(originHeadline)(headline);
    const isInDateRange = checkFilter.date(date)(pubDate);
    const hasCountry = checkFilter.glocation(keywords)(countryList);

    if (includeHeadline && isInDateRange && hasCountry) return article;
    else return false;
  };
