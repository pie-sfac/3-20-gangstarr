import { color } from '.';
import { font } from '.';

export const labelStyles = {
  small: {
    width: '54px',
    height: '21px',
    borderRadius: '4px',
  },
  medium: {
    width: '62px',
    height: '21px',
    borderRadius: '4px',
  },
  large: {
    width: '64px',
    height: '23px',
    borderRadius: '100px',
  },
  background: {
    blue: {
      background: color.fillPrimary50,
    },
    gray: {
      background: color.backgound,
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
    fontSize: font.fontSize.fontSize12,
    fontWeight: font.fontWeight.fontWeightRegular,
    lineHeight: font.lineHeight.lineHeight128,
  },
  caption2: {
    fontSize: font.fontSize.fontSize10,
    fontWeight: font.fontWeight.fontWeightRegular,
    lineHeight: font.lineHeight.lineHeight128,
  },
};
