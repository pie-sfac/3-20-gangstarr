import { styled } from 'styled-components';
import CardBase from './CardBase';
import defaultImage from '../../assets/defaultMediumImage.png';
import { color } from '../../styles';
import { Body4 } from '../typography';
import { Icon } from '../icon';
import { CardLinkMediumProps } from '../../types/cardTypes';
import { HTMLAttributes } from 'react';

const CardLinkMediumContainer = styled(CardBase)`
  width: 244px;
  height: 66px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const CardLinkMediumCancel = styled.button<HTMLAttributes<HTMLDivElement>>`
  position: absolute;
  top: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 100%;
  background: none;
  cursor: pointer;
`;

const CardLinkMediumImage = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border: 0.42px solid ${color.borderLine300};
  border-radius: 4px;
`;

const CardLinkMediumText = styled(Body4)`
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardLinkMedium = ({
  imageUrl = defaultImage,
  isDelete,
  ...props
}: CardLinkMediumProps): JSX.Element => {
  return (
    <CardLinkMediumContainer>
      {isDelete && (
        <CardLinkMediumCancel {...props}>
          <Icon name='mediaDelete' />
        </CardLinkMediumCancel>
      )}
      <CardLinkMediumImage src={imageUrl}></CardLinkMediumImage>
      <CardLinkMediumText>
        허리 디스크 질환이 의심될때허리 디스크 질환이 의심될때..
      </CardLinkMediumText>
    </CardLinkMediumContainer>
  );
};

export default CardLinkMedium;
