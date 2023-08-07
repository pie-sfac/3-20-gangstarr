import { iconsKey } from './iconTypes';

interface iconProp {
  iconName: iconsKey;
  func: () => void;
}
interface textProp {
  textName: string;
  func: () => void;
}

export interface IappBarProps {
  size?: 'medium' | 'large' | 'full';
  title?: string;
  icon?: iconProp[];
  text?: textProp[];
  counter?: { text?: string; count?: number; func: () => void };
}
