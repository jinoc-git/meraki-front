import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import * as S from './ScrapList.styled';
import { scrapStore } from '../../../store/scrapStore';
import Article from '../article/Article';

const ScrapList = () => {
  const { scrapArticleList, checkScrap, toggleScrap, setScrap } = scrapStore();

  useEffect(() => {
    setScrap();
  }, []);

  if (scrapArticleList.length === 0) {
    return <></>
  }

  return (
    <S.ScrapListContainer>
      {scrapArticleList.map((article) => {
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
    </S.ScrapListContainer>
  );
};

export default ScrapList;
