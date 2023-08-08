import { styled } from 'styled-components';
import { color, font } from '../../styles';
import { Icon } from '../icon';
import {
  IthumbnailsProps,
  IthumbnailsStyleProps,
} from '../../types/thumbnailsTypes';
import { getThumbnailsStyleOptions } from '../../util/thumbnailsUtils';

const ThumbnailsContainer = styled.div<IthumbnailsProps>`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ThumbnailsImage = styled.img<{
  $styleOptions: IthumbnailsStyleProps;
}>`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: ${({ $styleOptions }) => $styleOptions.imageBorder};
  object-fit: cover;
  position: relative;
`;

const ThumbnailsTimeBox = styled.div`
  width: 46px;
  height: 23px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(40, 40, 40, 0.6);
  font-size: ${font.fontSize.fontSize12};
  font-weight: ${font.fontWeight.fontWeight400};
  line-height: ${font.lineHeight.lineHeight128};
  color: ${color.basicWhite};
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

const ThumbnailsIconContainer = styled.div<{
  $styleOptions: IthumbnailsStyleProps;
}>`
  position: absolute;
  width: ${({ $styleOptions }) => $styleOptions.iconWidth};
  height: ${({ $styleOptions }) => $styleOptions.iconHeight};
  top: ${({ $styleOptions }) => $styleOptions.iconTop};
  right: ${({ $styleOptions }) => $styleOptions.iconRight};
  cursor: pointer;
`;

const ThumbnailsColorContainer = styled.div<{
  $styleOptions: IthumbnailsStyleProps;
}>`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-color: ${({ $styleOptions }) => $styleOptions.background};
  position: absolute;
  top: 0;
  opacity: 0.6;
`;

const ThumbnailsTextBox = styled.div`
  width: 79px;
  height: 15px;
  font-size: ${font.fontSize.fontSize12};
  font-weight: ${font.fontWeight.fontWeight400};
  line-height: ${font.lineHeight.lineHeight128};
  color: ${color.gray300};
  position: absolute;
  left: 10px;
  bottom: 25px;
`;

const Thumbnails = ({
  src,
  state,
  type,
  runningTime,
}: IthumbnailsProps): JSX.Element => {
  return (
    <>
      <ThumbnailsContainer>
        <ThumbnailsImage
          src={src}
          $styleOptions={getThumbnailsStyleOptions(state)}></ThumbnailsImage>
        {type === 'video' && (
          <>
            <ThumbnailsTimeBox>{runningTime}</ThumbnailsTimeBox>
          </>
        )}

        {state === 'delete' && (
          <ThumbnailsIconContainer
            $styleOptions={getThumbnailsStyleOptions(state)}>
            <Icon name='mediaDelete' />
          </ThumbnailsIconContainer>
        )}

        {state === 'select' ||
        state === 'error' ||
        (type === 'video' && state === 'play') ? (
          <>
            <ThumbnailsColorContainer
              $styleOptions={getThumbnailsStyleOptions(
                state,
              )}></ThumbnailsColorContainer>
            <ThumbnailsIconContainer
              $styleOptions={getThumbnailsStyleOptions(state)}>
              <Icon
                name={
                  state === 'select'
                    ? 'checkCircle32px'
                    : state === 'error'
                    ? 'error32px'
                    : 'playCircle32px'
                }
              />
            </ThumbnailsIconContainer>
          </>
        ) : null}

        {state === 'error' && (
          <ThumbnailsTextBox>원본 파일 삭제됨</ThumbnailsTextBox>
        )}
      </ThumbnailsContainer>
    </>
  );
};

export default Thumbnails;
