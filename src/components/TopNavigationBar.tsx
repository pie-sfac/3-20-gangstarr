import { styled } from 'styled-components';
import { Icon, Graphic } from './icon';
import {
  ITopNavigationBarProps,
  ITabStylesProps,
} from '../types/TopNavigationBarTypes';
import { useState } from 'react';

const TopNavigationBar = ({
  tapMenuLists,
  userData,
}: ITopNavigationBarProps) => {
  const [selected, setSelected] = useState(0);

  const tapList = tapMenuLists?.map((tapItem, index) => (
    <TapItem
      key={tapItem.tapName}
      href={tapItem.path}
      selected={selected === index ? true : false}
      onClick={(event) => {
        event.preventDefault();
        setSelected(index);
      }}>
      {tapItem.tapName}
    </TapItem>
  ));

  return (
    <NavigationLayout>
      <LogoWarp>
        <Graphic name={'logo'} />
      </LogoWarp>
      <TapListWarp>
        {tapList ? <MenuTap>{tapList}</MenuTap> : <MenuTap></MenuTap>}
      </TapListWarp>
      <Line />
      <UserWrap>
        <Graphic name={'profile24px'} />
        {userData ? (
          <UserData>
            <div>{userData.name}</div>
            <div>라벨내놔</div>
          </UserData>
        ) : (
          <div>로그인이 필요합니다.</div>
        )}

        <Line />
        <Icon name={'notice'} />
      </UserWrap>
    </NavigationLayout>
  );
};

export default TopNavigationBar;

const NavigationLayout = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 1024px;
  height: 50px;
  background: #ffffff;
  padding-left: 24px;
  padding-right: 13px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWarp = styled.div`
  position: relative;
  top: -3px;
  display: inline-flex;
`;

const TapListWarp = styled.div`
  display: inline-flex;
  flex: 1;
  align-items: center;

  margin-left: 30px;
`;
const UserWrap = styled.div`
  padding-left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

const MenuTap = styled.div`
  display: inline-flex;
  margin-right: 32px;
  gap: 32px;
`;

const Line = styled.div`
  width: 1px;
  height: 22px;
  background: #e7e7e7;
`;

const TapItem = styled.a<ITabStylesProps>`
  text-decoration: none;
  color: ${(props) => (props.selected ? 'blue' : 'black')};
`;

const UserData = styled.div`
  display: flex;
  gap: 8px;
`;
