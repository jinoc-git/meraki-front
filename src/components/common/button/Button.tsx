import React, { type ReactNode } from 'react';

import * as S from './Button.styled';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  useTo: 'normal' | 'select';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive?: boolean;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { type, useTo, onClick, isActive, children } = props;
  return (
    <S.Button type={type} onClick={onClick} $useTo={useTo} $isActive={isActive}>
      {children}
    </S.Button>
  );
};

export default Button;
