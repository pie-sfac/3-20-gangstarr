import { graphic } from '../../assets/graphic';
import { graphicProps } from '../../types/graphicTypes';

export const Graphic = ({ name }: graphicProps): JSX.Element => {
  return graphic[name]();
};
