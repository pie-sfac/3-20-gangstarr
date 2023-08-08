import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from 'styled-components';

const TimePickerContainer = styled.div`
  width: 77px;

  & > div {
    height: 280px;
    font-size: 26px;

    & > div > div {
    }
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  height: 56px !important;
`;

const TimePicker = () => {
  const hours = Array(24)
    .fill(null)
    .map((e, i) => (e = i + 1));

  return (
    <TimePickerContainer>
      <Swiper
        direction={'vertical'}
        slidesPerView={5}
        loop={true}
        slideToClickedSlide={true}
        centeredSlides={true}
        onSlideChange={(swiper) => console.log(swiper.realIndex + 1)}>
        {hours.map((e) => (
          <CustomSwiperSlide key={e}></CustomSwiperSlide>
        ))}
      </Swiper>
    </TimePickerContainer>
  );
};

export default TimePicker;
