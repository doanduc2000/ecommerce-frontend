'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import style from './cart.module.scss';
import { useCart } from '@/contexts/CartContext';
import cartIcon from '@public/icons/cart.svg';
import CartItem from '../CartItem';
import { useOutside } from '@/utils/const';

const Cart = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const { cartState } = useCart();
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  useOutside(cartRef, handleOpenCart);
  return (
    <div className={style.cart}>
      <button onClick={handleOpenCart} style={openCart ? { background: '#f7f7f7' } : {}}>
        <Image src={cartIcon} alt="search" />
        {cartState.items.length > 0 && <span>{cartState.items.length}</span>}
      </button>
      {openCart && (
        <div className={style.box} ref={cartRef}>
          {cartState.items.length === 0 ? (
            <p>Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
          ) : (
            <>
              <div className={style.container}>
                {cartState.items.map((item) => (
                  <CartItem key={item._id} product={item} />
                ))}
              </div>
              <div className={style.btn}>
                <button>Thanh toán ngay</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
