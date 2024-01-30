'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './cart.module.scss';
import { useCart } from '@/contexts/CartContext';
import cartIcon from '@public/icons/cart.svg';
import CartItem from '../CartItem';

const Cart = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { cartState } = useCart();
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };
  return (
    <div className={style.cart}>
      <button onClick={handleOpenCart} style={openCart ? { background: '#f7f7f7' } : {}}>
        <Image src={cartIcon} alt="search" />
        {cartState.items.length > 0 && <span>{cartState.items.length}</span>}
      </button>
      {openCart && (
        <div className={style.box}>
          <div className={style.container}>
            {cartState.items.map((item) => (
              <CartItem key={item._id} product={item} />
            ))}
          </div>
          <div className={style.btn}>
            <button>Thanh toán ngay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
