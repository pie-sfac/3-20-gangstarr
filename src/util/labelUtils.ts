import { labelStyles } from '../components/label/label';
import { IlabelProps, IlabelStyleProps } from '../types/labelTypes';

export const getLabelStyleOptions = (
  shape: IlabelProps['shape'] = 'rectangle',
  background: IlabelProps['background'] = 'blue',
  color: IlabelProps['color'] = 'blue500',
): IlabelStyleProps => {
  const styleOptions = {
    ...labelStyles[shape],
    ...labelStyles['background'][background],
    ...labelStyles['color'][color],
  };
  return { ...styleOptions };
};
