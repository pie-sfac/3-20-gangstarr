import { graphic } from '../graphic';

export type graphicKey = keyof typeof graphic;

export interface graphicProps {
  name: graphicKey;
}
