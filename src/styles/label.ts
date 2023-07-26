import { color } from '.';
import { font } from '.';

export const labelStyles = {
  small: {
    boxSizing: 'border-box',
    width: '54px',
    height: '21px',
    borderRadius: '4px',
    padding: '4px 8px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  medium: {
    boxSizing: 'border-box',
    width: '62px',
    height: '21px',
    borderRadius: '4px',
    padding: '4px 8px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  large: {
    boxSizing: 'border-box',
    width: '64px',
    height: '23px',
    borderRadius: '100px',
    padding: '4px 8px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  background: {
    blue: {
      background: color.fillPrimary50,
    },
    gray: {
      background: color.background,
    },
    green: {
      background: color.green,
    },
  },
  color: {
    blue500: {
      color: color.primary500,
    },
    blue300: {
      color: color.primary300,
    },
    gray: {
      color: color.textGray700,
    },
    red: {
      color: color.systemError,
    },
    green: {
      color: color.systemPositive,
    },
  },
  caption1: {
    fontFamily: font.fontFamily,
    fontSize: font.fontSize.fontSize12,
    fontWeight: font.fontWeight.fontWeightRegular,
    lineHeight: font.lineHeight.lineHeight128,
  },
  caption2: {
    fontFamily: font.fontFamily,
    fontSize: font.fontSize.fontSize10,
    fontWeight: font.fontWeight.fontWeightRegular,
    lineHeight: font.lineHeight.lineHeight128,
  },
};
