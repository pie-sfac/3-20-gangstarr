export interface ItopNavigationBarProps {
  tapMenuLists?: {
    tapName: string;
    path: string;
  }[];
  userData?: IUserData;
}
export interface IUserData {
  name: string;
  label: string;
}

export interface ItabStylesProps {
  selected: boolean;
}
