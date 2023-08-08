import { Picker } from '../PickerComponents';
import { useEffect, useState } from 'react';
import { Button } from '../../button';
import { getCurrentDate } from '../../../util/pickerUtils';
import {
  IdatePickerProps,
  IselectedTypes,
  ItargetMonthTypes,
} from '../../../types/pickerTypes';
import DatePickerButtonHearder from './DatePickerButtonHearder';
import DatePickerHeader from './DatePickerHeader';
import DatePickerCalendar from './DatePickerCalendar';

const DatePicker = ({
  size,
  prevSelected,
  onClickConfirm,
  onClosePicker,
}: IdatePickerProps) => {
  const { year, month } = getCurrentDate();
  const [targetMonth, setTargetMonth] = useState<ItargetMonthTypes>({
    year,
    month,
  });
  const [isSelected, setIsSelected] = useState<IselectedTypes>({
    year: 0,
    month: 0,
    date: 0,
  });

  useEffect(() => {
    if (
      prevSelected &&
      /^(19\d{2}|2\d{3})\.([1-9]|1[0-2])\.(3[01]|[12][0-9]|[1-9]$)/gi.test(
        prevSelected,
      )
    ) {
      const prevDate = prevSelected.split('.');
      setIsSelected({
        year: Number(prevDate[0]),
        month: Number(prevDate[1]),
        date: Number(prevDate[2]),
      });
      setTargetMonth({
        year: Number(prevDate[0]),
        month: Number(prevDate[1]),
      });
    }
  }, []);

  return (
    <Picker.PickerContainer>
      <Picker.PickerHeader>
        <DatePickerButtonHearder
          targetMonth={targetMonth}
          setTargetMonth={setTargetMonth}
        />
      </Picker.PickerHeader>
      <Picker.PickerContentsBox>
        <DatePickerHeader />
        <DatePickerCalendar
          targetMonth={targetMonth}
          setTargetMonth={setTargetMonth}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          size={size}
        />
      </Picker.PickerContentsBox>
      <Picker.PickerButtonBox>
        <Button size='medium' onClick={onClosePicker}>
          취소
        </Button>
        <Button
          size='medium'
          mode='enabled'
          onClick={() => {
            if (isSelected.year !== 0) {
              onClickConfirm(
                `${isSelected.year}.${isSelected.month}.${isSelected.date}`,
              );
              onClosePicker();
            }
          }}>
          확인
        </Button>
      </Picker.PickerButtonBox>
    </Picker.PickerContainer>
  );
};

export default DatePicker;
