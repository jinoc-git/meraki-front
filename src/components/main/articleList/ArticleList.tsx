import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import * as S from './ArticleList.styled';
import useInfiniteGetArticle from '../../../hooks/useInfiniteGetArticle';
import { scrapStore } from '../../../store/scrapStore';
import Loading from '../../common/loading/Loading';
import Article from '../article/Article';

const ArticleList = () => {
  const { checkScrap, toggleScrap, setScrap } = scrapStore((state) => state);

  const { data, ref, isLoading, isFetchingNextPage } = useInfiniteGetArticle();

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
      <S.ObseverBox ref={ref}>{isFetchingNextPage === true && <Loading />}</S.ObseverBox>
    </S.ArticleListContainer>
  );
};

export default ArticleList;
