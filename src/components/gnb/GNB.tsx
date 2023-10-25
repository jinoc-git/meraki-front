import React from 'react';

import * as S from './GNB.styled';
import IconBattery from '../../assets/icons/IconBattery';
import IconCellular from '../../assets/icons/IconCellular';
import IconWiFi from '../../assets/icons/IconWiFi';

const Header = () => {
  return (
    <S.GNBContainer>
      <S.TimeParagraph>9:41</S.TimeParagraph>
      <S.IconWrapper>
        <IconCellular />
        <IconWiFi />
        <IconBattery />
      </S.IconWrapper>
    </S.GNBContainer>
  );
};

export default Header;
