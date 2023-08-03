import { graphicKey } from './graphicTypes';

export interface IappBarProps {
  title?: string;
  icon?: { iconL?: graphicKey; iconR?: graphicKey };
  text?: { textL?: string; textR?: string };
  counter?: { text?: string; count?: number };
}
