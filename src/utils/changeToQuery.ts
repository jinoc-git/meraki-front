import { format } from 'date-fns';

import { COUNTRY_LIST } from '../constant/countryList';
import { type FilterList } from '../store/filterStore';

export const changeToQuery = ({ headline, date, countryList }: FilterList) => {
  const headlineQuery = headline === '' ? '' : `&q=${headline}`;

  const copyDate = date;
  const beginDate = date === null ? '' : format(date, 'yyyyMMdd');
  const endDate =
    copyDate === null
      ? ''
      : format(copyDate.setDate(copyDate.getDate() + 1), 'yyyyMMdd');

  const dateQuery =
    beginDate === '' ? '' : `&begin_date=${beginDate}&end_date=${endDate}`;

  const selectedCountryList = countryList
    .map((name) => {
      const match = COUNTRY_LIST.find(({ country }) => country === name);
      const value = `"${match?.value}"`;
      return value;
    })
    .join(',');

  const countryQuery =
    countryList.length === 0 ? '' : `&fq=glocations:(${selectedCountryList})`;

  return { headlineQuery, dateQuery, countryQuery };
};
