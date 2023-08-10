import { styled } from 'styled-components';
import { color, font } from '../../../styles';
import TimePickerSelect from './TimePickerSelect';
import {
  IselectedTimeTypes,
  ItimepickerProps,
} from '../../../types/pickerTypes';

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 56px;
    width: 100%;
    background: ${color.fillPrimary100};
  }
`;

const TimePickerText = styled.span`
  font-size: ${font.fontSize.fontSize16};
  color: ${color.gray900};
  z-index: 1;
`;

const TimePickerSelectBox = ({
  currntSelectedTime,
  setCurrentSelectTime,
}: {
  currntSelectedTime: IselectedTimeTypes | undefined;
  setCurrentSelectTime: ItimepickerProps['onClickConfirm'];
}) => {
  const currentTime = new Date();

  return (
    <TimePickerContainer>
      <TimePickerSelect
        mode={'hour'}
        size={24}
        initalTime={
          currntSelectedTime?.hour || currntSelectedTime?.hour === 0
            ? currntSelectedTime?.hour
            : currentTime.getHours()
        }
        setSelectTime={setCurrentSelectTime}
      />
      <TimePickerText>시</TimePickerText>
      <TimePickerSelect
        mode={'minute'}
        size={60}
        initalTime={
          currntSelectedTime?.minute || currntSelectedTime?.minute === 0
            ? currntSelectedTime.minute
            : currentTime.getMinutes()
        }
        setSelectTime={setCurrentSelectTime}
      />
      <TimePickerText>분</TimePickerText>
    </TimePickerContainer>
  );
};

export default TimePickerSelectBox;
