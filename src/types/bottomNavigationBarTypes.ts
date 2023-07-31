export interface IbottomNavigationBarProps {
  tabNameLists: {
    home: string;
    reservation: string;
    patient: string;
    center: string;
    mypage: string;
  };
  onClickHome: () => void;
  onClickReservation: () => void;
  onClickPatient: () => void;
  onClickCenter: () => void;
  onClickMypage: () => void;
}
