import { Body4 } from '../typography';
import { IitemProps, IitemTemplateProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';
import { Label } from '../label';

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
    <Item.ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <Item.ItemRecordContents>
        <Item.ItemDate>
          <Body4>{date}</Body4>
        </Item.ItemDate>
        <Item.ItemRecordText>
          <Body4>{memo}</Body4>
        </Item.ItemRecordText>
        <Item.ItemLabel>
          <Label>{trainer}</Label>
        </Item.ItemLabel>
      </Item.ItemRecordContents>
    </Item.ItemContainer>
  );
};
