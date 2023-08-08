import { styled } from 'styled-components';
import { color, font } from '../../styles';

export const Picker = {
  PickerContainer: styled.div`
    width: 372px;
    border-radius: 10px;
  `,
  PickerHeader: styled.div`
    font-size: ${font.fontSize.fontSize16};
    font-weight: ${font.fontWeight.fontWeight700};
    color: ${color.textGray900};
  `,
  PickerContentsBox: styled.div``,
};

export const PickerButtonBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 36px 16px 36px;
`;
