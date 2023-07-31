import { Body4 } from '../typography';
import { IitemProps, IitemTemplateProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';

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
    <Item.ItemContainer
      $styleOptions={getItemStyleOptions(fill)}
      $isOutline={fill === 'contained'}>
      <Item.ItemTherapyCenterContents>
        <Item.ItemDate>
          <Body4>{date}</Body4>
        </Item.ItemDate>
        <Item.ItemTherapyCenterText>
          <Item.ItemDescription>
            <Body4>{description}</Body4>
          </Item.ItemDescription>
          <Item.ItemCount>
            <Body4>+0</Body4>
          </Item.ItemCount>
        </Item.ItemTherapyCenterText>
      </Item.ItemTherapyCenterContents>
    </Item.ItemContainer>
  );
};
