import { textFieldStyles } from '../components/textfield/textfield';
import { ItextFieldProps, ItextFieldStyleProps } from '../types/textfieldTypes';

export const getTextFieldStyleOptions = (
  state: ItextFieldProps['state'] = 'inactive',
): ItextFieldStyleProps => {
  const styleOptions = {
    ...textFieldStyles[state],
  };
  return { ...styleOptions };
};
