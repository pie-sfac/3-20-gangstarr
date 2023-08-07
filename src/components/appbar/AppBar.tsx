import { styled } from 'styled-components';
import { Icon } from '../icon';
import { Body1 } from '../typography';
import { IappBarProps } from '../../types/appBarTypes';
import { color } from '../../styles';

const AppBarContainer = styled.div<IappBarProps>`
  border-bottom: 1px solid ${color.gray200};
  width: ${(props) => (props.size === 'medium' ? '650px' : '1024px')};
  height: ${(props) => (props.size === 'full' ? '56px' : '48px')};
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SizeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const GoBackButton = styled.button`
  width: 24px;
  height: 24px;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const PageNameWarp = styled.div<IappBarProps>`
  text-align: ${(props) => (props.size === 'full' ? 'center' : 'left')};
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

const IconButton = styled.button`
  width: 24px;
  height: 24px;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const TextButton = styled.button`
  width: 32px;
  text-align: right;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const CounterButton = styled.button`
  width: 80px;
  text-align: right;
  appearance: none;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const AppBar = ({
  size,
  title,
  icon,
  text,
  counter,
}: IappBarProps): JSX.Element => {
  return (
    <AppBarContainer size={size}>
      {size === 'full' ? (
        <SizeWrap>
          <PageNameWarp size={size}>
            <Body1>{title}</Body1>
          </PageNameWarp>
          {icon?.map((iconItem, index) => (
            <IconButton key={index} onClick={iconItem.func}>
              <Icon name={`${iconItem.iconName}`} />
            </IconButton>
          ))}
        </SizeWrap>
      ) : (
        <SizeWrap>
          <GoBackButton
            onClick={() => {
              history.go(-1);
            }}>
            <Icon name={'back'} />
          </GoBackButton>
          <PageNameWarp size={size}>
            <Body1>{title}</Body1>
          </PageNameWarp>
          {icon && (
            <IconWarp>
              {icon.map((iconItem, index) => (
                <IconButton key={index} onClick={iconItem.func}>
                  <Icon name={`${iconItem.iconName}`} />
                </IconButton>
              ))}
            </IconWarp>
          )}
          {text && (
            <TextWarp>
              {text.map((textItem, index) => (
                <TextButton key={index} onClick={textItem.func}>
                  <Body1>{textItem.textName}</Body1>
                </TextButton>
              ))}
            </TextWarp>
          )}
          {counter && (
            <TextWarp>
              <CounterButton onClick={counter.func}>
                <Body1>
                  {counter.text}({counter.count})
                </Body1>
              </CounterButton>
            </TextWarp>
          )}
        </SizeWrap>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
