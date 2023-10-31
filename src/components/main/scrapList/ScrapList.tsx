import React, { useEffect } from 'react';
import uuid from 'react-uuid';

import * as S from './ScrapList.styled';
import { filterStore } from '../../../store/filterStore';
import { scrapStore } from '../../../store/scrapStore';
import { filterScrap } from '../../../utils/filterScrap';
import Article from '../article/Article';
import NoScrapList from '../noScrapList/NoScrapList';

const ScrapList = () => {
  const { scrapArticleList, checkScrap, toggleScrap, setScrap } = scrapStore();
  const filterList = filterStore((state) => state.page.scrap);

  const filterdScrapList = scrapArticleList.filter(filterScrap(filterList));

  useEffect(() => {
    setScrap();
  }, []);

  if (scrapArticleList.length === 0) {
    return <NoScrapList />;
  }

  return (
    <S.ScrapListContainer>
      <h2>스크랩 리스트</h2>
      {filterdScrapList.map((article) => {
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

export default React.memo(ScrapList);
