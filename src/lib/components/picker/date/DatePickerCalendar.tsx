import { styled } from 'styled-components';
import {
  IdatePickerCalendarItemProps,
  IselectedTypes,
  ItargetMonthTypes,
} from '../../../types/pickerTypes';
import { color, font } from '../../../styles';
import { getCalendarDate } from '../../../util/pickerUtils';
import { Dispatch, SetStateAction } from 'react';

const DatePickerCalendarContainer = styled.div`
  padding: 12px 18px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 8px;
`;

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
      background: ${color.primary300};
      border-radius: 100%;
    `}
`;

interface DatePickerCalendarProps {
  targetMonth: ItargetMonthTypes;
  setTargetMonth: Dispatch<SetStateAction<ItargetMonthTypes>>;
  isSelected: IselectedTypes;
  setIsSelected: Dispatch<SetStateAction<IselectedTypes>>;
  size?: 'small' | 'large';
}

const DatePickerCalendar = ({
  targetMonth,
  setTargetMonth,
  isSelected,
  setIsSelected,
  size,
}: DatePickerCalendarProps) => {
  const { currentDate, calendarDate } = getCalendarDate(targetMonth, size);

  return (
    <DatePickerCalendarContainer>
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
              setTargetMonth({
                year: day.year,
                month: day.month,
              });
            }}>
            {day.date}
          </DatePickerCalendarItem>
        )),
      )}
    </DatePickerCalendarContainer>
  );
};

export default DatePickerCalendar;
