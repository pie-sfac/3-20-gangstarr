export interface IthumbnailsProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  mediaState?: 'error' | 'play' | 'select' | 'delete' | 'normal';
  mediaType?: 'video' | 'image';
  runningTime?: string;
  src?: string;
}
