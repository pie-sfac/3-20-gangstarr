import { styled } from 'styled-components';
import { IlabelProps, IlabelStyleProps } from '../types/labelTypes';
import { getStyleOptions } from '../util/labelUtils';

const LabelContainer = styled.div<{
  $styleOptions: IlabelStyleProps;
}>`
  width: ${({ $styleOptions }) => $styleOptions.width};
  height: ${({ $styleOptions }) => $styleOptions.height};
  padding: ${({ $styleOptions }) => $styleOptions.padding};
  border-radius: ${({ $styleOptions }) => $styleOptions.borderRadius};
  background: ${({ $styleOptions }) => $styleOptions.background};
  color: ${({ $styleOptions }) => $styleOptions.color};
  font-size: ${({ $styleOptions }) => $styleOptions.fontSize};
  font-family: ${({ $styleOptions }) => $styleOptions.fontFamily};
  font-weight: ${({ $styleOptions }) => $styleOptions.fontWeight};
  line-height: ${({ $styleOptions }) => $styleOptions.lineHeight};
  display: ${({ $styleOptions }) => $styleOptions.display};
  justify-content: ${({ $styleOptions }) => $styleOptions.justifyContent};
  align-items: ${({ $styleOptions }) => $styleOptions.alignItems};
  box-sizing: ${({ $styleOptions }) => $styleOptions.boxSizing};
  gap: ${({ $styleOptions }) => $styleOptions.gap};
`;

const Label = ({
  children,
  size,
  background,
  color,
  font,
  ...props
}: IlabelProps): JSX.Element => {
  return (
    <>
      <LabelContainer
        $styleOptions={getStyleOptions(size, background, color, font)}
        {...props}>
        {children}
      </LabelContainer>
    </>
  );
};

export default Label;
