import { styled } from 'styled-components';
import { Body4 } from '../typography';
import { color, font } from '../../styles';
import {
  IitemProps,
  IitemStyleProps,
  IitemTemplateProps,
} from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';

const ItemDate = styled.div`
  min-width: 71px;
`;

const ItemDescription = styled.div``;

const ItemCount = styled.div`
  color: ${color.primary500};
`;

const ItemText = styled.div`
  display: flex;
  gap: 16px;
`;

const ItemContents = styled.div`
  display: flex;
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

export const ItemTherapyCenter = ({
  fill,
  date = '2023 - 00 - 00',
  description = '운동 수행 영상',
}: {
  fill?: IitemProps['fill'];
  date?: IitemTemplateProps['date'];
  description?: IitemTemplateProps['description'];
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
          <ItemDescription>
            <Body4>{description}</Body4>
          </ItemDescription>
          <ItemCount>
            <Body4>+0</Body4>
          </ItemCount>
        </ItemText>
      </ItemContents>
    </ItemContainer>
  );
};
