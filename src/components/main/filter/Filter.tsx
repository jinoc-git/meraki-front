import React from 'react';

import * as S from './Filter.styled';
import IconCalendar from '../../../assets/icons/IconCalendar';
import IconSearch from '../../../assets/icons/IconSearch';
import Button from '../../common/button/Button';

const Filter = () => {
  const openModal = () => {};
  return (
    <S.FilterContainer>
      <S.FilterBtnWrapper>
        <li>
          <Button
            type="button"
            useTo="filter"
            withIcon={<IconSearch />}
            onClick={openModal}
          >
            전체 헤드라인
          </Button>
        </li>
        <li>
          <Button
            type="button"
            useTo="filter"
            withIcon={<IconCalendar color='#6D6D6D' />}
            onClick={openModal}
          >
            전체 날짜
          </Button>
        </li>
        <li>
          <Button type="button" useTo="filter" onClick={openModal}>
            전체 국가
          </Button>
        </li>
      </S.FilterBtnWrapper>
    </S.FilterContainer>
  );
};

export default Filter;
