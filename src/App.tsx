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
  const handleClick = () => {
    console.log('hello');
  };

  return (
    <>
      <Reset />
      <ButtonBox>
        <Button size='full' onClick={handleClick}>
          텍스트
        </Button>
      </ButtonBox>
    </>
  );
}

export default App;
