/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import * as S from './Modal.styled';
import SearchHeadline from './searchHeadline/SearchHeadline';
import SelectCountry from './selectCountry/SelectCountry';
import SelectDate from './selectDate/SelectDate';
import { modalStore } from '../../../store/modalStore';
import Button from '../../common/button/Button';

const Modal = () => {
  const closeModal = modalStore((state) => state.closeModal);
  const [searchValue, setSearchValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);

  const modalRef = useRef<HTMLFormElement | null>(null);

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

  const onClickModalOutside = (e: MouseEvent) => {
    const isOutside =
      modalRef.current !== null &&
      !modalRef.current.contains(e.target as HTMLElement);
    if (isOutside) closeModal();
  };

  const onClickSubmitBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickModalOutside);

    return () => {
      document.removeEventListener('mousedown', onClickModalOutside);
    };
  }, []);

  return createPortal(
    <S.ModalContainer>
      <S.ModalForm ref={modalRef}>
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
        <Button type="submit" useTo="normal" onClick={onClickSubmitBtn}>
          필터 적용하기
        </Button>
      </S.ModalForm>
    </S.ModalContainer>,
    document.getElementById('modal-portal') as HTMLElement,
  );
};

export default Modal;
