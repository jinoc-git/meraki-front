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

  const isFilteringHeadline = page[currentPage].headline !== '';
  const isFilteringDate = page[currentPage].date !== null;
  const isFilteringCountry = page[currentPage].countryList.length !== 0;

  const currentHeadline = isFilteringHeadline
    ? page[currentPage].headline
    : '전체 헤드라인';

  const currentDate = isFilteringDate
    ? format(page[currentPage].date as Date, 'yyyy.MM.dd')
    : '전체 날짜';

  const currentCountryList = isFilteringCountry
    ? changeFormatCountryList(page[currentPage].countryList)
    : '전체 국가';

  return (
    <S.FilterContainer>
      <h1>뉴욕 타임즈</h1>
      <S.FilterListWrapper>
        <S.FilterItem $isActive={isFilteringHeadline} onClick={openModal}>
          <IconSearch color={isFilteringHeadline ? '#3478F6' : '#6D6D6D'} />
          <S.FilterHeadline>{currentHeadline}</S.FilterHeadline>
        </S.FilterItem>
        <S.FilterItem $isActive={isFilteringDate} onClick={openModal}>
          <IconCalendar color={isFilteringDate ? '#3478F6' : '#6D6D6D'} />
          <S.FilterDate>{currentDate}</S.FilterDate>
        </S.FilterItem>
        <S.FilterItem $isActive={isFilteringCountry} onClick={openModal}>
          <p>{currentCountryList}</p>
        </S.FilterItem>
      </S.FilterListWrapper>
    </S.FilterContainer>
  );
};

export default React.memo(Filter);
