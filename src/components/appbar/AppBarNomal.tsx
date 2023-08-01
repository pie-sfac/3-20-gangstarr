import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body1 } from '../typography';
import { IappBarProps } from '../../types/appBarTypes';
import { color } from '../../styles';

const AppBarContainer = styled.div`
  border-bottom: 1px solid ${color.gray200};
  width: 1024px;
  height: 48px;
  padding: 12px 16px;
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

const AppBarNomal = ({ title }: IappBarProps): JSX.Element => {
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
    </AppBarContainer>
  );
};

export default AppBarNomal;
