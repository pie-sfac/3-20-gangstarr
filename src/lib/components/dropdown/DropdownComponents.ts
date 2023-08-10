import { styled } from 'styled-components';
import { color } from '../../styles';

export const DropdownBox = styled.div`
  position: relative;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid ${color.borderLine200};
  border-radius: 10px;
`;

export const DropdownMenus = styled.div`
  margin-top: 4px;
  border: 1px solid ${color.borderLine200};
  border-radius: 4px;
  overflow: hidden;
`;

export const DropdownMenu = styled.div`
  padding: 12px 8px;
  &:hover {
    background-color: #bfd1ff;
  }
`;

export const DropdownArrow = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  width: 24px;
  height: 24px;
`;
