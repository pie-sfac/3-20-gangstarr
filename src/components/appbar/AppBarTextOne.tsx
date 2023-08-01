import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body1 } from '../typography';
import { IappBarProps } from '../../types/appBarTypes';
import { color } from '../../styles';

const AppBarTextOne = ({ title }: IappBarProps): JSX.Element => {
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
      <IconWarp>
        <ActionBtn1>
          <Body1>버튼</Body1>
        </ActionBtn1>
      </IconWarp>
    </AppBarContainer>
  );
};

export default AppBarTextOne;

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
