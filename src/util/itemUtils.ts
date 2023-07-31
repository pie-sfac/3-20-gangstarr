import { itemStyles } from '../styles/item';
import { IitemProps, IitemStyleProps } from '../types/itemTypes';

export const getItemStyleOptions = (
  fill: IitemProps['fill'] = 'contained',
): IitemStyleProps => {
  const styleItemOptions = { ...itemStyles[fill] };
  return { ...styleItemOptions };
};
