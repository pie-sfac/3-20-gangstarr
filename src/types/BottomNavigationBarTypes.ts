export interface IBottomNavigationBarProps {
  tabNameLists: {
    home: string;
    reserve: string;
    partiend: string;
    center: string;
    mypage: string;
  };
  onClickHome: () => void;
  onClickReserve: () => void;
  onClickPartiend: () => void;
  onClickCenter: () => void;
  onClickMypage: () => void;
}
