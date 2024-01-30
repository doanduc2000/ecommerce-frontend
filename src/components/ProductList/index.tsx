'use client';
import React from 'react';
import style from './productList.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import nailDemo from '@public/images/nails-demo.jpg';
import ProductCard from '../ProductCard';
import { convertToSlug } from '@/utils/help';
import { Product } from '@/models/product';

const data = [
  { id: '1', name: 'Mẫu 1', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '2', name: 'Mẫu 2', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '3', name: 'Mẫu 3', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '4', name: 'Mẫu 4', img: nailDemo, price: 100000, category: 'Nails' },
  { id: '5', name: 'Mẫu 5', img: nailDemo, price: 100000, category: 'Nails' },
];
interface ProductListProps {
  title: string;
  products: Product[];
}
const ProductList = (props: ProductListProps) => {
  return (
    <div className={style.productList}>
      <a href={`/${convertToSlug(props.title)}`} className={style.header}>
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
        {props.products.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
