import { styled } from 'styled-components';
import {
  ItextFieldProps,
  ItextFieldStyleProps,
} from '../../types/textFieldTypes';
import { getTextFieldStyleOptions } from '../../util/textFieldUtils';
import { textFieldStyles } from './textfield';
import { useState } from 'react';
import { font, color } from '../../styles';

const TextFieldContainer = styled.input<{
  $styleOptions: ItextFieldStyleProps;
  $state: ItextFieldProps['state'];
}>`
  width: 364px;
  height: 40px;
  border-radius: 4px;
  border: ${({ $styleOptions }) => $styleOptions.border};
  background: ${({ $styleOptions }) => $styleOptions.background};
  color: ${({ $styleOptions }) => $styleOptions.color};
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeightRegular};
  line-height: ${font.lineHeight.lineHeight144};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  &:focus {
    border: ${textFieldStyles['focused'].border};
    color: ${textFieldStyles['focused'].color};
  }
  &:disabled {
    border: ${textFieldStyles['disable'].border};
    color: ${textFieldStyles['disable'].color};
  }
`;

const TextFieldLabel = styled.label`
  font-size: ${font.fontSize.fontSize14};
  font-weight: ${font.fontWeight.fontWeightRegular};
  line-height: ${font.lineHeight.lineHeight144};
`;

const Message = styled.p`
  font-size: ${font.fontSize.fontSize10};
  font-weight: ${font.fontWeight.fontWeightRegular};
  line-height: ${font.lineHeight.lineHeight128};
  margin-top: 4px;
  color: ${({ color }) => color};
`;

const TextField = ({
  state,
  id,
  title,
  validate,
  customMessage,
  showMessage = false,
  placeholder,
  ...props
}: ItextFieldProps): JSX.Element => {
  const [isInput, setIsInput] = useState(getTextFieldStyleOptions(state));
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [messageColor, setMessageColor] = useState(color.textGray400);

  const onBlur = () => {
    if (!validate) {
      setIsInput(getTextFieldStyleOptions('activated'));
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (validate) {
      if (e.target.value.length < 7) {
        setHasError(true);
        setIsInput(getTextFieldStyleOptions('error'));
        setMessageColor(color.systemError);
      } else {
        setHasError(false);
        setIsInput(getTextFieldStyleOptions('positive'));
        setMessageColor(color.systemPositive);
      }
    }
  };
  return (
    <>
      <TextFieldLabel htmlFor={id}>{title}</TextFieldLabel>
      <TextFieldContainer
        id={id}
        $state={state}
        $styleOptions={hasError ? getTextFieldStyleOptions('error') : isInput}
        onBlur={onBlur}
        value={inputValue}
        onChange={onChangeInput}
        placeholder={placeholder}
        {...props}></TextFieldContainer>
      {hasError && showMessage && (
        <Message color={messageColor}>
          {customMessage || '에러메시지를 입력해주세요.'}
        </Message>
      )}
      {!hasError && inputValue.length >= 7 && validate && showMessage && (
        <Message color={messageColor}>
          {customMessage || '성공메시지를 입력해주세요.'}
        </Message>
      )}
      {validate === false && showMessage && (
        <Message color={messageColor}>
          {customMessage || '인엑티브 메세지가 있다면 입력해주세요.'}
        </Message>
      )}
    </>
  );
};

export default TextField;

// util/index.ts에 textfield 추가해도 됨?
