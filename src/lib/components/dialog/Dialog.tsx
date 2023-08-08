import { styled } from 'styled-components';
import { color } from '../../styles';
import { Icon } from '../icon';
import { useEffect, useState } from 'react';
import { Body4, Title6 } from '../typography';
import { IdialogProps } from '../../types/dialogTypes';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Button } from '../button';
import { keyframe } from '../../styles/keyframe';

const DialogContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${color.background};
  animation: ${({ $isVisible }) =>
      $isVisible ? keyframe.fadeIn : keyframe.fadeOut}
    0.3s ease-in;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease-out;
`;

const DialogBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  min-height: 154px;
  max-height: 244px;
  position: relative;
  border: 1px solid ${color.borderLine300};
  border-radius: 10px;
  background: ${color.basicWhite};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  cursor: pointer;
  border: none;
`;

const DialogContenets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 16px 20px 16px;
`;

const DialogButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

const DialogTitle = styled(Title6)`
  margin-bottom: 8px;
`;

const DialogDescription = styled(Body4)`
  text-align: center;
`;

const Dialog = ({
  isShow,
  onHanndleShow,
  title,
  description,
  primaryButtonName,
  onClickPrimaryButton,
  grayButtonName,
  onClickGrayButton,
}: IdialogProps): JSX.Element => {
  const onCloseModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      onHanndleShow();
    }, 300);
  };
  const dialogRef = useOutsideClick(onCloseModal);
  const [isVisible, setIsVisible] = useState(isShow);

  useEffect(() => {
    if (!onHanndleShow) throw new Error('Cannot find onHanndleHide');
    if (!title) throw new Error('Cannot find title');
    if (!grayButtonName) throw new Error('Cannot find grayButtonName');
  }, []);

  return (
    <>
      {isShow && (
        <DialogContainer $isVisible={isVisible}>
          <DialogBox ref={dialogRef}>
            <CloseButton onClick={onCloseModal}>
              <Icon name='close' />
            </CloseButton>
            <DialogContenets>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
              <DialogButtonBox>
                <Button
                  size='medium'
                  onClick={() => {
                    onCloseModal();
                    onClickGrayButton();
                  }}>
                  {grayButtonName}
                </Button>
                {primaryButtonName && onClickPrimaryButton && (
                  <Button
                    size='medium'
                    mode='enabled'
                    onClick={() => {
                      onCloseModal();
                      onClickPrimaryButton();
                    }}>
                    {primaryButtonName}
                  </Button>
                )}
              </DialogButtonBox>
            </DialogContenets>
          </DialogBox>
        </DialogContainer>
      )}
    </>
  );
};

export default Dialog;
