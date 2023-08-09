import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../icon';
import { IdropdownProps, IdropdownStyleProps } from '../../types/dropdownTypes';
import { Body4 } from '../typography';
import { color } from '../../styles';
import { dropdownStyles } from './dropdownStyle';

const DropdownBox = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownInput = styled.input<IdropdownStyleProps>`
  padding: 8px 36px 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  width: ${({ $calendar }) => ($calendar ? '65px' : '128px')};
  ${({ $state }) => dropdownStyles[$state]}
  &:focus {
    border: 1px solid ${color.primary300};
    color: ${color.textGray900};
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const DropdownMenus = styled.div`
  position: absolute;
  margin-top: 6px;
  width: 100%;
  border-radius: 10px;
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

const DropdownSingle = ({
  menuList,
  state = 'actived',
  calendar,
}: IdropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<string>(menuList[0].menu);
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
      {state === 'inactive' ? (
        <DropdownInput
          $calendar={calendar}
          $state={state}
          readOnly
          value={value}
          ref={dropdownRef}
          disabled
        />
      ) : (
        <DropdownInput
          $calendar={calendar}
          $state={state}
          onFocus={onFocused}
          readOnly
          value={value}
          ref={dropdownRef}
        />
      )}
      {state === 'inactive' ? (
        <DropdownArrow ref={arrowRef}>
          {isFocused ? <Icon name='lessSmall' /> : <Icon name='moreSmall' />}
        </DropdownArrow>
      ) : (
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
      )}

      {isFocused && (
        <DropdownMenus ref={menuListRef}>
          {menuList.map((item) => (
            <DropdownMenu key={item.id} onClick={() => onClickMenu(item.menu)}>
              <Body4>{item.menu}</Body4>
            </DropdownMenu>
          ))}
        </DropdownMenus>
      )}
    </DropdownBox>
  );
};

export default DropdownSingle;
