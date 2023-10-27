import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import * as S from './ArticleList.styled';
import { getArticleList } from '../../../api/article';
import { scrapStore } from '../../../store/scrapStore';
import { type ArticleType } from '../../../types/articleType';
import Loading from '../../common/loading/Loading';
import Article from '../article/Article';

const ArticleList = () => {
  const { checkScrap, toggleScrap, setScrap } = scrapStore((state) => state);

  const { data, isLoading } = useQuery<
    any,
    AxiosError,
    ArticleType[],
    string[]
  >({
    queryKey: ['article'],
    queryFn: getArticleList,
  });

  useEffect(() => {
    setScrap();
  }, []);

  if (isLoading) return <Loading />;

  console.log(data);

  return (
    <S.ArticleListContainer>
      {data?.map((article) => {
        const isScrap = checkScrap(article._id);

        return (
          <Article
            key={uuid()}
            article={article}
            isScrap={isScrap}
            toggleScrap={toggleScrap}
          />
        );
      })}
      <div />
    </S.ArticleListContainer>
  );
};

export default ArticleList;
