import { color } from '../../styles';
import { font } from '../../styles';

export const labelStyles = {
  rectangle: {
    height: '21px',
    borderRadius: '4px',
    fontSize: font.fontSize.fontSize10,
  },
  round: {
    height: '23px',
    borderRadius: '100px',
    fontSize: font.fontSize.fontSize12,
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
};
