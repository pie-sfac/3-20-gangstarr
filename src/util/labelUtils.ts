import { labelStyles } from '../components/label/label';
import { IlabelProps, IlabelStyleProps } from '../types/labelTypes';

export const getStyleOptions = (
  size: IlabelProps['size'] = 'medium',
  background: IlabelProps['background'] = 'blue',
  color: IlabelProps['color'] = 'blue500',
  font: IlabelProps['font'] = 'caption2',
): IlabelStyleProps => {
  const styleOptions = {
    ...labelStyles[size],
    ...labelStyles['background'][background],
    ...labelStyles['color'][color],
    ...labelStyles[font],
  };
  return { ...styleOptions };
};
