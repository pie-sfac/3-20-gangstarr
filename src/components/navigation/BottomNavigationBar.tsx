import { styled } from 'styled-components';
import { color } from '../../styles';
import { Icon } from '../icon';
import { Caption2 } from '../typography';
import { IBottomNavigationBarProps } from '../../types/BottomNavigationBarTypes';

const getPath = () => {
  const { pathname } = new URL(window.location.href);

  return pathname.slice(1);
};

const BottomNavigationBar = ({
  tabNameLists,
  onHomeClick,
  onReserveClick,
  onPartiendClick,
  onCenterClick,
  onMypageClick,
}: IBottomNavigationBarProps) => {
  return (
    <NavigationLayout>
      <IconContainer>
        <IconWrap onClick={onHomeClick}>
          {getPath() === tabNameLists.home ? (
            <Icon name={'onHome'} />
          ) : (
            <Icon name={'offHome'} />
          )}
          <Caption2>홈</Caption2>
        </IconWrap>
        <IconWrap onClick={onReserveClick}>
          {getPath() === tabNameLists.reserve ? (
            <Icon name={'onReserve'} />
          ) : (
            <Icon name={'offReserve'} />
          )}
          <Caption2>일정관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onPartiendClick}>
          {getPath() === tabNameLists.partiend ? (
            <Icon name={'onPatiend'} />
          ) : (
            <Icon name={'offPatiend'} />
          )}
          <Caption2>회원관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onCenterClick}>
          {getPath() === tabNameLists.center ? (
            <Icon name={'onCenter'} />
          ) : (
            <Icon name={'offCenter'} />
          )}
          <Caption2>센터관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onMypageClick}>
          {getPath() === tabNameLists.mypage ? (
            <Icon name={'onMypage'} />
          ) : (
            <Icon name={'offMypage'} />
          )}
          <Caption2>마이페이지</Caption2>
        </IconWrap>
      </IconContainer>
    </NavigationLayout>
  );
};

export default BottomNavigationBar;

const NavigationLayout = styled.div`
  border-top: 1px solid ${color.gray200};
  width: 1024px;
  height: 47px;
  background: ${color.basicWhite};

  display: inline-flex;
  position: relative;
  top: 50vh;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const IconWrap = styled.div`
  height: 100%;

  width: 56px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
