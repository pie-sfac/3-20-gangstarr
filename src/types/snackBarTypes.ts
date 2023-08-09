export interface IappbarStyleProps {
  $isVisible?: boolean;
  $widthSize?: number;
  $usedAppBar?: boolean;
}

export interface IsnackbarProps {
  description: string;
  time: number;
  setSnackbarMessage: (message: string) => void;
  usedAppBar?: boolean;
  widthSize?: number;
}
