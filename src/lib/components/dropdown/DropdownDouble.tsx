import { styled } from 'styled-components';
import { Icon } from '../icon';
import { color } from '../../styles';
import { Body2, Body4 } from '../typography';
import { useEffect, useRef, useState } from 'react';

const DropdownBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const DropdownContent = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 22px;
  background: #fff;
  border: 1px solid ${color.primary200};
  border-radius: 10px;
`;

const DropdownDiv = styled.div`
  width: 100%;
  min-width: 105px;
  text-align: center;
`;

const DropdownSelect = styled.div`
  position: relative;
`;

const DropdownInput = styled.input`
  width: 100%;
  min-width: 129px;
  height: 20px;
  padding-right: 28px;
  text-align: center;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  top: -2px;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DropdownMenus = styled.div`
  position: absolute;
  margin-top: 6px;
  width: 134px;
  border-radius: 4px;
  box-shadow: ${color.boxShadow};
  overflow: hidden;
`;

const DropdownMenu = styled.div`
  width: 100%;
  padding: 12px 8px;
  text-align: center;
  background-color: #fff;
  &:hover {
    background-color: #bfd1ff;
  }
`;

const DropdownClose = styled.div`
  cursor: pointer;
`;

const DropdownDouble = ({
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
      <DropdownContent>
        <DropdownDiv>
          <Body2>오른쪽 다리</Body2>
        </DropdownDiv>
        <Body2>-</Body2>
        <DropdownSelect>
          <DropdownInput
            onFocus={onFocused}
            placeholder='선택하세요'
            value={value}
            ref={dropdownRef}
            readOnly
          />
          <DropdownArrow
            onClick={() => {
              if (dropdownRef.current !== null && !isFocused) {
                dropdownRef.current.focus();
              } else if (dropdownRef.current !== null && isFocused) {
                setIsFocused(false);
              }
            }}
            ref={arrowRef}>
            {isFocused ? <Icon name='lessSmall' /> : <Icon name='moreSmall' />}
          </DropdownArrow>
          {isFocused && (
            <DropdownMenus ref={menuListRef}>
              {menuList.map((item) => (
                <DropdownMenu
                  key={item.id}
                  onClick={() => onClickMenu(item.menu)}>
                  <Body4>{item.menu}</Body4>
                </DropdownMenu>
              ))}
            </DropdownMenus>
          )}
        </DropdownSelect>
      </DropdownContent>
      <DropdownClose>
        <Icon name='delete' />
      </DropdownClose>
    </DropdownBox>
  );
};

export default DropdownDouble;
