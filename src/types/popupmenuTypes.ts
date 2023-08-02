export interface IpopupmenuProps {
  menuLists: { id: number; menu: string; link: string }[];
  onClosePopup: () => void;
  isVisible: boolean;
}
