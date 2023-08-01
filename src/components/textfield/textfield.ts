import { color } from '../../styles';

export const textFieldStyles = {
  inactive: {
    border: `1px solid ${color.borderLine300}`,
    color: color.textTextHold,
  },
  focused: {
    border: `1px solid ${color.primary500}`,
    color: color.textGray900,
  },
  error: {
    border: `1px solid ${color.systemError}`,
    color: color.textGray900,
  },
  positive: {
    border: `1px solid ${color.systemPositive}`,
    color: color.textGray900,
  },
  activated: {
    border: `1px solid ${color.borderLine300}`,
    color: color.textGray900,
  },
  disable: {
    border: `1px solid ${color.borderLine300}`,
    color: color.textGray400,
    background: color.background,
  },
};
