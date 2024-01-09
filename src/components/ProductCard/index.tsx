'use client';
import React from 'react';
import style from './productCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import { convertToSlug, formatCurrency } from '@/utils/help';
interface ProductCardProps {
  id: string;
  name: string;
  img: StaticImageData;
  price: number;
  category: string;
}
const ProductCard = (props: ProductCardProps) => {
  return (
    <div className={style.productCard}>
      <Image width={270} height={270} src={props.img} alt="" />
      <div className={style.text}>
        <a href={`/${convertToSlug(props.category)}/${props.id}`}>{props.name}</a>
        <p>{props.category}</p>
        <span>{formatCurrency(props.price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
