import { Item } from './components/Item';
import PoinTStyleProvider from './styles/StyleProvider';

function App() {
  return (
    <>
      <PoinTStyleProvider>
        <Item></Item>
        <Item fill='outline'></Item>
      </PoinTStyleProvider>
    </>
  );
}

export default App;
