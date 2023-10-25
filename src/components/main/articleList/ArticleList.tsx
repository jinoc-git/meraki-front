import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import * as S from './ArticleList.styled';
import { getArticleList } from '../../../api/article';
import { type ArticleType } from '../../../types/articleType';
import Article from '../article/Article';

const ArticleList = () => {
  const { data } = useQuery<any, AxiosError, ArticleType, string[]>({
    queryKey: ['article'],
    queryFn: getArticleList,
  });

  console.log(data);

  return (
    <S.ArticleListContainer>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </S.ArticleListContainer>
  );
};

export default ArticleList;
