import { styled } from 'styled-components';
import { color, font } from '../../styles';
import { Icon } from '../icon';
import { IthumbnailsProps } from '../../types/thumbnailsTypes';

const ThumbnailsContainer = styled.div<IthumbnailsProps>`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ThumbnailsImage = styled.img<IthumbnailsProps>`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  border: ${(props) =>
    props.mediaState === 'select' || props.mediaState === 'play'
      ? 'none'
      : '1px solid' + `${color.borderLine200}`};
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

const ThumbnailsIconContainer = styled.div<IthumbnailsProps>`
  position: absolute;
  width: ${(props) => (props.mediaState === 'delete' ? '24px' : '34px')};
  height: ${(props) => (props.mediaState === 'delete' ? '24px' : '34px')};
  top: ${(props) => (props.mediaState === 'delete' ? '-8px' : '34px')};
  right: ${(props) => (props.mediaState === 'delete' ? '-8px' : '34px')};
  cursor: pointer;
`;

const ThumbnailsColorContainer = styled.div<IthumbnailsProps>`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.mediaState === 'select'
      ? `${color.primary500}`
      : props.mediaState === 'play' || props.mediaState === 'error'
      ? 'rgba(40,40,40)'
      : null};
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
  left: -20px;
`;

const Thumbnails = ({
  src,
  mediaState,
  mediaType,
  runningTime,
}: IthumbnailsProps): JSX.Element => {
  return (
    <>
      <ThumbnailsContainer mediaState={mediaState}>
        <ThumbnailsImage src={src} mediaState={mediaState}></ThumbnailsImage>
        {mediaType === 'video' && (
          <>
            <ThumbnailsTimeBox>{runningTime}</ThumbnailsTimeBox>
            {mediaState === 'play' && (
              <>
                <ThumbnailsColorContainer
                  mediaState={mediaState}></ThumbnailsColorContainer>
                <ThumbnailsIconContainer>
                  <Icon name='playCircle32px' />
                </ThumbnailsIconContainer>
              </>
            )}
          </>
        )}

        {mediaState === 'error' ? (
          <>
            <ThumbnailsColorContainer
              mediaState={mediaState}></ThumbnailsColorContainer>
            <ThumbnailsIconContainer>
              <Icon name='error32px' />
              <ThumbnailsTextBox>원본 파일 삭제됨</ThumbnailsTextBox>
            </ThumbnailsIconContainer>
          </>
        ) : null}

        {mediaState === 'delete' && (
          <ThumbnailsIconContainer mediaState={mediaState}>
            <Icon name='mediaDelete' />
          </ThumbnailsIconContainer>
        )}

        {mediaState === 'select' && (
          <>
            <ThumbnailsColorContainer
              mediaState={mediaState}></ThumbnailsColorContainer>
            <ThumbnailsIconContainer mediaState={mediaState}>
              <Icon name='checkCircle32px' />
            </ThumbnailsIconContainer>
          </>
        )}
      </ThumbnailsContainer>
    </>
  );
};

export default Thumbnails;

// select, error, play일 때 컬러 박스가 씌워지고 그 때 삼항 연산자로 색상을 구분하고, 또 다른 삼항연산자로 아이콘을 구분한다.
// 그러면 굳이 상태를 다 나눠서 컴포넌트를 모두 써야 할 필요가 없다
