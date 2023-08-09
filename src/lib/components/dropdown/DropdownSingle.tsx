import { styled } from 'styled-components';
import { color } from '../../styles';
import { useState } from 'react';
import { Icon } from '../icon';
import { Caption1 } from '../typography';

const DropdownBox = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownSelect = styled.div`
  padding: 8px 12px;
  border: 1px solid ${color.borderLine200};
  border-radius: 10px;
`;

const DropdownArrow = styled.div`
  position: absolute;
  top: -2px;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DropdownSingle = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <DropdownBox>
      {/* 여기서 테두리 값 변경 받아야함 */}
      <DropdownSelect>
        <Caption1></Caption1>
      </DropdownSelect>
      <DropdownArrow>
        {isFocused ? <Icon name='lessSmall' /> : <Icon name='moreSmall' />}
      </DropdownArrow>
    </DropdownBox>
  );
};

export default DropdownSingle;
