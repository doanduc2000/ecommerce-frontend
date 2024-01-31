'use client';
import React from 'react';
import style from './productDetail.module.scss';
import productDemo from '@public/images/nails-demo.jpg';
import Image from 'next/image';
import { formatCurrency } from '@/utils/help';
import ProductList from '@/components/ProductList';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/models/product';

const ProductDetail = ({ product }: { product: Product }) => {
  const { cartState, increaseByNumber, decreaseByNumber, addToCart } = useCart();
  return (
    <div className="container">
      <div className={style.productDetail}>
        <div className={style.picture}>
          <Image width={1200} height={1200} src={productDemo} alt="" />
        </div>
        <div className={style.info}>
          <h2 className={style.title}>{product.name}</h2>
          <span className={style.desc}>{product.categories.name}</span>
          <span className={style.price}>{formatCurrency(product.price)}</span>
          <div className={style.control}>
            {cartState.items.some((item: any) => item._id === product._id) ? (
              <div className={style.btn}>
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
            ) : (
              <>
                <button
                  className={style.cart}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className={style.regist}>Đặt lịch ngay</button>
              </>
            )}
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      {/* <ProductList title={'Gợi ý'} /> */}
    </div>
  );
};

export default ProductDetail;
