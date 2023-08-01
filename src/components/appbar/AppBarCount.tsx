import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body1 } from '../typography';
import { IappBarProps } from '../../types/appBarTypes';
import { color } from '../../styles';
import { useState } from 'react';

const AppBarContainer = styled.div`
  border-bottom: 1px solid ${color.gray200};
  width: 1024px;
  height: 48px;
  padding: 12px 24px 12px 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const GoBackButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const PageNameWarp = styled.div`
  flex: 1;
`;

const IconWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionBtn1 = styled.button`
  width: 80px;
  text-align: right;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const AppBarCount = ({ title }: IappBarProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(() => count + 1);
  };

  return (
    <AppBarContainer>
      <GoBackButton
        onClick={() => {
          history.go(-1);
        }}>
        <Icon name={'back'} />
      </GoBackButton>
      <PageNameWarp>
        <Body1>{title}</Body1>
      </PageNameWarp>
      <IconWarp>
        <ActionBtn1 onClick={onClickCount}>
          <Body1>버튼({count})</Body1>
        </ActionBtn1>
      </IconWarp>
    </AppBarContainer>
  );
};

export default AppBarCount;
