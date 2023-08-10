export interface IdropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'actived' | 'inactive';
  calendar?: boolean;
  menuList: { id: number; menu: string }[];
}

export interface IdropdownStyleProps {
  $state: 'actived' | 'inactive';
  $calendar?: boolean;
}
