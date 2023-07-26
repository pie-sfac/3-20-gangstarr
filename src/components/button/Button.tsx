import { styled } from 'styled-components';
import { color } from '../../styles';
import { IbuttonProps, IbuttonStyleProps } from '../../types/buttonTypes';
import { getButtonStyleOptions } from '../../util';

const ButtonContainer = styled.button<{
  $styleOptions: IbuttonStyleProps;
  $isOutline: boolean;
}>`
  width: ${({ $styleOptions }) => $styleOptions.width};
  height: ${({ $styleOptions }) => $styleOptions.height};
  padding: ${({ $styleOptions }) => $styleOptions.padding};
  font-size: ${({ $styleOptions }) => $styleOptions.fontSize};
  border: ${({ $styleOptions }) => $styleOptions.border};
  background: ${({ $styleOptions }) => $styleOptions.background};
  color: ${({ $styleOptions }) => $styleOptions.color};
  cursor: ${({ $styleOptions }) => $styleOptions.cursor};
  border-radius: 4px;
  font-weight: 400;

  &:disabled {
    ${({ $isOutline }) => {
      return $isOutline
        ? `
          color: ${color.textGray400};
          background: ${color.basicWhite};
          border: 1px solid ${color.borderLine300};
        `
        : `
          color: ${color.textGray400};
          background: ${color.gray100};
        `;
    }}
    cursor: not-allowed;
  }
`;

export const Button = ({
  children,
  size,
  fill,
  mode,
  ...props
}: IbuttonProps): JSX.Element => {
  return (
    <>
      <ButtonContainer
        $styleOptions={getButtonStyleOptions(size, fill, mode)}
        $isOutline={fill === 'outline'}
        disabled={mode === 'disabled'}
        {...props}>
        {children}
      </ButtonContainer>
    </>
  );
};
