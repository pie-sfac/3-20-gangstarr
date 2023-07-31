import { styled } from 'styled-components';
import { IlabelProps, IlabelStyleProps } from '../../types/labelTypes';
import { getLabelStyleOptions } from '../../util';
import { font } from '../../styles';

const LabelContainer = styled.div<{
  $styleOptions: IlabelStyleProps;
}>`
  height: ${({ $styleOptions }) => $styleOptions.height};
  border-radius: ${({ $styleOptions }) => $styleOptions.borderRadius};
  background: ${({ $styleOptions }) => $styleOptions.background};
  color: ${({ $styleOptions }) => $styleOptions.color};
  font-size: ${({ $styleOptions }) => $styleOptions.fontSize};
  font-weight: ${font.fontWeight.fontWeightRegular};
  line-height: ${font.lineHeight.lineHeight128};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
`;

const Label = ({
  children,
  shape,
  background,
  color,
  ...props
}: IlabelProps): JSX.Element => {
  return (
    <>
      <LabelContainer
        $styleOptions={getLabelStyleOptions(shape, background, color)}
        {...props}>
        {children}
      </LabelContainer>
    </>
  );
};

export default Label;
