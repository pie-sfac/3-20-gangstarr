import { styled } from 'styled-components';
import { color } from '../../styles';
import { Body2 } from '../typography';
import { Icon } from '../icon';
import { IbuttonFabProps, IbuttonStyleProps } from '../../types/buttonFabTypes';

const FabButtonContainer = styled.div<IbuttonStyleProps>`
  position: fixed;
  bottom: 32px;
  ${(props) => {
    switch (props.$position) {
      case 'left':
        return 'left:32px';
      case 'center':
        return 'left: 50%; transform: translateX(-50%)';
      case 'right':
        return 'right: 32px;';
      default:
        return 'null';
    }
  }}
`;

const FabAddButtonWrap = styled.button`
  width: auto;
  height: auto;
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 100px;
  border: 1px solid ${color.gray200};
  background: ${color.primary300};
  color: ${color.textTextWhite};
  cursor: pointer;
`;

const FabUpButtonWarp = styled.button`
  width: 40px;
  height: 40px;
  padding: 7px 8px 9px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  border: 1px solid ${color.gray200};
  background: ${color.basicWhite};
  box-shadow: 0px 0px 8px 2px rgba(231, 231, 231, 0.8);
  flex-shrink: 0;
  cursor: pointer;
`;
const ButtonFab = ({ mode, func, position }: IbuttonFabProps) => {
  return (
    <>
      <FabButtonContainer $position={position}>
        {mode === 'add' && (
          <FabAddButtonWrap onClick={func}>
            <Body2>+ 문항 추가하기</Body2>
          </FabAddButtonWrap>
        )}
        {mode === 'up' && (
          <FabUpButtonWarp onClick={func}>
            <Icon name='dropLess' />
          </FabUpButtonWarp>
        )}
      </FabButtonContainer>
    </>
  );
};

export default ButtonFab;
