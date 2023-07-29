import { styled } from 'styled-components';
import { Graphic } from '../icon';
import { Body2, Body4 } from '../typography';
import { getItemStyleOptions } from '../../util';
import { color, font } from '../../styles';
import {
  IitemProps,
  IitemStyleProps,
  IitemTemplateProps,
} from '../../types/itemTypes';

const ItemInfo = styled.div`
  display: block;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
            <Body4>1000명</Body4>
            <Body4>4.2/5.0 점</Body4>
          </ItemText>
        </ItemContent>
        <ItemInfo>
          <Body4>{memo}</Body4>
        </ItemInfo>
      </ItemContents>
    </ItemContainer>
  );
};
