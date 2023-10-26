import React, { type ReactNode } from 'react';

import * as S from './Button.styled';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  useTo: 'normal' | 'filter' | 'select';
  withIcon?: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { type, useTo, withIcon, onClick, isActive, children } = props;
  return (
    <S.Button type={type} onClick={onClick} $useTo={useTo} isActive={isActive}>
      {withIcon}
      {children}
    </S.Button>
  );
};

export default Button;
