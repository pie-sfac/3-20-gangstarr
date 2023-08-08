import { keyframes, styled } from 'styled-components';
import { color } from '../../styles';
import { Caption1 } from '../typography';
import { useEffect, useState } from 'react';
import { IsnackbarProps, IappbarStyleProps } from '../../types/snackBarTypes';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SnackBarContainer = styled.div<IappbarStyleProps>`
  width: ${(props) => (props.$widthSize ? `${props.$widthSize}px` : '100%')};
  padding: 12px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.gray800};
  border-radius: 4px;
  position: absolute;
  bottom: ${(props) => (props.$usedAppBar ? '59px' : '24px')};
  animation: ${(props) => (props.$isVisible ? FadeIn : FadeOut)} 0.3s ease;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  height: auto;
  color: ${color.basicWhite};
`;

const SnackBar = ({
  discription,
  time,
  setSnackbarMessage,
  usedAppBar,
  widthSize,
}: IsnackbarProps): JSX.Element => {
  const [isShowing, setIsShowing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const snackBarShowTime = setTimeout(() => setIsShowing(false), time);
  const fadeTime = setTimeout(() => setIsVisible(false), time - 300);

  useEffect(() => {
    return () => {
      setSnackbarMessage('');
      clearTimeout(snackBarShowTime);
      clearTimeout(fadeTime);
    };
  }, [isShowing]);

  return (
    <>
      <SnackBarContainer
        $isVisible={isVisible}
        $usedAppBar={usedAppBar}
        $widthSize={widthSize}>
        <DescriptionWrap>
          <Caption1>{discription}</Caption1>
        </DescriptionWrap>
      </SnackBarContainer>
    </>
  );
};

export default SnackBar;
