import api from './api';

const KEY = `api-key=${process.env.REACT_APP_NYT_API_KEY as string}`;

export const getArticleList = async () => {
  const {
    data: {
      response: { docs },
    },
  } = await api.get(
    `/articlesearch.json?&q=${'seoul'}&page=${1}&sort=newest&fq=glocations:("${'South Korea'}")&${KEY}`,
  );

  return docs;
};
