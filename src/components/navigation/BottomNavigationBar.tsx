import { styled } from 'styled-components';
import { color } from '../../styles';
import { Icon } from '../icon';
import { Caption2 } from '../typography';
import { getPath } from '../../util';
import { IbottomNavigationBarProps } from '../../types/bottomNavigationBarTypes';

const BottomNavigationBar = ({
  tabNameLists,
  onClickHome,
  onClickReservation,
  onClickPatient,
  onClickCenter,
  onClickMypage,
}: IbottomNavigationBarProps) => {
  return (
    <NavigationLayout>
      <IconContainer>
        <IconWrap onClick={onClickHome}>
          {getPath() === tabNameLists.home ? (
            <Icon name={'onHome'} />
          ) : (
            <Icon name={'offHome'} />
          )}
          <Caption2>홈</Caption2>
        </IconWrap>
        <IconWrap onClick={onClickReservation}>
          {getPath() === tabNameLists.reservation ? (
            <Icon name={'onReserve'} />
          ) : (
            <Icon name={'offReserve'} />
          )}
          <Caption2>일정관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onClickPatient}>
          {getPath() === tabNameLists.patient ? (
            <Icon name={'onPatient'} />
          ) : (
            <Icon name={'offPatient'} />
          )}
          <Caption2>회원관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onClickCenter}>
          {getPath() === tabNameLists.center ? (
            <Icon name={'onCenter'} />
          ) : (
            <Icon name={'offCenter'} />
          )}
          <Caption2>센터관리</Caption2>
        </IconWrap>
        <IconWrap onClick={onClickMypage}>
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
