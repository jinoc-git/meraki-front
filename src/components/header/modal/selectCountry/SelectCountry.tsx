import React from 'react';
import uuid from 'react-uuid';

import * as S from './SelectCountrt.styled';
import { COUNTRY_LIST } from '../../../../constant/countryList';
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
        {COUNTRY_LIST.map(({ country }) => {
          const isActive = Boolean(
            selectedCountry.find((countryName) => countryName === country),
          );
          return (
            <Button
              key={uuid()}
              type="button"
              useTo="select"
              isActive={isActive}
              onClick={onClickCountry(country)}
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
