import React from 'react';
import { useLocation } from 'react-router-dom';

import { format } from 'date-fns';

import * as S from './Filter.styled';
import IconCalendar from '../../../assets/icons/IconCalendar';
import IconSearch from '../../../assets/icons/IconSearch';
import { filterStore } from '../../../store/filterStore';
import { modalStore } from '../../../store/modalStore';
import { changeFormatCountryList } from '../../../utils/changeFormatCountryList';

const Filter = () => {
  const { pathname } = useLocation();
  const currentPage = pathname === '/' ? 'home' : 'scrap';

  const { openModal } = modalStore();
  const page = filterStore((state) => state.page);

  const headlineIsActive = page[currentPage].headline !== '';
  const dateIsActive = page[currentPage].date !== null;
  const countryIsActive = page[currentPage].countryList.length !== 0;

  const currentHeadline = headlineIsActive
    ? page[currentPage].headline
    : '전체 헤드라인';

  const currentDate = dateIsActive
    ? format(page[currentPage].date as Date, 'yyyy.M.dd')
    : '전체 날짜';

  const currentCountryList = countryIsActive
    ? changeFormatCountryList(page[currentPage].countryList)
    : '전체 국가';

  return (
    <S.FilterContainer>
      <h1>뉴욕 타임즈</h1>
      <S.FilterListWrapper>
        <S.FilterItem $isActive={headlineIsActive} onClick={openModal}>
          <IconSearch color={headlineIsActive ? '#3478F6' : '#6D6D6D'} />
          <S.FilterHeadline>{currentHeadline}</S.FilterHeadline>
        </S.FilterItem>
        <S.FilterItem $isActive={dateIsActive} onClick={openModal}>
          <IconCalendar color={dateIsActive ? '#3478F6' : '#6D6D6D'} />
          <S.FilterDate>{currentDate}</S.FilterDate>
        </S.FilterItem>
        <S.FilterItem $isActive={countryIsActive} onClick={openModal}>
          <p>{currentCountryList}</p>
        </S.FilterItem>
      </S.FilterListWrapper>
    </S.FilterContainer>
  );
};

export default Filter;
