import { Reset } from 'styled-reset';
import { styled } from 'styled-components';
import Button from './components/Button';
import { Headline } from './components/Typography';
import {
  Dialog,
  DialogButton,
  DialogButtonBox,
  DialogContenets,
  DialogDescription,
  DialogTitle,
} from './components/Dialog';
import { useState } from 'react';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
`;

function App() {
  const [isHide, setIsHide] = useState(false);

  return (
    <>
      <Reset />
      <ButtonContainer>
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
      </ButtonContainer>
      <Headline>HEEEEEE</Headline>
      <Button onClick={() => setIsHide(true)}>다이얼로그</Button>
      <Dialog isHide={isHide} onHanndleHide={() => setIsHide(false)}>
        <DialogContenets>
          <DialogTitle>수강권 재진행</DialogTitle>
          <DialogDescription>
            해당 수강권을 재진행하시겠습니까? <br />
            일시 중단이 해제됩니다.
          </DialogDescription>
          <DialogButtonBox>
            <DialogButton size='medium' onClick={() => setIsHide(false)}>
              아니요
            </DialogButton>
            <DialogButton
              size='medium'
              mode='enabled'
              onClick={() => setIsHide(false)}>
              예, 재진행
            </DialogButton>
          </DialogButtonBox>
        </DialogContenets>
      </Dialog>
    </>
  );
}

export default App;
