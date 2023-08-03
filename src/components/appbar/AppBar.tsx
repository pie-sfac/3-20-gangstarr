import { styled } from 'styled-components';
import { Icon, Graphic } from '../icon';
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

const TextWarp = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const IconBtn = styled.button`
  width: 24px;
  height: 24px;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const TextBtn = styled.button`
  width: 32px;
  text-align: right;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const CounterBtn = styled.button`
  width: 80px;
  text-align: right;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const AppBar = ({ title, icon, text, counter }: IappBarProps): JSX.Element => {
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
      {icon && (
        <IconWarp>
          {icon.map((iconItem, index) => (
            <IconBtn key={index} onClick={iconItem.func}>
              <Graphic name={`${iconItem.iconName}`} />
            </IconBtn>
          ))}
        </IconWarp>
      )}
      {text && (
        <TextWarp>
          {text.map((textItem, index) => (
            <TextBtn key={index} onClick={textItem.func}>
              <Body1>{textItem.textName}</Body1>
            </TextBtn>
          ))}
        </TextWarp>
      )}
      {counter && (
        <TextWarp>
          <CounterBtn>
            <Body1>
              {counter.text}({counter.count})
            </Body1>
          </CounterBtn>
        </TextWarp>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
