import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body1 } from '../typography';
import { IappBarProps } from '../../types/appBarTypes';

const AppBar = ({ title }: IappBarProps) => {
  return (
    <AppBarContainer>
      <GobackButton
        onClick={() => {
          history.go(-1);
        }}>
        <Icon name={'back'} />
      </GobackButton>
      <PageNameWarp>
        <Body1>{title}</Body1>
      </PageNameWarp>
      <div>test</div>
    </AppBarContainer>
  );
};

export default AppBar;

const AppBarContainer = styled.div`
  border: 1px solid black;
  width: 1024px;
  height: 48px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const GobackButton = styled.button`
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
