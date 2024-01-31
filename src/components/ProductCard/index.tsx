'use client';
import React from 'react';
import style from './productCard.module.scss';
import Image from 'next/image';
import { convertToSlug, formatCurrency } from '@/utils/help';
import { Product } from '@/models/product';
import imgDemo from '@public/images/nails-demo.jpg';
import Link from 'next/link';

const ProductCard = (props: Product) => {
  return (
    <div className={style.productCard}>
      <Image width={270} height={270} src={imgDemo} alt="" />
      <div className={style.text}>
        <Link href={`/nails/${convertToSlug(props.name)}-${props._id}.html`}>{props.name}</Link>
        <p>{props.categories.name}</p>
        <span>{formatCurrency(props.price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
