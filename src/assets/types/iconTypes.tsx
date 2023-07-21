import { icons } from '../icons';

export type iconsKey = keyof typeof icons;

export interface iconProps {
  name: iconsKey;
}
