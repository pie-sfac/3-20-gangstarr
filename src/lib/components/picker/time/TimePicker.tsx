import { styled } from 'styled-components';
import { Picker } from '../PickerComponents';
import { useState } from 'react';
import {
  IselectedTimeTypes,
  ItimepickerProps,
} from '../../../types/pickerTypes';
import { Button } from '../../button';
import TimePickerSelectBox from './TimePickerSelectBox';

const TimePickerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const TimePicker = ({
  prevSelectedTime,
  onClickConfirm,
  onClosePicker,
}: ItimepickerProps): JSX.Element => {
  const [currntSelectedTime, setCurrentSelectTime] = useState<
    IselectedTimeTypes | undefined
  >(prevSelectedTime);

  return (
    <Picker.PickerContainer>
      <Picker.PickerHeader>
        <TimePickerTitle>시간 설정</TimePickerTitle>
      </Picker.PickerHeader>
      <Picker.PickerContentsBox>
        <TimePickerSelectBox
          currntSelectedTime={currntSelectedTime}
          setCurrentSelectTime={setCurrentSelectTime}
        />
      </Picker.PickerContentsBox>
      <Picker.PickerButtonBox>
        <Button
          size='medium'
          onClick={() => {
            onClosePicker();
          }}>
          취소
        </Button>
        <Button
          size='medium'
          mode='enabled'
          onClick={() => {
            onClickConfirm(currntSelectedTime);
            onClosePicker();
          }}>
          확인
        </Button>
      </Picker.PickerButtonBox>
    </Picker.PickerContainer>
  );
};

export default TimePicker;
