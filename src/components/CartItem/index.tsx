'use client';
import Image from 'next/image';
import React from 'react';
import style from './cartItem.module.scss';
import nailDemo from '@public/images/nails-demo.jpg';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/models/product';

const CartItem = ({ product }: { product: Product }) => {
  const { cartState, increaseByNumber, decreaseByNumber } = useCart();
  return (
    <div className={style.item}>
      <div className={style.left}>
        <Image width={100} height={100} src={nailDemo} alt="" />
        <div className={style.info}>
          <span>Mẫu 1</span>
          <p>Mô tả 1</p>
        </div>
      </div>

      <div className={style.control}>
        <button
          onClick={() => {
            decreaseByNumber(product);
          }}
        >
          -
        </button>
        <span>{cartState.items.find((item) => item._id === product._id)?.buyNumber}</span>
        <button
          onClick={() => {
            increaseByNumber(product);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
