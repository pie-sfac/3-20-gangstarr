import { styled } from 'styled-components';
import { color } from '../../styles';
import { Body4, Title6 } from '../typography';
import CardBase from './CardBase';
import {
  ICardOptionProps,
  ICardOptionsStyleProps,
} from '../../types/cardTypes';

const CardOptionContainer = styled(CardBase)<ICardOptionsStyleProps>`
  width: 364px;
  height: 63px;
  padding: 12px 20px;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive
      ? `
          border: 1px solid ${color.primary500};
          background: ${color.primary50};
        `
      : `
          border: 1px solid ${color.borderLine300};
          background: ${color.basicWhite};
      `}
`;

const CardTitle = styled(Title6)`
  margin-bottom: -3px;
`;

const CardOption = ({
  title = '제목',
  description = '설명',
  isActive,
  ...props
}: ICardOptionProps): JSX.Element => {
  return (
    <CardOptionContainer $isActive={isActive || false} {...props}>
      <CardTitle>{title}</CardTitle>
      <Body4>{description}</Body4>
    </CardOptionContainer>
  );
};

export default CardOption;
