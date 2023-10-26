import React from 'react';

import * as S from './Article.styled';
import { changeFormatDate } from '../../../utils/changeFormatDate';
import Star from '../star/Star';

interface ArticleProps {
  headline: string;
  source: string;
  by: string;
  pubDate: string;
  url: string;
  _id: string;
}

const Article = (props: ArticleProps) => {
  const { headline, source, by, pubDate } = props;
  return (
    <S.ArticleContainer>
      <S.ArticleHeader>
        <S.ArticleHeadline>{headline}</S.ArticleHeadline>
        <Star />
      </S.ArticleHeader>
      <S.ArticleInfo>
        <S.InfoInnerWrapper>
          <S.Source>{source}</S.Source>
          <S.Reporter>{by}</S.Reporter>
        </S.InfoInnerWrapper>
        <S.PubDate>{changeFormatDate(pubDate)}</S.PubDate>
      </S.ArticleInfo>
    </S.ArticleContainer>
  );
};

export default Article;
