import { Reset } from 'styled-reset';
import { styled } from 'styled-components';
import Button from './components/Button';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
`;

function App() {
  return (
    <>
      <Reset />
      <ButtonBox>
        <Button size='full'>텍스트</Button>
      </ButtonBox>
    </>
  );
}

export default App;
