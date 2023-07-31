import { styled } from 'styled-components';
import { IitemStyleProps } from '../../types/itemTypes';
import { color, font } from '../../styles';
import { Body2 } from '../typography';

export const Item = {
  ItemInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
  `,

  ItemStaffInfo: styled.div`
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  ItemProfile: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    > ${Body2} {
      width: 64px;
    }
  `,

  ItemContent: styled.div`
    display: flex;
    gap: 32px;
  `,

  ItemText: styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
  `,

  ItemTherapyCenterText: styled.div`
    display: flex;
    gap: 16px;
  `,

  ItemRecordText: styled.div`
    width: 100%;
  `,

  ItemMessageText: styled.div`
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  ItemLabelArea: styled.div`
    display: flex;
    width: 81px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  ItemLabel: styled.div``,

  ItemIcons: styled.div`
    display: flex;
    gap: 7px;
  `,

  ItemContents: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  ItemRecordContents: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 32px;
  `,

  ItemMessageContents: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 32px;
  `,

  ItemTherapyCenterContents: styled.div`
    display: flex;
    width: 100%;
    gap: 32px;
  `,

  ItemDate: styled.div`
    min-width: 85px;
  `,

  ItemCount: styled.div`
    color: ${color.primary500};
  `,

  ItemDescription: styled.div``,

  ItemContainer: styled.div<{
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
  `,
};
