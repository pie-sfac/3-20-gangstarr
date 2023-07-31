import { styled } from 'styled-components';
import CardBase from './CardBase';
import defaultImage from '../../assets/defaultLargeImage.png';
import { color } from '../../styles';
import { Body2, Caption1 } from '../typography';
import { CardLinkLargeProps } from '../../types/cardTypes';

const CardLinkLargeContainer = styled(CardBase)`
  width: 317px;
  height: 127px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CardLinkLargeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid ${color.borderLine200};
  object-fit: cover;
`;

const CardLinkLargeTextBox = styled.div`
  width: 183px;
  color: ${color.gray900};
  display: flex;
  flex-direction: column;
  align-self: baseline;
`;

const CardLinkLargeTextTitle = styled(Body2)`
  height: 40px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardLinkLargeTextDescription = styled(Caption1)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardLinkLarge = ({
  imageUrl = defaultImage,
  title = '영상 제목입니다. 두 줄까지 허용됩니다. ',
  description = '영상 메모 영역입니다. 2줄까지 하용됩니다. ',
  ...props
}: CardLinkLargeProps): JSX.Element => {
  return (
    <CardLinkLargeContainer {...props}>
      <CardLinkLargeImage src={imageUrl} />
      <CardLinkLargeTextBox>
        <CardLinkLargeTextTitle>{title}</CardLinkLargeTextTitle>
        <CardLinkLargeTextDescription>
          {description}
        </CardLinkLargeTextDescription>
      </CardLinkLargeTextBox>
    </CardLinkLargeContainer>
  );
};

export default CardLinkLarge;
