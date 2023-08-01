import { styled } from 'styled-components';
import { Graphic, Icon } from '../icon';
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

const IconWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ActionBtn1 = styled.button`
  width: 24px;
  height: 24px;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const AppBarIconOne = ({ title }: IappBarProps): JSX.Element => {
  const onClickAction1 = () => {
    null;
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
        <ActionBtn1 onClick={onClickAction1}>
          <Graphic name={'profile24px'} />
        </ActionBtn1>
      </IconWarp>
    </AppBarContainer>
  );
};

export default AppBarIconOne;
