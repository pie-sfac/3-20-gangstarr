import { styled } from 'styled-components';
import { color, keyframe } from '../../styles';

export const Popup = {
  PopupContainer: styled.div<{ $isVisible: boolean }>`
    position: fixed;
    top: 56px;
    right: 24px;
    background: #fff;
    border: 1px solid ${color.borderLine200};
    border-radius: 10px;
    animation: ${({ $isVisible }) =>
        $isVisible ? keyframe.fadeIn : keyframe.fadeOut}
      0.3s ease-in;
    visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
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
    a {
      color: ${color.gray900};
      text-decoration: none;
    }
  `,
};
