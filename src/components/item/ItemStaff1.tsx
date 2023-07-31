import { Graphic } from '../icon';
import { Body2, Body4 } from '../typography';
import { getItemStyleOptions } from '../../util';
import { IitemProps, IitemTemplateProps } from '../../types/itemTypes';
import { Item } from '.';

export const ItemStaff1 = ({
  fill,
  name = '김직원',
  phone = '010 - 1234 - 5678',
  memo = '메모가 없습니다.',
}: {
  fill?: IitemProps['fill'];
  name?: IitemTemplateProps['name'];
  phone?: IitemTemplateProps['phone'];
  memo?: IitemTemplateProps['memo'];
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
            <Body4>1000명</Body4>
            <Body4>4.2/5.0 점</Body4>
          </Item.ItemText>
        </Item.ItemContent>
        <Item.ItemStaffInfo>
          <Body4>{memo}</Body4>
        </Item.ItemStaffInfo>
      </Item.ItemContents>
    </Item.ItemContainer>
  );
};
