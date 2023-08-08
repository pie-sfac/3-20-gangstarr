import { styled } from 'styled-components';
import { color } from '../../../styles';
import { onClickDateArrow } from '../../../util/pickerUtils';
import { Icon } from '../../icon';
import { ItargetMonthTypes } from '../../../types/pickerTypes';
import { Dispatch, SetStateAction } from 'react';

const DatePickerHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
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

interface idatePickerHeaderProps {
  targetMonth: ItargetMonthTypes;
  setTargetMonth: Dispatch<SetStateAction<ItargetMonthTypes>>;
}

const DatePickerButtonHearder = ({
  targetMonth,
  setTargetMonth,
}: idatePickerHeaderProps) => {
  return (
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
  );
};

export default DatePickerButtonHearder;
