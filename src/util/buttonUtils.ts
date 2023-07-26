import { buttonStyles } from '../components/button/button';
import { IbuttonProps, IbuttonStyleProps } from '../types/buttonTypes';

export const getButtonStyleOptions = (
  size: IbuttonProps['size'] = 'large',
  fill: IbuttonProps['fill'] = 'contained',
  mode: IbuttonProps['mode'] = 'normal',
): IbuttonStyleProps => {
  const styleOptios = {
    ...buttonStyles[size],
    ...buttonStyles[mode][fill],
  };

  if (fill === 'outline')
    return { ...styleOptios, ...buttonStyles[fill][mode] };
  else return { ...styleOptios, ...buttonStyles[fill] };
};
