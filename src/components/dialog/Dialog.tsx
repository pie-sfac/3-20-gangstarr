import { keyframes, styled } from 'styled-components';
import { color } from '../../styles';
import { Icon } from '../icon';
import { useEffect, useReducer } from 'react';
import { Body4, Title6 } from '../typography';
import { IDialogButtonProps, IDialogProps } from '../../types/dialogTypes';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Button } from '../button';
import useDialogDispatch from '../../hooks/useDialogDispatch';
import { DialogContext, DialogReducer } from '../../context/dialogContext';
import { onCloseModal } from '../../util';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const DialogContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${color.background};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.3s ease-in;
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

export const DialogContenets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 16px 20px 16px;
`;

export const DialogButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

export const DialogTitle = styled(Title6)`
  margin-bottom: 8px;
`;

export const DialogDescription = styled(Body4)`
  text-align: center;
`;

export const DialogButton = ({
  children,
  size,
  fill,
  mode,
  ...props
}: IDialogButtonProps): JSX.Element => {
  const dispatch = useDialogDispatch();

  return (
    <Button
      size={size}
      fill={fill}
      mode={mode}
      {...props}
      onClick={() => onCloseModal(dispatch, props.onClick)}>
      {children}
    </Button>
  );
};

export const Dialog = ({
  isHide,
  onHanndleHide,
  children,
}: IDialogProps): JSX.Element => {
  const [isVisible, dispatch] = useReducer(DialogReducer, true);
  const dialogRef = useOutsideClick(() =>
    onCloseModal(dispatch, onHanndleHide),
  );

  useEffect(() => {
    isHide ? dispatch('TRUE') : dispatch('FALSE');
  }, [isHide]);

  return (
    <>
      {isHide && (
        <DialogContext.Provider value={{ isVisible, dispatch }}>
          <DialogContainer $isVisible={isVisible}>
            <DialogBox ref={dialogRef}>
              <CloseButton
                onClick={() => onCloseModal(dispatch, onHanndleHide)}>
                <Icon name='close' />
              </CloseButton>
              {children}
            </DialogBox>
          </DialogContainer>
        </DialogContext.Provider>
      )}
    </>
  );
};
