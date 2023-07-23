import { buttonStyles } from '../styles';
import { IbuttonProps, IbuttonStyleProps } from '../types/buttonTypes';

export const getStyleOptions = (
  size: IbuttonProps['size'] = 'large',
  fill: IbuttonProps['fill'] = 'contained',
  mode: IbuttonProps['mode'] = 'nomal',
): IbuttonStyleProps => {
  const styleOptios = {
    ...buttonStyles[size],
    ...buttonStyles[mode][fill],
  };

  if (fill === 'outline')
    return { ...styleOptios, ...buttonStyles[fill][mode] };
  else return { ...styleOptios, ...buttonStyles[fill] };
};
