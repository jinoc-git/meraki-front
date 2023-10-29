import React from 'react';

import * as S from './Filter.styled';
import IconCalendar from '../../../assets/icons/IconCalendar';
import IconSearch from '../../../assets/icons/IconSearch';
import { modalStore } from '../../../store/modalStore';
import Modal from '../modal/Modal';

const Filter = () => {
  const { isOpen, openModal } = modalStore();

  return (
    <S.FilterContainer>
      <h1>뉴욕 타임즈</h1>
      <S.FilterListWrapper>
        <S.FilterItem $isActive={true} onClick={openModal}>
          <IconSearch color="#6D6D6D" />
          <p>전체 헤드라인</p>
        </S.FilterItem>
        <S.FilterItem $isActive={false} onClick={openModal}>
          <IconCalendar color="#6D6D6D" />
          <p>전체 날짜</p>
        </S.FilterItem>
        <S.FilterItem $isActive={true} onClick={openModal}>
          <p>전체 국가</p>
        </S.FilterItem>
      </S.FilterListWrapper>
      {isOpen && <Modal />}
    </S.FilterContainer>
  );
};

export default Filter;
