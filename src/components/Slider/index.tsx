'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '@public/images/banner-1.jpg';
import './slider.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export default function Slider() {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      rewind={true}
      navigation
      pagination={{ enabled: true, clickable: true }}
    >
      <SwiperSlide>
        <Image src={banner} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
