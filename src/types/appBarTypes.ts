import { graphicKey } from './graphicTypes';

interface iconProp {
  iconName: graphicKey;
  func: () => void;
}
interface textProp {
  textName: string;
  func: () => void;
}

export interface IappBarProps {
  title?: string;
  icon?: iconProp[];
  text?: textProp[];
  counter?: { text?: string; count?: number };
}
