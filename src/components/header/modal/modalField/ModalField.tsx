import React, { type ReactNode } from 'react';

import * as S from './ModalField.styled';

interface ModalFieldProps {
  title: string;
  children: ReactNode;
}

const ModalField = ({ title, children }: ModalFieldProps) => {
  return (
    <S.ModalFieldContainer>
      <S.FieldTitle>{title}</S.FieldTitle>
      {children}
    </S.ModalFieldContainer>
  );
};

export default ModalField;
