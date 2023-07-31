import { styled } from 'styled-components';
import CardBase from './CardBase';
import { Caption1 } from '../typography';
import { color } from '../../styles';
import {
  CardTextStyleProps,
  ICardCalendarDataProps,
} from '../../types/cardTypes';

const CardCalendarDataContainer = styled(CardBase)`
  width: 343px;
  height: 36px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardText = styled(Caption1)<CardTextStyleProps>`
  color: ${({ $isName }) =>
    $isName ? `${color.primary500}` : `${color.gray900}`};
  min-width: ${({ $minWidth }) => $minWidth};
`;

const CardCalendarData = ({
  period = '기간',
  name = '이름',
  totalSchedule = '0',
  cancelSchedule = '0',
  percent = '0',
}: ICardCalendarDataProps): JSX.Element => {
  return (
    <CardCalendarDataContainer>
      <CardText $minWidth='35px'>{period}</CardText>
      <CardText $minWidth='32px' $isName={true}>
        {name}
      </CardText>
      <CardText $minWidth='71px'>총 일정: {totalSchedule}건</CardText>
      <CardText $minWidth='81px'>취소 일정: {cancelSchedule}건</CardText>
      <CardText $minWidth='68px'>취소율: {percent}%</CardText>
    </CardCalendarDataContainer>
  );
};

export default CardCalendarData;
