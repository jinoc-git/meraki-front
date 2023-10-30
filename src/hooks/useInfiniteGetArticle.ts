import { useInView } from 'react-intersection-observer';

import { type InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import { getArticleList } from '../api/article';
import { filterStore, type PageList } from '../store/filterStore';
import { type ArticleType } from '../types/articleType';
import { changeToQuery } from '../utils/changeToQuery';

const useInfiniteGetArticle = (currentPage: PageList) => {
  const { headline, date, countryList } = filterStore(
    (state) => state.page[currentPage],
  );

  const { headlineQuery, dateQuery, countryQuery } = changeToQuery({
    headline,
    date,
    countryList,
  });

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<
    ArticleType[],
    AxiosError,
    InfiniteData<ArticleType[]>,
    string[],
    number
  >({
    queryKey: ['infiniteArticle', headline, dateQuery, countryQuery],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getArticleList({
        headline: headlineQuery,
        date: dateQuery,
        country: countryQuery,
        pageParam,
      });

      return res;
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage !== undefined && lastPage.length > 0) {
        return lastPageParam + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 1000,
  });

  const { ref } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        void fetchNextPage();
      }
    },
  });

  if (data === undefined) {
    return { data: [], ref, isLoading };
  }

  const result = data.pages.flat();

  return {
    data: result,
    ref,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  };
};

export default useInfiniteGetArticle;
