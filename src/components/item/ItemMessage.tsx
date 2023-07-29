import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body4 } from '../typography';
import {
  IitemProps,
  IitemStyleProps,
  IitemTemplateProps,
} from '../../types/itemTypes';
import { color, font } from '../../styles';
import { getItemStyleOptions } from '../../util';

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

export const ItemMessage = ({
  fill,
  memo = '메모가 없습니다.',
  date = '2023 - 00 - 00',
}: {
  fill?: IitemProps['fill'];
  name?: IitemTemplateProps['name'];
  phone?: IitemTemplateProps['phone'];
  memo?: IitemTemplateProps['memo'];
  date?: IitemTemplateProps['date'];
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
    </ItemContainer>
  );
};
