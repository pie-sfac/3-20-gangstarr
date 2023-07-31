import { Icon } from '../icon';
import { Body4 } from '../typography';
import { IitemProps, IitemTemplateProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';

export const ItemMessage = ({
  fill,
  memo = '메모가 없습니다.',
  date = '2023 - 00 - 00',
}: {
  fill?: IitemProps['fill'];
  memo?: IitemTemplateProps['memo'];
  date?: IitemTemplateProps['date'];
}): JSX.Element => {
  return (
    <Item.ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <Item.ItemMessageContents>
        <Item.ItemDate>
          <Body4>{date}</Body4>
        </Item.ItemDate>
        <Item.ItemMessageText>
          <Body4>{memo}</Body4>
        </Item.ItemMessageText>
        <Item.ItemIcons>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='offStar'></Icon>
        </Item.ItemIcons>
      </Item.ItemMessageContents>
    </Item.ItemContainer>
  );
};
