'use client';
import React from 'react';
import style from './productList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import nailDemo from '@public/images/nails-demo.jpg';

interface ProductListProps {
  title: string;
}
const ProductList = (props: ProductListProps) => {
  return (
    <div className={style.productList}>
      <a href="/products" className={style.header}>
        <h2 className={style.title}>{props.title}</h2>
      </a>
      <Swiper
        className={style.box}
        scrollbar={{
          hide: true,
        }}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Scrollbar, Navigation]}
        rewind={false}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          321: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className={style.slideItem}>
            <Image width={270} height={270} src={nailDemo} alt="" />
            <div className={style.text}>
              <a href="/nails/1">Mẫu 1</a>
              <p>{props.title}</p>
              <span>2,929,000₫</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideItem}>
            <Image width={270} height={270} src={nailDemo} alt="" />
            <div className={style.text}>
              <a href="/nails/1">Mẫu 1</a>
              <p>{props.title}</p>
              <span>2,929,000₫</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideItem}>
            <Image width={270} height={270} src={nailDemo} alt="" />
            <div className={style.text}>
              <a href="/nails/1">Mẫu 1</a>
              <p>{props.title}</p>
              <span>2,929,000₫</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideItem}>
            <Image width={270} height={270} src={nailDemo} alt="" />
            <div className={style.text}>
              <a href="/nails/1">Mẫu 1</a>
              <p>{props.title}</p>
              <span>2,929,000₫</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideItem}>
            <Image width={270} height={270} src={nailDemo} alt="" />
            <div className={style.text}>
              <a href="/nails/1">Mẫu 1</a>
              <p>{props.title}</p>
              <span>2,929,000₫</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductList;
