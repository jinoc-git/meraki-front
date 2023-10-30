import React from 'react';

import * as S from './NoFilterResult.styled';

const NoFilterResult = () => {
  return (
    <S.NoFilterResultContainer>
      <S.GuideBox>
        <S.GuideComment>필터 결과가 없습니다.</S.GuideComment>
      </S.GuideBox>
    </S.NoFilterResultContainer>
  );
};

export default NoFilterResult;
