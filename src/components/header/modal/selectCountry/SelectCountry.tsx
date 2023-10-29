import React from 'react';
import uuid from 'react-uuid';

import * as S from './SelectCountrt.styled';
import { countryList } from '../../../../constant/countryList';
import Button from '../../../common/button/Button';
import ModalField from '../modalField/ModalField';

interface SelectCountryProps {
  selectedCountry: string[];
  onClickCountry: (value: string) => () => void;
}

const SelectCountry = (props: SelectCountryProps) => {
  const { selectedCountry, onClickCountry } = props;

  return (
    <ModalField title="국가">
      <S.CountryWrapper>
        {countryList.map(({ country, value }) => {
          const isActive = Boolean(
            selectedCountry.find((country) => country === value),
          );
          return (
            <Button
              key={uuid()}
              type="button"
              useTo="select"
              isActive={isActive}
              onClick={onClickCountry(value)}
            >
              {country}
            </Button>
          );
        })}
      </S.CountryWrapper>
    </ModalField>
  );
};

export default React.memo(SelectCountry);
