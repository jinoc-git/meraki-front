import api from './api';
import { type ArticleType } from '../types/articleType';

const KEY = `api-key=${process.env.REACT_APP_NYT_API_KEY as string}`;

export const getArticleList = async (): Promise<ArticleType> => {
  const {
    data: {
      response: { docs },
    },
  } = await api.get(
    `/articlesearch.json?&q=${''}&page=${1}&sort=newest&fq=glocations:("${'South Korea'}")&${KEY}`,
  );

  return docs;
};
