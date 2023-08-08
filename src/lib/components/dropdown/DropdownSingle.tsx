import { styled } from 'styled-components';
import { TextField } from '../textfield';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../icon';
import { color } from '../../styles';
import { Body3 } from '../typography';

const DropdownBox = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownArrow = styled.div`
  position: absolute;
  top: 29px;
  right: 16px;
  cursor: pointer;
`;

const DropdownMenus = styled.div`
  margin-top: 4px;
  border: 1px solid ${color.borderLine200};
  border-radius: 4px;
  overflow: hidden;
`;

const DropdownMenu = styled.div`
  padding: 12px 8px;
  &:hover {
    background-color: #bfd1ff;
  }
`;

const DropdownSingle = ({
  menuList,
}: {
  menuList: { id: number; menu: string }[];
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<string>('');
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const menuListRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const onFocused = () => {
    setIsFocused(true);
  };

  const onClickMenu = (menu: string) => {
    setValue(menu);
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        menuListRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement) &&
        !menuListRef.current.contains(event.target as HTMLElement) &&
        !(
          !isFocused &&
          arrowRef.current &&
          arrowRef.current.contains(event.target as HTMLElement)
        )
      )
        setIsFocused(false);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <DropdownBox>
      <TextField
        id='dropdown'
        title='드롭다운레고'
        validate={false}
        placeholder='선택해주세요'
        value={value}
        onFocus={onFocused}
        ref={dropdownRef}
        readOnly></TextField>
      <DropdownArrow
        onClick={() => {
          if (dropdownRef.current !== null && !isFocused) {
            dropdownRef.current.focus();
          } else if (dropdownRef.current !== null && isFocused) {
            setIsFocused(false);
          }
        }}
        ref={arrowRef}>
        {isFocused ? (
          <Icon name='dropMore'></Icon>
        ) : (
          <Icon name='dropLess'></Icon>
        )}
      </DropdownArrow>
      {isFocused && (
        <DropdownMenus ref={menuListRef}>
          {menuList?.map((item) => (
            <DropdownMenu onClick={() => onClickMenu(item.menu)} key={item.id}>
              <Body3>{item.menu}</Body3>
            </DropdownMenu>
          ))}
        </DropdownMenus>
      )}
    </DropdownBox>
  );
};

export default DropdownSingle;
