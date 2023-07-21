import { graphic } from '../assets/graphic';
import { graphicProps } from '../assets/types/graphicTypes';

const Graphic = ({ name }: graphicProps): JSX.Element => {
  return graphic[name]();
};

export default Graphic;
