import { icons } from './icons';
import { iconProps } from './types/iconTypes';

const Icon = ({ name }: iconProps): JSX.Element => {
  return icons[name]();
};

export default Icon;
