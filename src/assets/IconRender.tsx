import React from 'react';
import { icons } from './icons';
import { iconProps } from './types/iconTypes';

const IconRander: React.FC<iconProps> = ({ name }) => {
  return icons[name]();
};

export default IconRander;
