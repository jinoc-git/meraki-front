import React from 'react';

import * as S from './Star.styled';
import IconStarDefault from '../../../assets/icons/IconStarDefault';
import IconStarFill from '../../../assets/icons/IconStarFill';
import { type ArticleType } from '../../../types/articleType';

interface StarProps {
  article: ArticleType;
  isScrap: boolean;
  toggleScrap: (article: ArticleType) => (isScrap: boolean) => void;
}

const Star = (props: StarProps) => {
  const { article, isScrap, toggleScrap } = props;
  return (
    <S.StarButton
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        toggleScrap(article)(isScrap);
      }}
    >
      {isScrap ? <IconStarFill /> : <IconStarDefault />}
    </S.StarButton>
  );
};

export default Star;
