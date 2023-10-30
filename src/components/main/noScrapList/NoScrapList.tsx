import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './NoScrapList.styled';
import IconNoScrap from '../../../assets/icons/IconNoScrap';
import Button from '../../common/button/Button';

const NoScrapList = () => {
  const navigate = useNavigate();

  const onClickGoToScrapBtn = () => {
    navigate('/');
  };
  return (
    <S.NoScrapListContainer>
      <h2>스크랩 리스트</h2>
      <S.GuideBox>
        <IconNoScrap />
        <S.GuideComment>저장된 스크랩이 없습니다.</S.GuideComment>
        <Button type="button" useTo="normal" onClick={onClickGoToScrapBtn}>
          스크랩 하러 가기
        </Button>
      </S.GuideBox>
    </S.NoScrapListContainer>
  );
};

export default NoScrapList;
