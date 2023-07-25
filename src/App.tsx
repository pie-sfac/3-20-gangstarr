import { Reset } from 'styled-reset';
import TopNavigationBar from './components/TopNavigationBar';
import { IUserData } from './types/TopNavigationBarTypes';

const tapMenuLists = [
  { tapName: '직원 관리', path: 'Home' },
  { tapName: '수강권 관리', path: 'Reserve' },
  { tapName: '미디어 관리', path: 'Member' },
  { tapName: '운영 데이터', path: 'Center' },
  { tapName: '알림메시지', path: 'MyPage' },
  { tapName: '센터 정보', path: '#' },
];

const userData: IUserData = {
  name: '최동환',
};

function App() {
  return (
    <>
      <Reset />
      <TopNavigationBar tapMenuLists={tapMenuLists} userData={userData} />
    </>
  );
}

export default App;
