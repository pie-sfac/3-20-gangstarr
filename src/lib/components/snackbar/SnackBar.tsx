import { styled } from 'styled-components';
import { color, keyframe } from '../../styles';
import { Caption1 } from '../typography';
import { useEffect, useState } from 'react';
import {
  IsnackbarProps,
  IappbarStyleProps,
} from '../../../types/snackBarTypes';

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
  animation: ${(props) =>
      props.$isVisible ? keyframe.fadeIn : keyframe.fadeOut}
    0.3s ease;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  height: auto;
  color: ${color.basicWhite};
`;

const SnackBar = ({
  description,
  time,
  setSnackbarMessage,
  usedAppBar,
  widthSize,
}: IsnackbarProps): JSX.Element => {
  const [isShowing, setIsShowing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const snackBarShowTime = setTimeout(() => setIsShowing(false), time);
  const fadeTime = setTimeout(() => setIsVisible(false), time - 200);

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
          <Caption1>{description}</Caption1>
        </DescriptionWrap>
      </SnackBarContainer>
    </>
  );
};

export default SnackBar;
