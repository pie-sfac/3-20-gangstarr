import { styled } from 'styled-components';
import { Graphic } from '../icon';
import { Body2, Body4 } from '../typography';
import { Label } from '../label';
import {
  IitemTemplateProps,
  IitemProps,
  IitemStyleProps,
} from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { color, font } from '../../styles';

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ItemProfile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  > ${Body2} {
    width: 64px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  gap: 32px;
`;

const ItemText = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const ItemLabelArea = styled.div`
  display: flex;
  width: 81px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ItemContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemDate = styled.div``;

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

export const ItemMember1 = ({
  fill,
  name = '김아무개',
  trainer = '김파이',
  gender = '여',
  date = '2023-00-00',
}: {
  fill?: IitemProps['fill'];
  name?: IitemTemplateProps['name'];
  trainer?: IitemTemplateProps['trainer'];
  gender?: IitemTemplateProps['gender'];
  date?: IitemTemplateProps['date'];
}): JSX.Element => {
  return (
    <ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <ItemContents>
        <ItemContent>
          <ItemProfile>
            <Graphic name='profile24px'></Graphic>
            <Body2>{name}</Body2>
          </ItemProfile>
          <ItemText>
            <Body4>{gender}</Body4>
            <Body4>22.00.00 ~ 22.00.00</Body4>
            <Body4>100회 / 100회</Body4>
          </ItemText>
        </ItemContent>
        <ItemInfo>
          <ItemLabelArea>
            <Label background='gray' color='gray' size='small' font='caption1'>
              {trainer}
            </Label>
          </ItemLabelArea>
          <ItemDate>
            <Body4>{date}</Body4>
          </ItemDate>
        </ItemInfo>
      </ItemContents>
    </ItemContainer>
  );
};
