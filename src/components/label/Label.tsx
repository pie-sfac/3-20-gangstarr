import { styled } from 'styled-components';
import { IlabelProps, IlabelStyleProps } from '../types/labelTypes';
import { getStyleOptions } from '../util/labelUtils';

const LabelContainer = styled.div<{
  $styleOptions: IlabelStyleProps;
}>`
  width: ${({ $styleOptions }) => $styleOptions.width};
  height: ${({ $styleOptions }) => $styleOptions.height};
  border-radius: ${({ $styleOptions }) => $styleOptions.borderRadius};
  background: ${({ $styleOptions }) => $styleOptions.background};
  color: ${({ $styleOptions }) => $styleOptions.color};
  font-size: ${({ $styleOptions }) => $styleOptions.fontSize};
  font-weight: ${({ $styleOptions }) => $styleOptions.fontWeight};
  line-height: ${({ $styleOptions }) => $styleOptions.lineHeight};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
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
