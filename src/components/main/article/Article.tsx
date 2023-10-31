import React from 'react';

import * as S from './Article.styled';
import { type ArticleType } from '../../../types/articleType';
import { changeFormatDate } from '../../../utils/changeFormatDate';
import { onClickArticle } from '../../../utils/onClickArticle';
import Star from '../star/Star';

interface ArticleProps {
  article: ArticleType;
  isScrap: boolean;
  toggleScrap: (article: ArticleType) => (isScrap: boolean) => void;
}

const Article = (props: ArticleProps) => {
  const { article, isScrap, toggleScrap } = props;
  const {
    headline: { main: headline },
    source,
    byline: { original: by },
    pub_date: pubDate,
    web_url: url,
  } = article;

  return (
    <S.ArticleContainer
      onClick={() => {
        onClickArticle(url);
      }}
    >
      <S.ArticleHeader>
        <S.ArticleHeadline>{headline}</S.ArticleHeadline>
        <Star article={article} isScrap={isScrap} toggleScrap={toggleScrap} />
      </S.ArticleHeader>
      <S.ArticleInfo>
        <S.InfoInnerWrapper>
          <S.Source>{source ?? '정보가 없습니다'}</S.Source>
          <S.Reporter>{by ?? '정보가 없습니다'}</S.Reporter>
        </S.InfoInnerWrapper>
        <S.PubDate>{changeFormatDate(pubDate)}</S.PubDate>
      </S.ArticleInfo>
    </S.ArticleContainer>
  );
};

export default React.memo(Article);
