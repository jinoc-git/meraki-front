import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import * as S from './ArticleList.styled';
import useInfiniteGetArticle from '../../../hooks/useInfiniteGetArticle';
import { modalStore } from '../../../store/modalStore';
import { scrapStore } from '../../../store/scrapStore';
import ErrorComp from '../../common/errorComp/ErrorComp';
import Loading from '../../common/loading/Loading';
import Modal from '../../header/modal/Modal';
import Article from '../article/Article';
import NoFilterResult from '../noFilterResult/NoFilterResult';

const ArticleList = () => {
  const isOpen = modalStore((state) => state.isOpen);

  const { checkScrap, toggleScrap, setScrap } = scrapStore((state) => state);

  const { data, ref, isLoading, isFetchingNextPage } =
    useInfiniteGetArticle('home');

  useEffect(() => {
    setScrap();
  }, []);

  if (isLoading) return <Loading />;
  if (data === undefined) return <ErrorComp />;

  return (
    <>
      <S.ArticleListContainer>
        <h2>기사 리스트</h2>
        {data?.length === 0 ? (
          <NoFilterResult />
        ) : (
          data?.map((article) => {
            const isScrap = checkScrap(article._id);

            return (
              <Article
                key={uuid()}
                article={article}
                isScrap={isScrap}
                toggleScrap={toggleScrap}
              />
            );
          })
        )}
        {}
        <S.ObseverBox ref={ref}>
          {isFetchingNextPage && <Loading />}
        </S.ObseverBox>
        {isOpen && <Modal />}
      </S.ArticleListContainer>
    </>
  );
};

export default React.memo(ArticleList);
