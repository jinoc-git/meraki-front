import React from 'react';

import * as S from './Header.styled';
import IconBattery from '../../assets/icons/IconBattery';
import IconCellular from '../../assets/icons/IconCellular';
import IconWiFi from '../../assets/icons/IconWiFi';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.TimeParagraph>9:41</S.TimeParagraph>
      <S.IconWrapper>
        <IconCellular />
        <IconWiFi />
        <IconBattery />
      </S.IconWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
