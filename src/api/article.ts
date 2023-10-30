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

  const data = await api.get(
    `/articlesearch.json?${headline}&page=${pageParam}${country}${date}&sort=newest&${KEY}`,
  );

  return data.data.response.docs;
};
