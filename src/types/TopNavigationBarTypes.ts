export interface ITopNavigationBarProps {
  tapMenuLists?: {
    tapName: string;
    path: string;
  }[];
  userData?: IUserData;
}
export interface IUserData {
  name: string;
}

export interface ITabStylesProps {
  selected: boolean;
}
