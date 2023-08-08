import { styled } from 'styled-components';
import {
  ItextFieldProps,
  ItextFieldStyleProps,
} from '../../types/textfieldTypes';
import { getTextFieldStyleOptions } from '../../util/textFieldUtils';
import { textFieldStyles } from './textfieldStyle';
import { useState, forwardRef } from 'react';
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
  align-self: stretch;
  padding: 8px 16px;
  &:focus {
    border: ${textFieldStyles['focused'].border};
    color: ${textFieldStyles['focused'].color};
  }
  &:disabled {
    border: ${textFieldStyles['disable'].border};
    color: ${textFieldStyles['disable'].color};
  }
  &:read-only {
    cursor: pointer;
    color: ${color.textGray900};
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

const TextField = forwardRef<HTMLInputElement, ItextFieldProps>(
  (
    {
      state,
      id,
      title,
      isError,
      customErrorMessage,
      customSuccessMessage,
      customInactiveMessage,
      placeholder,
      validate,
      ...props
    },
    ref,
  ): JSX.Element => {
    const [isEmpty, setIsEmpty] = useState(true);
    return (
      <>
        <TextFieldLabel htmlFor={id}>{title}</TextFieldLabel>
        <TextFieldContainer
          id={id}
          $state={state}
          $styleOptions={
            isEmpty
              ? getTextFieldStyleOptions('inactive')
              : !validate
              ? getTextFieldStyleOptions('activated')
              : isError
              ? getTextFieldStyleOptions('error')
              : getTextFieldStyleOptions('positive')
          }
          placeholder={placeholder}
          {...props}
          value={props.value}
          onChange={(e) => {
            if (e.target.value !== '') setIsEmpty(false);
            else setIsEmpty(true);
            if (props.onChange) props.onChange(e);
          }}
          ref={ref}></TextFieldContainer>

        {validate ? (
          isEmpty ? (
            <Message color={color.textGray400}>
              {customInactiveMessage || '인액티브메시지를 입력해주세요.'}
            </Message>
          ) : isError ? (
            <Message color={color.systemError}>
              {customErrorMessage || '에러메시지를 입력해주세요.'}
            </Message>
          ) : (
            <Message color={color.systemPositive}>
              {customSuccessMessage || '성공메시지를 입력해주세요.'}
            </Message>
          )
        ) : null}
      </>
    );
  },
);

export default TextField;
