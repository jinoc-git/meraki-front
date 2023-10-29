/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import api from './api';
import { type ArticleType } from '../types/articleType';
import { type SearchType } from '../types/searchType';

const KEY = `api-key=${process.env.REACT_APP_NYT_API_KEY as string}`;

export interface GetInfiniteArticleArgs extends SearchType {
  pageParam: number;
}

export const getArticleList = async (
  args: GetInfiniteArticleArgs,
): Promise<ArticleType[]> => {
  const { headline, date, country, pageParam } = args;
  console.log(date);
  const data = await api.get(
    `/articlesearch.json?&q=${headline}&page=${pageParam}&fq=glocations:("${'United States'}")&begin_date=${date}&end_date=${'20230105'}&sort=newest&${KEY}`,
  );

  return data.data.response.docs;
};
