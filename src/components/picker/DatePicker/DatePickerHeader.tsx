import { styled } from 'styled-components';
import { color, font } from '../../../styles';

const DatePickerDayHearderContainer = styled.div`
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

const DatePickerHeader = () => {
  return (
    <DatePickerDayHearderContainer>
      <DatePickerDays>
        <span>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </DatePickerDays>
    </DatePickerDayHearderContainer>
  );
};

export default DatePickerHeader;
