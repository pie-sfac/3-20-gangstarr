import { styled } from 'styled-components';
import { Graphic, Icon } from '../icon';
import { Body2, Body4 } from '../typography';
import { Label } from '../label';
import {
  IitemTemplateProps,
  IitemProps,
  IitemStyleProps,
} from '../../types/itemTypes';
import { color, font } from '../../styles';
import { getItemStyleOptions } from '../../util';

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

const ItemContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

export const ItemMember3 = ({
  fill,
  name = '김아무개',
  phone = '010 - 1234 - 5678',
  trainer = '김파이',
  date = '2023-00-00',
}: {
  fill: IitemProps['fill'];
  name?: IitemTemplateProps['name'];
  phone?: IitemTemplateProps['phone'];
  trainer?: IitemTemplateProps['trainer'];
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
            <Body4>{phone}</Body4>
            <Body4>
              <Icon name='onStar'></Icon>
              <Icon name='onStar'></Icon>
              <Icon name='onStar'></Icon>
              <Icon name='halfStar'></Icon>
              <Icon name='offStar'></Icon>
            </Body4>
            <Body4>3.5/5.0 점</Body4>
          </ItemText>
        </ItemContent>
        <ItemInfo>
          <ItemLabelArea>
            <Label>{trainer}</Label>
          </ItemLabelArea>
          <ItemDate>
            <Body4>{date}</Body4>
          </ItemDate>
        </ItemInfo>
      </ItemContents>
    </ItemContainer>
  );
};
