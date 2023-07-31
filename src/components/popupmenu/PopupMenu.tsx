import { Popup } from '.';
import { IpopupmenuProps } from '../../types/popupmenuTypes';
import { Body2 } from '../typography';

const PopupMenu = ({ menuLists, isHide }: IpopupmenuProps): JSX.Element => {
  return (
    <Popup.PopupContainer $isHide={isHide}>
      {menuLists.map((menuLists) => {
        return (
          <Popup.PopupMenus key={menuLists.id}>
            <Body2>{menuLists.menu}</Body2>
          </Popup.PopupMenus>
        );
      })}
    </Popup.PopupContainer>
  );
};

export default PopupMenu;
