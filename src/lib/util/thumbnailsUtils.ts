import { thumbnailsStyle } from '../components/thumbnails/thumbnailsStyle';
import {
  IthumbnailsProps,
  IthumbnailsStyleProps,
} from '../types/thumbnailsTypes';

export const getThumbnailsStyleOptions = (
  state: IthumbnailsProps['state'] = 'normal',
): IthumbnailsStyleProps => {
  const styleOptions = {
    ...thumbnailsStyle[state],
  };
  return { ...styleOptions };
};
