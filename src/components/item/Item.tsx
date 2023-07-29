import { styled } from 'styled-components';
import { color, font } from '../../styles';
import { IitemProps, IitemStyleProps } from '../../types/itemTypes';
import { getItemStyleOptions } from '../../util';
import {
  ItemMember1,
  ItemMember3,
  ItemStaff1,
  ItemRecord,
  ItemTherapyCenter,
  ItemMessage,
} from '.';

const ItemContainer = styled.div<{
  $styleOptions: IitemStyleProps;
  $isOutline: boolean;
  $mode: string;
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

const ItemTemplate = ({ mode }: IitemProps): JSX.Element => {
  switch (mode) {
    case 'member1':
      return <ItemMember1></ItemMember1>;
      break;
    case 'member3':
      return <ItemMember3></ItemMember3>;
      break;
    case 'staff1':
      return <ItemStaff1></ItemStaff1>;
      break;
    case 'record':
      return <ItemRecord></ItemRecord>;
      break;
    case 'therapyCenter':
      return <ItemTherapyCenter></ItemTherapyCenter>;
      break;
    case 'message':
      return <ItemMessage></ItemMessage>;
      break;
  }
};

export const Item = ({ mode, fill }: IitemProps): JSX.Element => {
  return (
    <>
      <ItemContainer
        $styleOptions={getItemStyleOptions(fill)}
        $isOutline={fill === 'contained'}
        $mode={mode}>
        <ItemTemplate mode={mode}></ItemTemplate>
      </ItemContainer>
    </>
  );
};
