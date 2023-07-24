import { Reset } from 'styled-reset';
import { styled } from 'styled-components';
import Button from './components/Button';
import { Headline } from './components/Typography';

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
        <Button size='xlarge'>텍스트</Button>
        <Button size='large'>텍스트</Button>
        <Button size='medium'>텍스트</Button>
        <Button size='small'>텍스트</Button>
        <Button size='xsmall'>텍스트</Button>
        <Button size='full' mode='enabled'>
          텍스트
        </Button>
        <Button size='xlarge' mode='enabled'>
          텍스트
        </Button>
        <Button size='large' mode='enabled'>
          텍스트
        </Button>
        <Button size='medium' mode='enabled'>
          텍스트
        </Button>
        <Button size='small' mode='enabled'>
          텍스트
        </Button>
        <Button size='xsmall' mode='enabled'>
          텍스트
        </Button>
        <Button size='full' disabled>
          텍스트
        </Button>
        <Button size='xlarge' disabled>
          텍스트
        </Button>
        <Button size='large' disabled>
          텍스트
        </Button>
        <Button size='medium' disabled>
          텍스트
        </Button>
        <Button size='small' disabled>
          텍스트
        </Button>
        <Button size='xsmall' disabled>
          텍스트
        </Button>
        <Button size='full' fill='outline'>
          텍스트
        </Button>
        <Button size='xlarge' fill='outline'>
          텍스트
        </Button>
        <Button size='large' fill='outline'>
          텍스트
        </Button>
        <Button size='medium' fill='outline'>
          텍스트
        </Button>
        <Button size='small' fill='outline'>
          텍스트
        </Button>
        <Button size='xsmall' fill='outline'>
          텍스트
        </Button>
        <Button size='full' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='xlarge' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='large' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='medium' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='small' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='xsmall' fill='outline' mode='enabled'>
          텍스트
        </Button>
        <Button size='full' fill='outline' disabled>
          텍스트
        </Button>
        <Button size='xlarge' fill='outline' disabled>
          텍스트
        </Button>
        <Button size='large' fill='outline' disabled>
          텍스트
        </Button>
        <Button size='medium' fill='outline' disabled>
          텍스트
        </Button>
        <Button size='small' fill='outline' disabled>
          텍스트
        </Button>
        <Button size='xsmall' fill='outline' disabled>
          텍스트
        </Button>
      </ButtonBox>
      <Headline>HEEEEEE</Headline>
    </>
  );
}

export default App;
