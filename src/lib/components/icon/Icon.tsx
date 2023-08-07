import { icons } from '../../assets/icons';
import { iconProps } from '../../types/iconTypes';

export const Icon = ({ name }: iconProps): JSX.Element => {
  return icons[name]();
};
