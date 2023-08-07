import { Graphic, Icon } from '../icon';
import { Body2, Body4 } from '../typography';
import { Label } from '../label';
import { IitemTemplateProps, IitemProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';

export const ItemMember3 = ({
  fill,
  name = '김아무개',
  phone = '010 - 1234 - 5678',
  trainer = '김파이',
  date = '2023-00-00',
}: {
  fill?: IitemProps['fill'];
  name?: IitemTemplateProps['name'];
  phone?: IitemTemplateProps['phone'];
  trainer?: IitemTemplateProps['trainer'];
  date?: IitemTemplateProps['date'];
}): JSX.Element => {
  return (
    <Item.ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <Item.ItemContents>
        <Item.ItemContent>
          <Item.ItemProfile>
            <Graphic name='profile24px'></Graphic>
            <Body2>{name}</Body2>
          </Item.ItemProfile>
          <Item.ItemText>
            <Body4>{phone}</Body4>
            <Body4>
              <Icon name='onStar'></Icon>
              <Icon name='onStar'></Icon>
              <Icon name='onStar'></Icon>
              <Icon name='halfStar'></Icon>
              <Icon name='offStar'></Icon>
            </Body4>
            <Body4>3.5/5.0 점</Body4>
          </Item.ItemText>
        </Item.ItemContent>
        <Item.ItemInfo>
          <Item.ItemLabelArea>
            <Label>{trainer}</Label>
          </Item.ItemLabelArea>
          <Item.ItemDate>
            <Body4>{date}</Body4>
          </Item.ItemDate>
        </Item.ItemInfo>
      </Item.ItemContents>
    </Item.ItemContainer>
  );
};
