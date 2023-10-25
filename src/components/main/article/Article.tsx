import React from 'react';

import * as S from './Article.styled';

const Article = () => {
  return (
    <S.ArticleContainer>
      <S.ArticleHeader>
        <S.ArticleHeadline>
          경찰폭행마바사아자차카타파하가나다라마바사아자차카타하
        </S.ArticleHeadline>
      </S.ArticleHeader>
      <S.ArticleInfo>
        <S.Source>한겨례 신문</S.Source>
        <S.Reporter>박정확 기자</S.Reporter>
        <S.PubDate>2023.10.26 (목)</S.PubDate>
      </S.ArticleInfo>
    </S.ArticleContainer>
  );
};

export default Article;
