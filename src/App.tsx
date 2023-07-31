import BottonNavigationBar from './components/navigation/BottomNavigationBar';
import TopNavigationBar from './components/navigation/TopNavigationBar';
import PoinTStyleProvider from './styles/StyleProvider';

function App() {
  return (
    <>
      <PoinTStyleProvider>
        <TopNavigationBar />
        <BottonNavigationBar
          tabNameLists={{
            home: 'home',
            reservation: 'reservation',
            patient: 'patient',
            center: 'center',
            mypage: 'mypage',
          }}
          onClickHome={() => (window.location.href = '/home')}
          onClickReservation={() => (window.location.href = '/reservation')}
          onClickPatient={() => (window.location.href = '/partiend')}
          onClickCenter={() => (window.location.href = '/center')}
          onClickMypage={() => (window.location.href = '/mypage')}
        />
      </PoinTStyleProvider>
    </>
  );
}

export default App;
