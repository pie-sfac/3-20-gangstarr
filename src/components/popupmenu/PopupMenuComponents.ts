import { keyframes, styled } from 'styled-components';
import { color } from '../../styles';

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
export const Popup = {
  PopupContainer: styled.div<{ $isHide: boolean }>`
    position: fixed;
    top: 56px;
    right: 24px;
    background: #fff;
    border: 1px solid ${color.borderLine200};
    border-radius: 10px;
    animation: ${({ $isHide }) => ($isHide ? fadeIn : fadeOut)} 0.3s ease;
    visibility: ${({ $isHide }) => ($isHide ? 'visible' : 'hidden')};
    transition: visibility 0.3s ease-out;
    box-shadow: 0px 0px 8px 2px ${color.borderLine200};
  `,

  PopupMenus: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 24px;
    min-width: 180px;
    cursor: pointer;
  `,
};
