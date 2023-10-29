import React, { type ReactNode } from 'react';

import * as S from './Input.styled';

interface InputProps {
  id: string;
  placehoder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
}

const Input = (props: InputProps) => {
  const { id, placehoder, value, onChange, icon } = props;

  return (
    <S.InputWrapper>
      <S.Input
        id={id}
        placeholder={placehoder}
        onChange={onChange}
        value={value}
      />
      {icon !== undefined && <S.InputIcon htmlFor={id}>{icon}</S.InputIcon>}
    </S.InputWrapper>
  );
};

export default Input;
