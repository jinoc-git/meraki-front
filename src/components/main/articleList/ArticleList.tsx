import React from 'react';
import uuid from 'react-uuid';

import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import * as S from './ArticleList.styled';
import { getArticleList } from '../../../api/article';
import { type ArticleType } from '../../../types/articleType';
import Loading from '../../common/loading/Loading';
import Article from '../article/Article';

const ArticleList = () => {
  const { data, isLoading } = useQuery<
    any,
    AxiosError,
    ArticleType[],
    string[]
  >({
    queryKey: ['article'],
    queryFn: getArticleList,
  });

  if (isLoading) return <Loading />;

  console.log(data);

  return (
    <S.ArticleListContainer>
      {data?.map((article) => {
        const {
          headline: { main: headline },
          source,
          byline: { original: by },
          pub_date: pubDate,
          web_url: url,
          _id,
        } = article;
        return (
          <Article
            key={uuid()}
            headline={headline}
            source={source}
            by={by}
            pubDate={pubDate}
            url={url}
            _id={_id}
          />
        );
      })}
      <div />
    </S.ArticleListContainer>
  );
};

export default ArticleList;
