import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';

import { ko } from 'date-fns/locale';

import IconCalendar from '../../../../assets/icons/IconCalendar';
import ModalField from '../modalField/ModalField';

registerLocale('ko', ko);

interface SelectDateProps {
  selectedDate: Date | null;
  selectDateHandler: (date: Date | null) => void;
}

const SelectDate = (props: SelectDateProps) => {
  const { selectedDate, selectDateHandler } = props;

  return (
    <ModalField title="날짜">
      <DatePicker
        dateFormat="yyyy.MM.dd"
        locale={'ko'}
        shouldCloseOnSelect
        className="date-picker"
        id="date-picker"
        selected={selectedDate}
        maxDate={new Date()}
        onChange={(date) => {
          selectDateHandler(date);
        }}
        placeholderText="날짜를 선택해주세요."
        showIcon
        icon={
          <label htmlFor="date-picker">
            <IconCalendar color="#C4C4C4" />
          </label>
        }
      />
    </ModalField>
  );
};

export default React.memo(SelectDate);
