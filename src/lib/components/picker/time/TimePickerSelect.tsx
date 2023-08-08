import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from 'styled-components';
import { font } from '../../../styles';
import { ItimePickerSelectProps } from '../../../types/pickerTypes';

const TimePickerSelectContainer = styled.div`
  width: 77px;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  mask-size: 100% 50%;
  mask-repeat: no-repeat;
  mask-position: top, bottom;
  -webkit-mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: top, bottom;

  & > div {
    height: 280px;
    font-size: 26px;
    font-weight: ${font.fontWeight.fontWeight700};
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  height: 56px !important;
  cursor: pointer;
  font-size: ${({ $isActive }) => ($isActive ? font.fontSize.fontSize38 : '')};
`;

const TimePickerSelect = ({
  mode,
  size = 24,
  initalTime = 0,
  setSelectTime,
}: ItimePickerSelectProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number | string>(initalTime);
  const item = Array(size)
    .fill(null)
    .map((e, i) => (e = i));

  return (
    <TimePickerSelectContainer>
      <Swiper
        direction={'vertical'}
        slidesPerView={5}
        loop={true}
        slideToClickedSlide={true}
        centeredSlides={true}
        initialSlide={initalTime}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
          setSelectTime((prev) => {
            return { ...prev, [mode]: swiper.realIndex };
          });
        }}>
        {item.map((e, i) => (
          <CustomSwiperSlide $isActive={i === currentIndex} key={e}>
            {e}
          </CustomSwiperSlide>
        ))}
      </Swiper>
    </TimePickerSelectContainer>
  );
};

export default TimePickerSelect;
