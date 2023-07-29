import { styled } from 'styled-components';
import { Body4 } from '../typography';
import { Label } from '../label';
import {
  IitemProps,
  IitemStyleProps,
  IitemTemplateProps,
} from '../../types/itemTypes';
import { color, font } from '../../styles';
import { getItemStyleOptions } from '../../util';

const ItemDate = styled.div`
  min-width: 85px;
`;

const ItemText = styled.div`
  width: 100%;
`;

const ItemLabel = styled.div``;

const ItemContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

const ItemContainer = styled.div<{
  $styleOptions: IitemStyleProps;
  $isOutline: boolean;
}>`
  display: flex;
  max-width: 1024px;
  width: 100%;
  height: 48px;
  padding: 10px 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: ${({ $styleOptions }) => $styleOptions.border};
  background: #fff;
  color: ${color.textGray900};
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeightRegular};
  box-sizing: border-box;
`;

export const ItemRecord = ({
  fill,
  date = '2023 - 00 - 00',
  memo = '메모가 없습니다.',
  trainer = '김아무개',
}: {
  fill?: IitemProps['fill'];
  date?: IitemTemplateProps['date'];
  memo?: IitemTemplateProps['memo'];
  trainer?: IitemTemplateProps['trainer'];
}): JSX.Element => {
  return (
    <ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <ItemContents>
        <ItemDate>
          <Body4>{date}</Body4>
        </ItemDate>
        <ItemText>
          <Body4>{memo}</Body4>
        </ItemText>
        <ItemLabel>
          <Label>{trainer}</Label>
        </ItemLabel>
      </ItemContents>
    </ItemContainer>
  );
};
