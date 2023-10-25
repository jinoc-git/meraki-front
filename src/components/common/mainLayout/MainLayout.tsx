import React, { type ReactNode } from 'react';

import * as S from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <S.MainLayoutContainer>{children}</S.MainLayoutContainer>;
};

export default MainLayout;
