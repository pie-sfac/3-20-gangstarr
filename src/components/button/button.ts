import { font, color } from '../../styles';

export const buttonStyles = {
  full: {
    width: '100%',
    height: '47px',
    padding: '12px 16px 12px 16px',
    fontSize: font.fontSize.fontSize16,
  },
  xlarge: {
    width: '976px',
    height: '47px',
    padding: '12px 16px 12px 16px',
    fontSize: font.fontSize.fontSize16,
  },
  large: {
    width: '312px',
    height: '47px',
    padding: '12px 16px 12px 16px',
    fontSize: font.fontSize.fontSize16,
  },
  medium: {
    width: '146px',
    height: '44px',
    padding: '12px 16px 12px 16px',
    fontSize: font.fontSize.fontSize14,
  },
  small: {
    width: '80px',
    height: '36px',
    padding: '8px',
    fontSize: font.fontSize.fontSize14,
  },
  xsmall: {
    width: '48px',
    height: '31px',
    padding: '7px',
    fontSize: font.fontSize.fontSize12,
  },
  contained: {
    border: 'none',
  },
  outline: {
    normal: {
      border: `1px solid ${color.borderLine300}`,
    },
    enabled: {
      border: `1px solid ${color.primary500}`,
    },
    disabled: {
      border: `1px solid ${color.borderLine300}`,
    },
  },
  normal: {
    contained: {
      color: color.textGray900,
      background: color.gray100,
      cursor: 'pointer',
    },
    outline: {
      color: color.textGray900,
      background: color.basicWhite,
      cursor: 'pointer',
    },
  },
  enabled: {
    contained: {
      color: color.textTextWhite,
      background: color.primary500,
      cursor: 'pointer',
    },
    outline: {
      color: color.primary500,
      background: color.primary100,
      cursor: 'pointer',
    },
  },
  disabled: {
    contained: {
      color: color.textGray400,
      background: color.gray100,
      cursor: 'not-allowed',
    },
    outline: {
      color: color.textGray400,
      background: color.basicWhite,
      cursor: 'not-allowed',
    },
  },
};
