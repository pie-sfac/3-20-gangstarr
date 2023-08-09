export interface IbuttonFabProps {
  mode: 'add' | 'up';
  func: () => void;
  position: 'left' | 'center' | 'right';
}
export interface IbuttonStyleProps {
  $position?: 'left' | 'center' | 'right';
}
