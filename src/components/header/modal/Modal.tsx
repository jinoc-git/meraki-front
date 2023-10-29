import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import * as S from './Modal.styled';
import SearchHeadline from './searchHeadline/SearchHeadline';
import SelectCountry from './selectCountry/SelectCountry';
import SelectDate from './selectDate/SelectDate';
import Button from '../../common/button/Button';

const Modal = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);

  const onChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [],
  );

  const selectDateHandler = useCallback((date: Date | null) => {
    setSelectedDate(date);
  }, []);

  const onClickCountry = useCallback(
    (value: string) => () => {
      const isChecked = Boolean(
        selectedCountry.find((country) => country === value),
      );
      if (isChecked) {
        const newSelectedCountry = selectedCountry.filter(
          (country) => country !== value,
        );
        setSelectedCountry(newSelectedCountry);
      } else {
        setSelectedCountry((prev) => [...prev, value]);
      }
    },
    [selectedCountry],
  );

  return createPortal(
    <S.ModalContainer>
      <S.ModalForm>
        <SearchHeadline
          searchValue={searchValue}
          onChange={onChangeInputValue}
        />
        <SelectDate
          selectedDate={selectedDate}
          selectDateHandler={selectDateHandler}
        />
        <SelectCountry
          selectedCountry={selectedCountry}
          onClickCountry={onClickCountry}
        />
        <Button type="submit" useTo="normal">
          필터 적용하기
        </Button>
      </S.ModalForm>
    </S.ModalContainer>,
    document.getElementById('modal-portal') as HTMLElement,
  );
};

export default Modal;
