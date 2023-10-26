import React from 'react';

import * as S from './Article.styled';
import Star from '../star/Star';

const Article = () => {
  return (
    <S.ArticleContainer>
      <S.ArticleHeader>
        <S.ArticleHeadline>
          백신 안 맞아도 해외여행 간다 격리도 없이 갈 수 있는 나라는 어디가
          있을까?
        </S.ArticleHeadline>
        <Star />
      </S.ArticleHeader>
      <S.ArticleInfo>
        <S.InfoInnerWrapper>
          <S.Source>한겨례 신문</S.Source>
          <S.Reporter>박정확 기자</S.Reporter>
        </S.InfoInnerWrapper>
        <S.PubDate>2023.10.26 (목)</S.PubDate>
      </S.ArticleInfo>
    </S.ArticleContainer>
  );
};

export default Article;
