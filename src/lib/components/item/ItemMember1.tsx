import { Graphic } from '../icon';
import { Body2, Body4 } from '../typography';
import { Label } from '../label';
import { IitemTemplateProps, IitemProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';

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
            <Body4>{gender}</Body4>
            <Body4>22.00.00 ~ 22.00.00</Body4>
            <Body4>100회 / 100회</Body4>
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
