export interface IBottomNavigationBarProps {
  tabNameLists: {
    home: string;
    reserve: string;
    partiend: string;
    center: string;
    mypage: string;
  };
  onHomeClick: () => void;
  onReserveClick: () => void;
  onPartiendClick: () => void;
  onCenterClick: () => void;
  onMypageClick: () => void;
}
