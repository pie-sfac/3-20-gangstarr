import { Popup } from './PopupMenuComponents';
import { IpopupmenuProps } from '../../types/popupmenuTypes';
import { Body2 } from '../typography';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useState } from 'react';

const PopupMenu = ({
  menuLists,
  onClosePopup,
}: IpopupmenuProps): JSX.Element => {
  const popupRef = useOutsideClick(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClosePopup();
    }, 300);
  });

  const [isVisible, setIsVisible] = useState(true);

  const onClickMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClosePopup();
    }, 300);
  };

  return (
    <Popup.PopupContainer ref={popupRef} $isVisible={isVisible}>
      {menuLists.map((menuLists) => {
        return (
          <Popup.PopupMenus
            key={menuLists.id}
            onClick={() => {
              onClickMenu();
              history.pushState('', '', menuLists.link);
            }}>
            <Body2>{menuLists.menu}</Body2>
          </Popup.PopupMenus>
        );
      })}
    </Popup.PopupContainer>
  );
};

export default PopupMenu;
