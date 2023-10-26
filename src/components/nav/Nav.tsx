import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Nav.styled';
import IconHome from '../../assets/icons/IconHome';
import IconScrap from '../../assets/icons/IconScrap';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <S.NavContainer>
      <S.NavBtnWrapper>
        <li>
          <S.NavLink to={'/'} color={pathname === '/' ? '#FFF' : '#6D6D6D'}>
            <IconHome color={pathname === '/' ? '#FFF' : '#6D6D6D'} />홈
          </S.NavLink>
        </li>
        <li>
          <S.NavLink
            to={'/scrap'}
            color={pathname === '/scrap' ? '#FFF' : '#6D6D6D'}
          >
            <IconScrap color={pathname === '/scrap' ? '#FFF' : '#6D6D6D'} />
            스크랩
          </S.NavLink>
        </li>
      </S.NavBtnWrapper>
    </S.NavContainer>
  );
};

export default Nav;
