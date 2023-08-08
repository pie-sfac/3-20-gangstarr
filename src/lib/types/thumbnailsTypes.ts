export interface IthumbnailsProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  state?: 'error' | 'play' | 'select' | 'delete' | 'normal';
  type?: 'video' | 'image';
  runningTime?: string;
  src?: string;
}

export interface IthumbnailsStyleProps {
  imageBorder?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconTop?: string;
  iconRight?: string;
  background?: string;
}
