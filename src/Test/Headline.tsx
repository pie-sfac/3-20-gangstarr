import React from 'react';
import { primaryDefault } from '../styles/test';
import { styled } from 'styled-components';

interface props {
  children: string;
  color?: string;
  fontFamily?: string;
}

interface styleProps {
  $props: {
    color?: string;
    primaryFont?: string;
    primaryFontSize?: string;
    primaryFontWeight?: number;
    primaryLineHeight?: string;
  };
}

const TextHeadLine = styled.p<styleProps>`
  font-family: ${primaryDefault.primaryFont};
  font-size: ${primaryDefault.primaryFontSize};
  font-weight: ${primaryDefault.primaryFontWeight};
  line-height: ${primaryDefault.primaryLineHeight};
  color: ${(props) => props.$props.color};
`;

const Headline = ({ children, color, fontFamily }: props) => {
  const styleProps = {
    ...primaryDefault,
    color,
    fontFamily,
  };

  return <TextHeadLine $props={styleProps}>{children}</TextHeadLine>;
};

export default Headline;
