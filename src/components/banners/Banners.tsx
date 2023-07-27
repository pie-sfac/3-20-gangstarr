import { styled } from 'styled-components';
import { color } from '../../styles';
import { Caption1 } from '../typography';
import { BannersProps, BannersStyleProps } from '../../types/bannersTypes';

const BannersContainer = styled.div<BannersStyleProps>`
  width: 312px;
  height: 80px;
  padding: 0 16px 0 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
  ${({ $mode }) =>
    $mode
      ? `
        background: ${color.primary500};
        color: ${color.textTextWhite};
      `
      : `
        border: 1px solid ${color.borderLine200}
      `};
`;

const BannersTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BannersDescription = styled(Caption1)`
  font-weight: 600;
`;

const BannersImage = styled.img`
  width: 115px;
  height: calc(100% - 2px);
  object-fit: cover;
  border: none;
  background: none;
`;

const Banners = ({
  mode,
  title = '제품명',
  description = '설명',
  imageUrl,
}: BannersProps) => {
  return (
    <BannersContainer $mode={mode === 'primary'}>
      <BannersTextBox>
        <Caption1>{title}</Caption1>
        <BannersDescription>{description}</BannersDescription>
      </BannersTextBox>
      <BannersImage src={imageUrl} />
    </BannersContainer>
  );
};

export default Banners;
