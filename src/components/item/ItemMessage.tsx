import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body4 } from '../typography';
import { IitemProps, IitemTemplateProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import { Item } from '.';

const ItemDate = styled.div`
  min-width: 85px;
`;

const ItemText = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemIcons = styled.div`
  display: flex;
  gap: 7px;
`;

const ItemContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

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
      <ItemContents>
        <ItemDate>
          <Body4>{date}</Body4>
        </ItemDate>
        <ItemText>
          <Body4>{memo}</Body4>
        </ItemText>
        <ItemIcons>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='onStar'></Icon>
          <Icon name='offStar'></Icon>
        </ItemIcons>
      </ItemContents>
    </Item.ItemContainer>
  );
};
