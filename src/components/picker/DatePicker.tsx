import { styled } from 'styled-components';
import { Picker } from './PickerComponents';
import { Icon } from '../icon';
import { color, font } from '../../styles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../button';

const DatePickerHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  padding: 24px 20px 16px 20px;
  gap: 16px;

  & > div:nth-child(2) {
    height: 15px;
    border-left: 1px solid ${color.borderLine200};
    align-self: center;
  }
`;

const DatePickerHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DatePickerButton = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
`;

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return { year, month, date };
};

interface ItargetMonthTypes {
  year: number;
  month: number;
}

const getDate = (
  target: ItargetMonthTypes,
  type: 'first' | 'last' | 'lastMonth',
) => {
  switch (type) {
    case 'first':
      return new Date(target.year, target.month - 1);
    case 'last':
      return new Date(target.year, target.month, 0);
    case 'lastMonth':
      return new Date(
        target.month - 1 === 0 ? target.year - 1 : target.year,
        target.month - 1 === 0 ? 12 : target.month - 1,
        0,
      );
  }
};

const calculateYear = (target: ItargetMonthTypes, mode: 'prev' | 'next') => {
  switch (mode) {
    case 'prev':
      return target.month - 1 === 0 ? target.year - 1 : target.year;
    case 'next':
      return target.month + 1 === 13 ? target.year + 1 : target.year;
  }
};

const calculateMonth = (target: ItargetMonthTypes, mode: 'prev' | 'next') => {
  switch (mode) {
    case 'prev':
      return target.month - 1 === 0 ? 12 : target.month - 1;
    case 'next':
      return target.month + 1 === 13 ? 1 : target.month + 1;
  }
};

const getCalendarDate = (
  target: ItargetMonthTypes,
  mode: 'large' | 'small' = 'large',
) => {
  const firstDate = getDate(target, 'first');
  const lastDate = getDate(target, 'last');
  const currentDate = new Date();
  const calendarDate = [];
  let week = Array(7);
  let lastMonthLastDate = getDate(target, 'lastMonth').getDate();
  let nextMonthFirstDate = 1;
  let targetCurrentDay = firstDate.getDay();

  for (let i = 1; i < lastDate.getDate() + 1; i++) {
    week[targetCurrentDay] = {
      year: target.year,
      month: target.month,
      date: i,
    };

    if (targetCurrentDay === 6) {
      calendarDate.push(week);
      week = Array(7);
      targetCurrentDay = 0;
    } else {
      targetCurrentDay++;
    }
  }

  if (week[0]) calendarDate.push(week);

  for (let i = calendarDate[0].length - 1; i > -1; i--) {
    if (!calendarDate[0][i]) {
      calendarDate[0][i] = {
        year: calculateYear(target, 'prev'),
        month: calculateMonth(target, 'prev'),
        date: lastMonthLastDate,
      };
      lastMonthLastDate--;
    }
  }

  if (mode === 'large')
    for (let i = 0; i < calendarDate[calendarDate.length - 1].length; i++) {
      if (!calendarDate[calendarDate.length - 1][i]) {
        calendarDate[calendarDate.length - 1][i] = {
          year: calculateYear(target, 'next'),
          month: calculateMonth(target, 'next'),
          date: nextMonthFirstDate,
        };
        nextMonthFirstDate++;
      }
    }

  return {
    currentDate: {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
    },
    calendarDate,
  };
};

const onClickDateArrow = (
  action: 'prevyear' | 'nextyear' | 'prevmonth' | 'nextmonth',
  callback: Dispatch<SetStateAction<ItargetMonthTypes>>,
): void => {
  switch (action) {
    case 'prevyear':
      callback((prev) => {
        return {
          ...prev,
          year: prev.year - 1,
        };
      });
      break;
    case 'nextyear':
      callback((prev) => {
        return {
          ...prev,
          year: prev.year + 1,
        };
      });
      break;
    case 'prevmonth':
      callback((prev) => {
        return {
          year: calculateYear(prev, 'prev'),
          month: calculateMonth(prev, 'prev'),
        };
      });
      break;
    case 'nextmonth':
      callback((prev) => {
        return {
          year: calculateYear(prev, 'next'),
          month: calculateMonth(prev, 'next'),
        };
      });
      break;
  }
};

const DatePickerDayHearder = styled.div`
  height: 40px;
  border: 1px solid ${color.borderLine200};
  border-width: 1px 0 1px 0;
  padding: 10px 38.5px;
  background: ${color.fillGray50};
`;

const DatePickerDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 34px;
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeight400};
  color: ${color.textGray700};

  & > span:first-child {
    color: ${color.systemError};
  }
`;

const PickerButtonBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 36px 16px 36px;
`;

const DatePickerCalendar = styled.div`
  padding: 12px 18px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 8px;
`;

interface IdatePickerCalendarItemProps {
  $isCurrentMonth: boolean;
  $isToday: boolean;
  $isSelected: boolean;
}

const DatePickerCalendarItem = styled.p<IdatePickerCalendarItemProps>`
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeight400};
  color: ${({ $isCurrentMonth }) =>
    $isCurrentMonth ? color.textGray900 : color.textGray400};

  &:nth-child(7n - 6) {
    color: ${({ $isCurrentMonth }) =>
      $isCurrentMonth ? color.systemError : color.textGray400};
  }

  ${({ $isToday }) =>
    $isToday &&
    `
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        border: 1px solid ${color.primary300};
      }
    `}

  ${({ $isSelected }) =>
    $isSelected &&
    `
      position: relative;
      color: ${color.basicWhite} !important;

      &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        background: ${color.primary300};
        z-index: -1;
      }
    `}
`;

interface IdatePickerProps {
  prevSelected?: string;
  onClickConfirm: Dispatch<SetStateAction<string>>;
  onClosePicker: () => void;
}

const DatePicker = ({
  prevSelected,
  onClickConfirm,
  onClosePicker,
}: IdatePickerProps) => {
  const { year, month } = getCurrentDate();
  const [isSelected, setIsSelected] = useState({
    year: 0,
    month: 0,
    date: 0,
  });
  const [targetMonth, setTargetMonth] = useState<ItargetMonthTypes>({
    year,
    month,
  });
  const { currentDate, calendarDate } = getCalendarDate(targetMonth);

  useEffect(() => {
    if (prevSelected) {
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
        <DatePickerHeaderBox>
          <DatePickerHeaderItem>
            <DatePickerButton
              onClick={() => onClickDateArrow('prevyear', setTargetMonth)}>
              <Icon name='backSmall' />
            </DatePickerButton>
            <span>{targetMonth.year}년</span>
            <DatePickerButton
              onClick={() => onClickDateArrow('nextyear', setTargetMonth)}>
              <Icon name='nextSmall' />
            </DatePickerButton>
          </DatePickerHeaderItem>
          <div></div>
          <DatePickerHeaderItem>
            <DatePickerButton
              onClick={() => onClickDateArrow('prevmonth', setTargetMonth)}>
              <Icon name='backSmall' />
            </DatePickerButton>
            <span>{targetMonth.month}월</span>
            <DatePickerButton
              onClick={() => onClickDateArrow('nextmonth', setTargetMonth)}>
              <Icon name='nextSmall' />
            </DatePickerButton>
          </DatePickerHeaderItem>
        </DatePickerHeaderBox>
      </Picker.PickerHeader>
      <Picker.PickerContentsBox>
        <DatePickerDayHearder>
          <DatePickerDays>
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
          </DatePickerDays>
        </DatePickerDayHearder>
        <DatePickerCalendar>
          {calendarDate?.map((week) =>
            week.map((day, index) => (
              <DatePickerCalendarItem
                $isCurrentMonth={day.month === targetMonth.month}
                $isToday={
                  day.year === currentDate.year &&
                  day.month === currentDate.month &&
                  day.date === currentDate.date
                }
                $isSelected={
                  day.year === isSelected.year &&
                  day.month === isSelected.month &&
                  day.date === isSelected.date
                }
                key={index}
                onClick={() => {
                  setIsSelected(day);
                  setTargetMonth((prev) => {
                    return { ...prev, month: day.month };
                  });
                }}>
                {day.date}
              </DatePickerCalendarItem>
            )),
          )}
        </DatePickerCalendar>
      </Picker.PickerContentsBox>
      <PickerButtonBox>
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
      </PickerButtonBox>
    </Picker.PickerContainer>
  );
};

export default DatePicker;
