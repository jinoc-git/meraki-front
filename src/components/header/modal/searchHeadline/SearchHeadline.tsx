import React from 'react';

import Input from '../../../common/input/Input';
import ModalField from '../modalField/ModalField';

interface SearchHeadlineProps {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchHeadline = (props: SearchHeadlineProps) => {
  const { searchValue, onChange } = props;

  return (
    <ModalField title="헤드라인">
      <Input
        id="search-headline"
        placehoder="검색하실 헤드라인을 입력해주세요."
        value={searchValue}
        onChange={onChange}
      ></Input>
    </ModalField>
  );
};

export default React.memo(SearchHeadline);
