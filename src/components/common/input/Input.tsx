import React, { type ReactNode } from 'react';

import * as S from './Input.styled';

interface InputProps {
  id: string;
  placehoder: string;
  icon?: ReactNode;
}

const Input = (props: InputProps) => {
  const { id, placehoder, icon } = props;

  return (
    <S.InputWrapper>
      <S.Input id={id} placeholder={placehoder} />
      {icon !== undefined && <S.InputIcon htmlFor={id}>{icon}</S.InputIcon>}
    </S.InputWrapper>
  );
};

export default Input;
